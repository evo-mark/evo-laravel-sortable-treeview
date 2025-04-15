<template>
	<div class="evo-sortable-treeview">
		<slot name="header"> </slot>
		<ForwardSlots :slots="$slots">
			<SortableTreeviewChildren v-model="modelValue" :depth="0" is-expanded></SortableTreeviewChildren>
		</ForwardSlots>
	</div>
</template>

<script setup>
import SortableTreeviewChildren from "./_SortableTreeviewChildren.vue";
import { ForwardSlots } from "@evomark/vue-forward-slots";
import { usePage } from "@inertiajs/vue3";
import { useId, provide } from "vue";
import { SORTABLE_TREEVIEW } from "./keys";
import { pick } from "lodash-es";
import axios from "axios";

defineOptions({
	name: "EvoSortableTreeview",
});

const id = useId();

function isPromise(p) {
	return typeof p === "object" && typeof p.then === "function";
}

const emit = defineEmits(["sorted"]);
const props = defineProps({
	model: {
		type: [String, Object],
		required: true,
	},
});

const modelObject = computed(() => (typeof props.model === "string" ? usePage().props[props.model] : props.model));
const config = computed(() => modelObject.value.config);
const modelData = computed(() => modelObject.value?.data ?? modelObject.value);
const modelValue = ref(modelData.value);
watch(modelData, (data) => (modelValue.value = data));

provide(SORTABLE_TREEVIEW, {
	group: id,
	config,
	treeProps: computed(() => pick(props, ["itemChildren", "itemChildrenCount", "itemTitle", "itemValue"])),
	onSorted: () => console.log("Sorted"),
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
});
</script>

<style>
.evo-sortable-treeview {
}
</style>
