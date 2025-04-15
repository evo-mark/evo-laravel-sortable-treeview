<template>
	<VExpandTransition>
		<VueDraggable v-if="props.isExpanded" v-model="modelValue" v-bind="draggableProps">
			<ForwardSlots :slots="$slots">
				<SortableTreeviewItem
					v-for="item in modelValue"
					:key="`${item[itemValue]}_item`"
					:item="item"
					:depth="props.depth"
				>
				</SortableTreeviewItem>
			</ForwardSlots>
		</VueDraggable>
	</VExpandTransition>
</template>

<script setup>
import { inject, normalizeClass } from "vue";
import { VueDraggable } from "vue-draggable-plus";
import { ForwardSlots } from "@evomark/vue-forward-slots";
import SortableTreeviewItem from "./_SortableTreeviewItem.vue";
import { SORTABLE_TREEVIEW } from "./keys";

defineOptions({
	name: "EvoSortableTreeviewChildren",
});

const modelValue = defineModel({
	type: Array,
	required: true,
});

const props = defineProps({
	depth: {
		type: Number,
		required: true,
	},
	parentId: {
		type: [String, Number],
		default: null,
	},
	isEmpty: {
		type: Boolean,
		default: false,
	},
	isExpanded: {
		type: Boolean,
		default: false,
	},
});

const context = inject(SORTABLE_TREEVIEW);
const itemValue = computed(() => context.config.value.itemValue);

const draggableProps = computed(() => ({
	class: "evo-sortable-treeview__drag-area",
	style: {
		minHeight: props.isEmpty ? "1px" : "",
		paddingLeft: props.parentId ? "1rem" : "0px",
	},
	tag: "ul",
	group: context.group,
	draggable: "li",
	handle: ".drag-handle",
	"onUpdate:modelValue": context.onSorted,
}));
</script>

<style>
.evo-sortable-treeview__drag-area {
	list-style-type: none;
}
</style>
