<template>
	<div ref="treeview" class="evo-sortable-treeview">
		<header
			class="evo-sortable-treeview__header"
			:style="{
				'--max-columns-width': `${maxColumnsWidth}px`,
			}"
		>
			<slot name="header"></slot>
		</header>
		<ForwardSlots :slots="$slots">
			<SortableTreeviewChildren v-model="modelValue" :depth="0" is-expanded></SortableTreeviewChildren>
		</ForwardSlots>
	</div>
</template>

<script setup>
import SortableTreeviewChildren from "./_SortableTreeviewChildren.vue";
import { ForwardSlots } from "@evomark/vue-forward-slots";
import { useElementSize } from "@vueuse/core";
import { usePage } from "@inertiajs/vue3";
import { useId, provide } from "vue";
import { SORTABLE_TREEVIEW } from "./keys";
import { pick } from "lodash-es";
import axios from "axios";

defineOptions({
	name: "EvoSortableTreeview",
});

const id = useId();

const emit = defineEmits(["sorted"]);
const props = defineProps({
	model: {
		type: [String, Object],
		required: true,
	},
});
const treeviewRef = useTemplateRef("treeview");
const { width: treeviewWidth } = useElementSize(treeviewRef);

const modelObject = computed(() => (typeof props.model === "string" ? usePage().props[props.model] : props.model));
const config = computed(() => modelObject.value?.config ?? {});
const modelData = computed(() => modelObject.value?.data ?? modelObject.value);
const modelValue = ref(modelData.value);
watch(modelData, (data) => {
	modelValue.value = data;
});

const actionsWidth = ref(new Map());
const maxActionsWidth = computed(() => {
	return Math.ceil(
		Math.max(
			...Array.from(actionsWidth.value.values()).map((width) => {
				return width.value ?? 0;
			}),
		),
	);
});
const maxColumnsWidth = computed(() => {
	return treeviewWidth.value - maxActionsWidth.value;
});

/* const refresh = debounce(() => {
	router.reload({
		only: [props.model],
		async: true,
		preserveScroll: true,
		preserveState: true,
		onSuccess() {
			modelValue.value = modelData.value;
		},
	});
}, 100); */

provide(SORTABLE_TREEVIEW, {
	group: id,
	config,
	actionsWidth: maxActionsWidth,
	columnsWidth: maxColumnsWidth,
	treeProps: computed(() => pick(props, ["itemChildren", "itemChildrenCount", "itemTitle", "itemValue"])),
	onSorted: ($event, parentId) => {
		const ids = $event.map((item) => item[config.value.itemValue]) ?? [];
		emit("sorted", {
			parentId,
			ids,
			$event,
		});
		return axios({
			url: config.value.updateSortOrderRoute,
			method: config.value.updateSortOrderMethod,
			data: {
				model: modelObject.value.modelClass,
				parent_id: parentId,
				ids,
			},
			responseType: "json",
		});
	},
	onLoadChildren: (item) => {
		return axios({
			url: config.value.loadChildrenRoute,
			method: config.value.loadChildrenMethod,
			params: {
				model: modelObject.value.modelClass,
				model_id: item[config.value.itemValue],
			},
		});
	},
	registerItem: (nodeId, width) => {
		actionsWidth.value.set(nodeId, width);
	},
	unregisterItem: (nodeId) => {
		actionsWidth.value.delete(nodeId);
	},
});
</script>

<style>
.evo-sortable-treeview__header {
	width: var(--max-columns-width);
	margin-left: auto;
}
</style>
