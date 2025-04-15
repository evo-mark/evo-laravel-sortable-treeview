<?php

declare(strict_types=1);

namespace EvoMark\EvoLaravelSortableTreeview\Traits;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use EvoMark\EvoLaravelSortableTreeview\SortableTreeviewResource;

trait SortableTreeController
{
    protected string $treeviewModel = "";

    public function setTreeviewModel(string $model)
    {
        $this->treeviewModel = $model;
    }

    public function loadTreeviewChildren(Request $request)
    {
        $validated = $request->validate([
            'model' => ['required', 'string'],
            'model_id' => ['required']
        ]);

        $modelClass = base64_decode($validated['model']);
        $model = $modelClass::find($validated['model_id']);

        $model->load(['directDescendants' => function ($subquery) {
            $subquery->orderBy('sort_order')->withCount('directDescendants');
        }]);

        return response()->json([
            'children' => SortableTreeviewResource::collection($model->directDescendants),
        ]);
    }

    public function updateTreeviewSortOrder(Request $request)
    {
        $validated = $request->validate([
            'parentId' => ['nullable', 'integer', 'exists:categories,id'],
            'ids' => ['nullable', 'array'],
            'ids.*' => ['required', 'integer', 'exists:categories,id'],
        ]);

        $parentId = $validated['parentId'] ?? null;
        foreach ($validated['ids'] as $index => $id) {
            Category::where('id', $id)->update([
                'parent_id' => $parentId,
                'sort_order' => $index + 1,
            ]);
        }

        Cache::flush();

        return $this->respondSuccess();
    }
}
