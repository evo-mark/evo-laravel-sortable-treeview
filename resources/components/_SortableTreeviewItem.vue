<template>
	<li class="evo-sortable-treeview__item">
		<div class="evo-sortable-treeview__item-content">
			<div ref="item" class="evo-sortable-treeview__actions">
				<div
					class="evo-sortable-treeview__action-expand"
					:class="{
						'is-expanded': isExpanded,
					}"
				>
					<VBtn
						v-if="hasChildren"
						icon
						variant="flat"
						size="small"
						:loading="isLoadingChildren"
						@click="onExpandToggle"
					>
						<SvgIcon
							class="evo-sortable-treeview__expand-icon"
							size="24"
							:path="mdiChevronRight"
							:rotate="isExpanded ? 90 : 0"
						/>
					</VBtn>
				</div>
				<div class="evo-sortable-treeview__action-drag">
					<VBtn variant="plain" size="small" class="drag-handle cursor-move">
						<SvgIcon :path="mdiDragVertical" />
					</VBtn>
				</div>
				<div class="evo-sortable-treeview__action-title">
					<slot name="item.prepend-title" :item="props.item"></slot>
					<slot name="item.title" :item="props.item" :title="props.item[itemTitle]">
						{{ props.item[itemTitle] }}
					</slot>
					<slot name="item.append-title" :item="props.item"></slot>
				</div>
			</div>
			<div class="d-flex align-center flex" ref="columns">
				<slot name="item.columns" :item="data"></slot>
			</div>
		</div>
		<ForwardSlots :slots="$slots">
			<SortableTreeviewChildren
				v-model="_children"
				:is-expanded="isExpanded"
				:is-empty="!hasChildren"
				:depth="props.depth + 1"
				:parent-id="props.item[itemValue]"
			></SortableTreeviewChildren>
		</ForwardSlots>
	</li>
</template>

<script setup>
import SvgIcon from "vue3-icon";
import { syncRef } from "@vueuse/core";
import { VBtn } from "vuetify/components";
import { SORTABLE_TREEVIEW } from "./keys";
import { useElementSize } from "@vueuse/core";
import { useApiSync } from "../composables/useApiSync";
import { ForwardSlots } from "@evomark/vue-forward-slots";
import { mdiChevronRight, mdiDragVertical } from "@mdi/js";
import SortableTreeviewChildren from "./_SortableTreeviewChildren.vue";
import { useId, inject, useTemplateRef, computed, ref, watch } from "vue";

defineOptions({
	name: "EvoSortableTreeviewItem",
});

const props = defineProps({
	item: {
		type: Object,
		required: true,
	},
	depth: {
		type: Number,
		required: true,
	},
});

const id = useId();
const columnsRef = useTemplateRef("columns");
const context = inject(SORTABLE_TREEVIEW);
const itemTitle = computed(() => context.config.value.itemTitle);
const itemValue = computed(() => context.config.value.itemValue);
const itemChildren = computed(() => context.config.value.itemChildren);
const itemChildrenCount = computed(() => context.config.value.itemChildrenCount);

/* *********************************************************
 * ITEM UPDATE
 ********************************************************* */
const { data, error } = useApiSync(() => props.item, {
	...context.config.value,
	onSuccess: (data) => {
		context.emit("updated", data);
	},
	onError: (data) => {
		context.emit("error", data);
	},
});

/* *********************************************************
 * WIDTH
 ********************************************************* */
const columnWidths = ref([]);
const { width: columsContainerWidth } = useElementSize(columnsRef);

watch(
	columsContainerWidth,
	(v) => {
		if (!columnsRef.value) return [];
		columnWidths.value = Array.from(columnsRef.value?.children).map((el) => {
			const { width } = el.getBoundingClientRect();
			return width;
		});
	},
	{
		immediate: true,
	},
);
const { registerItem } = inject(SORTABLE_TREEVIEW);
registerItem(id, columnWidths);

const _children = ref([]);
const hasChildren = computed(() => {
	if (props.item[itemChildrenCount.value] > 0)
		return true; // Lazy
	else if (_children.value?.length)
		return true; // Loaded
	else if (Array.isArray(props.item[itemChildren.value]) && props.item[itemChildren.value]?.length > 0)
		return true; // Eager
	else return false; // None
});
const isLoadingChildren = ref(false);
syncRef(() => props.item[itemChildren.value], _children, {
	direction: "ltr",
	transform: {
		ltr: (left) => {
			// TODO: Logic here to preserve loaded children when page props are reloaded
			return left;
		},
	},
	immediate: true,
});
const childrenLoaded = computed(() => hasChildren.value && _children.value?.length > 0);

/* *********************************************
 * Expand
 * ******************************************* */

const isExpanded = ref(false);
const onExpandToggle = () => {
	if (isExpanded.value || childrenLoaded.value) return (isExpanded.value = !isExpanded.value); // Children already loaded

	isLoadingChildren.value = true;
	context
		.onLoadChildren(props.item)
		.then((res) => {
			_children.value = res.data.children ?? [];
			isExpanded.value = !isExpanded.value;
		})
		.finally(() => {
			isLoadingChildren.value = false;
		});
};
</script>

<style>
.evo-sortable-treeview__item {
}
.evo-sortable-treeview__item-content {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-right: 0.5rem;
}
.evo-sortable-treeview__actions {
	min-height: 40px;
	display: flex;
	align-items: center;
}

.evo-sortable-treeview__action-expand {
	min-width: 40px;

	.v-icon__svg {
		transition: transform 300ms ease-in-out;
	}
	&.is-expanded .v-icon__svg {
		transform: rotate(90deg);
	}
}

.evo-sortable-treeview__action-title {
	white-space: nowrap;
	padding-right: 3rem;
}

.evo-sortable-treeview__expand-icon {
	transition: transform 150ms ease-in-out;
}

.evo-sortable-treeview__spacer {
	flex-grow: 1;
}
</style>
