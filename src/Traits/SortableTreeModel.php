<?php

declare(strict_types=1);

namespace EvoMark\EvoLaravelSortableTreeview\Traits;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

trait SortableTreeModel
{
    protected array $descendantsWith = [];

    public function descendants(): HasMany
    {
        return $this->hasMany(static::class, 'parent_id')->orderBy('sort_order')->with('descendants', ...$this->descendantsWith);
    }

    public function directDescendants(): HasMany
    {
        $relation = $this->hasMany(static::class, 'parent_id');

        if (count($this->descendantsWith) > 0) {
            $relation->with(...$this->descendantsWith);
        }

        return $relation->orderBy('sort_order');
    }

    public function scopeRoot(): Builder
    {
        return $this->whereNull('parent_id');
    }

    public function parent(): BelongsTo
    {
        return $this->belongsTo(static::class, 'parent_id', 'id');
    }
}
