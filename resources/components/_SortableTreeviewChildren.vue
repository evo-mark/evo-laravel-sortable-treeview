<template>
	<VExpandTransition>
		<VueDraggable v-if="props.isExpanded || props.isEmpty" v-model="modelValue" v-bind="draggableProps">
			<SortableTreeviewItem
				v-for="item in modelValue"
				:key="`${item[itemValue]}_item`"
				:item="item"
				:depth="props.depth"
			>
				<template v-for="(_, name) in $slots" #[name]="slotData">
					<slot :name="name" v-bind="slotData" />
				</template>
			</SortableTreeviewItem>
		</VueDraggable>
	</VExpandTransition>
</template>

<script setup>
import { inject, computed } from "vue";
import { SORTABLE_TREEVIEW } from "./keys";
import { VueDraggable } from "vue-draggable-plus";
import { VExpandTransition } from "vuetify/components";
import SortableTreeviewItem from "./_SortableTreeviewItem.vue";

defineOptions({
	name: "EvoSortableTreeviewChildren"
});

const modelValue = defineModel({
	type: Array,
	required: true
});

const props = defineProps({
	depth: {
		type: Number,
		required: true
	},
	parentId: {
		type: [String, Number],
		default: null
	},
	isEmpty: {
		type: Boolean,
		default: false
	},
	isExpanded: {
		type: Boolean,
		default: false
	}
});

const context = inject(SORTABLE_TREEVIEW);
const itemValue = computed(() => context.config.value.itemValue);

const draggableProps = computed(() => ({
	class: "evo-sortable-treeview__drag-area",
	style: {
		minHeight: props.isEmpty ? "1px" : "",
		paddingLeft: props.parentId ? "1rem" : "0px"
	},
	tag: "ul",
	group: context.group,
	draggable: "li",
	handle: ".drag-handle",
	"onUpdate:modelValue": ($event) => context.onSorted($event, props.parentId)
}));
</script>

<style>
.evo-sortable-treeview__drag-area {
	list-style-type: none;
}
</style>
