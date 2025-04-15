<?php

declare(strict_types=1);

namespace EvoMark\EvoLaravelSortableTreeview\Traits;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
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

        $model = $this->getTreeviewModelInstance($validated);

        $model->load(['directDescendants' => function ($subquery) {
            $subquery->orderBy('sort_order')->withCount('directDescendants');
        }]);

        return response()->json([
            'children' => SortableTreeviewResource::collection($model->directDescendants),
        ]);
    }

    private function getTreeviewModelInstance(array $data): Model
    {
        $modelClass = base64_decode($data['model']);
        return $modelClass::find($data['model_id']);
    }

    public function updateTreeviewSortOrder(Request $request)
    {
        $validated = $request->validate([
            'model' => ['required', 'string'],
            'parent_id' => ['nullable', 'integer'],
            'ids' => ['nullable', 'array'],
            'ids.*' => ['required', 'integer'],
        ]);

        $modelClass = base64_decode($validated['model']);

        $parentId = $validated['parent_id'] ?? null;
        foreach ($validated['ids'] as $index => $id) {
            $modelClass::where('id', $id)->update([
                'parent_id' => $parentId,
                'sort_order' => $index + 1,
            ]);
        }

        Cache::flush();

        return response()->json([]);
    }
}
