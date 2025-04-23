import { watch, nextTick } from "vue";
import { reduce, isEqual, cloneDeep } from "lodash-es";
import axios from "axios";
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
	const updateRoute = config.updateItemRoute;
	const updateMethod = config.updateItemMethod;
	const idField = config.itemValue;

	const cloned = computed(() => cloneDeep(source()));
	const modelValue = ref();
	const dataCloned = computed(() => cloneDeep(modelValue.value));
	const error = refAutoReset(null, 4000);

	const onUpdate = (data) => {
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

	watch(
		cloned,
		(newValue, oldValue) => {
			if (oldValue !== undefined) {
				const diff = getChangedFields(newValue, oldValue);
				if (Object.keys(diff).length > 0) {
					diff[idField] = newValue[idField];
					onUpdate(diff);
				}
			}

			modelValue.value = newValue;
		},
		{
			immediate: true,
			deep: true
		}
	);

	const { pause, resume } = watchPausable(
		dataCloned,
		(newValue, oldValue) => {
			if (oldValue !== undefined) {
				const diff = getChangedFields(newValue, oldValue);
				if (Object.keys(diff).length > 0) {
					diff[idField] = newValue[idField];
					onUpdate(diff).catch(async () => {
						pause();
						await nextTick();
						modelValue.value = oldValue;
						await nextTick();
						resume();
					});
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
		update: onUpdate
	};
};
