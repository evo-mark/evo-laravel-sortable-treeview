<template>
	<li class="evo-sortable-treeview__item">
		<div class="evo-sortable-treeview__actions">
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
					<VIcon size="24" :icon="mdiChevronRight" />
				</VBtn>
			</div>
			<div class="evo-sortable-treeview__action-drag"></div>
			<div class="evo-sortable-treeview__action-title">
				<slot name="item" :item="props.item" :title="props.item[itemTitle]">
					{{ props.item[itemTitle] }}
				</slot>
			</div>
		</div>
		<ForwardSlots :slots="$slots">
			<SortableTreeviewChildren
				v-model="_children"
				:is-expanded="isExpanded"
				:depth="props.depth + 1"
				:parent-id="props.item[itemValue]"
			></SortableTreeviewChildren>
		</ForwardSlots>
	</li>
</template>

<script setup>
import { syncRef } from "@vueuse/core";
import SortableTreeviewChildren from "./_SortableTreeviewChildren.vue";
import { ForwardSlots } from "@evomark/vue-forward-slots";
import { mdiChevronRight } from "@mdi/js";
import { SORTABLE_TREEVIEW } from "./keys";

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

const context = inject(SORTABLE_TREEVIEW);
const itemTitle = computed(() => context.config.value.itemTitle);
const itemValue = computed(() => context.config.value.itemValue);
const itemChildren = computed(() => context.config.value.itemChildren);
const itemChildrenCount = computed(() => context.config.value.itemChildrenCount);

const hasChildren = computed(() => {
	if (props.item[itemChildrenCount.value] > 0)
		return true; // Lazy
	else if (Array.isArray(props.item[itemChildren.value]) && props.item[itemChildren.value]?.length > 0)
		return true; // Eager
	else return false; // None
});
const isLoadingChildren = ref(false);
const _children = ref([]);
const stopSyncChildren = syncRef(() => props.item[itemChildren.value], _children, {
	direction: "ltr",
	transform: {
		ltr: (left) => {
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
	isExpanded.value = !isExpanded.value;
	if (!isExpanded.value || childrenLoaded.value) return; // Children already loaded

	isLoadingChildren.value = true;
	context
		.onLoadChildren(props.item)
		.then((res) => {
			_children.value = res.data.children ?? [];
		})
		.finally(() => {
			isLoadingChildren.value = false;
		});
};
</script>

<style>
.evo-sortable-treeview__actions {
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
</style>
