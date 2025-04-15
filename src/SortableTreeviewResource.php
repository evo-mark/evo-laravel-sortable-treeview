<?php

declare(strict_types=1);

namespace EvoMark\EvoLaravelSortableTreeview;

use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SortableTreeviewResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            ...Arr::except($this->resource->toArray(), ["descendants", "direct_descendants", "direct_descendants_count"]),
            'children' => $this->whenLoaded(
                'descendants',
                fn() => static::collection($this->descendants),
                $this->whenLoaded('directDescendants', fn() => static::collection($this->directDescendants), [])
            ),
            'children_count' => $this->whenCounted('directDescendants') ?? null
        ];
    }
}
