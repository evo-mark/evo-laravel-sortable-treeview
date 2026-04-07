<?php

declare(strict_types=1);

namespace EvoMark\EvoLaravelSortableTreeview\Traits;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

trait SortableTreeModel
{
    protected array $descendantsWith = [];

    protected function getParentColumn(): string
    {
        return "parent_id";
    }

    protected function getSortOrderColumn(): string
    {
        return "sort_order";
    }

    public function descendants(): HasMany
    {
        return $this->hasMany(static::class, $this->getParentColumn())->orderBy($this->getSortOrderColumn())->with('descendants', ...$this->descendantsWith);
    }

    public function directDescendants(): HasMany
    {
        $relation = $this->hasMany(static::class, $this->getParentColumn());

        if (count($this->descendantsWith) > 0) {
            $relation->with(...$this->descendantsWith);
        }

        return $relation->orderBy($this->getSortOrderColumn());
    }

    public function scopeRoot(): Builder
    {
        return $this->whereNull($this->getParentColumn());
    }

    public function parent(): BelongsTo
    {
        return $this->belongsTo(static::class, $this->getParentColumn(), 'id');
    }
}
