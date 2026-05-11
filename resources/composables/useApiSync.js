import axios from "axios";
import { watch, nextTick, computed, ref } from "vue";
import { isEqual, cloneDeep, debounce, merge } from "es-toolkit";
import { reduce } from "es-toolkit/compat";
import { refAutoReset, watchPausable } from "@vueuse/core";

const getChangedFields = (newObj, oldObj) => {
	return reduce(
		newObj,
		(result, value, key) => {
			if (!isEqual(value, oldObj[key])) {
				result[key] = value;
			}
			return result;
		},
		{}
	);
};

export const useApiSync = (source, config = {}) => {
	const disableUpdate = config.disableUpdate === true;
	const useInertia = config.useInertia ?? false;
	const router = config.router;
	const reload = config.reload ?? undefined;
	const debounceTime = config.debounce ?? 500;

	const updateRoute = config.updateItemRoute;
	const updateMethod = config.updateItemMethod;
	const idField = config.itemValue;
	const isImmediate = ref(false);
	const setImmediate = (state = true) => (isImmediate.value = state); 

	const cloned = computed(() => cloneDeep(source()));
	const modelValue = ref();
	const dataCloned = computed(() => cloneDeep(modelValue.value));
	const error = refAutoReset(null, 4000);

	const onUpdate = (data) => {
		if (disableUpdate) {
			return Promise.resolve();
		}

		if (useInertia) {
			return new Promise((resolve,reject) => {
				router.visit(updateRoute, {
					method: updateMethod,
					preserveScroll: true,
					preserveState: true,
					async: true,
					showProgress: false,
					only: reload,
					data,
					onSuccess() {
						if (config.onSuccess && typeof config.onSuccess === "function") {
							config.onSuccess();
						}
						resolve();
					},
					onError(errors) {
						error.value = errors?.[0];
						if (config.onError && typeof config.onError === "function") {
							config.onError(errors);
						}
						reject(errors);
					}
				});
			})
		}

		return axios({
			url: updateRoute,
			method: updateMethod,
			data
		})
			.then((res) => {
				if (config.onSuccess && typeof config.onSuccess === "function") {
					config.onSuccess(res.data);
				}
			})
			.catch((err) => {
				error.value = err.response.data.message;
				if (config.onError && typeof config.onError === "function") {
					config.onError(err.response);
				}
				throw new Error(err);
			});
	};

	// Send changes to the source to the local ref
	watch(
		cloned,
		(v) => {
			modelValue.value = v;
		},
		{
			immediate: true,
			deep: true
		}
	);

	let pendingDiff = {};
	let previousValue = null;
	const debouncedUpdate = debounce(async() => {
		const diff = { ...pendingDiff };
		pendingDiff = {};

		try {
			await onUpdate(diff);
		} catch {
			pause();
			await nextTick();
			modelValue.value = previousValue;
			await nextTick();
			resume();
		}

	}, debounceTime);

	const { pause, resume } = watchPausable(
		dataCloned,
		(newValue, oldValue) => {
			if (oldValue !== undefined) {
				const diff = getChangedFields(newValue, oldValue);
				if (Object.keys(diff).length === 0) return;

				previousValue = oldValue;
				pendingDiff = merge(pendingDiff, diff);

				pendingDiff[idField] = newValue[idField];
				debouncedUpdate();
				if (isImmediate.value) {
					debouncedUpdate.flush();
				}
			}
		},
		{
			deep: true
		}
	);

	return {
		data: modelValue,
		error,
		update: onUpdate,
		setImmediate
	};
};
