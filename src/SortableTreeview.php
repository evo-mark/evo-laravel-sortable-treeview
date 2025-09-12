<?php

declare(strict_types=1);

namespace EvoMark\EvoLaravelSortableTreeview;

use Exception;
use TypeError;
use Illuminate\Support\Str;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Traits\Macroable;
use Illuminate\Database\Eloquent\Builder;
use EvoMark\EvoLaravelSortableTreeview\Traits\SortableTreeModel;
use EvoMark\EvoLaravelSortableTreeview\SortableTreeviewResource;

class SortableTreeview
{
    use Macroable;

    protected array $config;
    protected array $headers;
    protected Builder $query;

    protected Collection $wheres;
    protected Collection $whereNots;
    protected Collection $whereIns;
    protected Collection $whereNotIns;

    protected Collection $withRelations;
    protected Collection $countRelations;

    /**
     * @var string When returning treeview results, use this as a collection resource
     */
    protected string $collection = SortableTreeviewResource::class;

    protected function __construct(
        protected string $model,
    ) {
        $this->wheres = collect([]);
        $this->whereNots = collect([]);
        $this->whereIns = collect([]);
        $this->whereNotIns = collect([]);
        $this->withRelations = collect([]);
        $this->countRelations = collect([]);
    }

    /**
     * Factory function for the class
     */
    public static function for(string $model): static
    {
        static::validateModel($model);

        return new static($model);
    }

    public static function validateModel(string $model): void
    {
        if (!class_exists($model)) {
            throw new TypeError($model .  " is not a valid class");
        }

        $instance = new $model;

        if ($instance instanceof Model === false) {
            throw new TypeError($model .  " is not an Eloquent model");
        }

        $table = $instance->getTable();

        if (!Schema::hasTable($table)) {
            throw new Exception($table . " is not a valid table");
        }

        foreach (["sort_order", "parent_id"] as $column) {
            if (!Schema::hasColumn($table, $column)) {
                throw new Exception($table . " is missing the column " . $column);
            }
        }

        if (in_array(SortableTreeModel::class, class_uses($model)) === false) {
            throw new Exception($model . " is not using the SortableTreeModel trait");
        }
    }

    public function setQuery(Builder $query): static
    {
        $this->query = $query;

        return $this;
    }

    /**
     * Proxy for \Illuminate\Database\Eloquent\Builder::where
     *
     * @param  mixed ...$args
     * @return SortableTreeview An instance of this class
     *
     * @see \Illuminate\Database\Eloquent\Builder::where
     */
    public function where(...$args): static
    {
        $this->wheres->push($args);

        return $this;
    }

    /**
     * Proxy for \Illuminate\Database\Eloquent\Builder::whereNot
     *
     * @param  mixed ...$args
     * @return SortableTreeview An instance of this class
     *
     * @see \Illuminate\Database\Eloquent\Builder::whereNot
     */
    public function whereNot(...$args): static
    {
        $this->whereNots->push($args);

        return $this;
    }

    /**
     * Proxy for \Illuminate\Database\Eloquent\Builder::whereIn
     *
     * @param  mixed ...$args
     * @return SortableTreeview An instance of this class
     *
     * @see \Illuminate\Database\Eloquent\Builder::whereIn
     */
    public function whereIn(...$args): static
    {
        $this->whereIns->push($args);

        return $this;
    }

    /**
     * Proxy for \Illuminate\Database\Eloquent\Builder::whereNotIn
     *
     * @param  mixed ...$args
     * @return SortableTreeview An instance of this class
     *
     * @see \Illuminate\Database\Eloquent\Builder::whereNotIn
     */
    public function whereNotIn(...$args): static
    {
        $this->whereNotIns->push($args);

        return $this;
    }

    /**
     * Proxy for \Illuminate\Database\Eloquent\Builder::with
     *
     * @param  mixed ...$args
     * @return SortableTreeview An instance of this class
     *
     * @see \Illuminate\Database\Eloquent\Builder::with
     */
    public function with($relations, ...$additionalRelations)
    {
        $relations = collect($relations);

        if (!empty($additionalRelations)) {
            $relations = $relations->merge($additionalRelations);
        }

        $this->withRelations = $this->withRelations->merge($relations->flatten()->values());

        return $this;
    }

    /**
     * Proxy for \Illuminate\Database\Eloquent\Builder::withCount
     *
     * @param  mixed ...$args
     * @return SortableTreeview An instance of this class
     *
     * @see \Illuminate\Database\Eloquent\Builder::withCount
     */
    public function withCount($counts, ...$additionalCounts)
    {
        $counts = collect($counts);

        if (!empty($additionalCounts)) {
            $counts = $counts->merge($additionalCounts);
        }

        $this->countRelations = $this->countRelations->merge($counts->flatten()->values());

        return $this;
    }

    public function setConfig(array $config): static
    {
        $routePrefix = Str::wrap(config('sortable-treeview.route-prefix'), '/');

        $config['lazy'] ??= false;
        $config['maxDepth'] ??= null;
        $config['itemChildren'] ??= "children";
        $config['itemChildrenCount'] ??= "children_count";
        $config['itemTitle'] ??= "title";
        $config['itemValue'] ??= "id";
        $config['loadChildrenRoute'] ??= $routePrefix . "lazy";
        $config['loadChildrenMethod'] ??= "get";
        $config['updateSortOrderRoute'] ??= $routePrefix . "sort";
        $config['updateSortOrderMethod'] ??= "put";
        $config['updateItemRoute'] ??= "";
        $config['updateItemMethod'] ??= "PATCH";

        $this->config = $config;

        return $this;
    }

    public function setCollection(string $collection): static
    {
        $this->collection = $collection;

        return $this;
    }

    public function setHeaders(array $headers): static
    {
        $this->headers = $headers;

        return $this;
    }

    public function getHeaders(): array
    {
        return $this->headers;
    }

    public function get()
    {
        $query = !empty($this->query) ? $this->query->root() : $this->model::root();

        if ($this->config['lazy'] === true) {
            $query->withCount("directDescendants");
        } else {
            $query->with('descendants');
        }

        $this->setWhereConstraints($query);
        if ($this->withRelations->count()) {
            $query->with($this->withRelations->toArray());
        }
        if ($this->countRelations->count()) {
            $query->withCount($this->countRelations->toArray());
        }

        $results = $query->orderBy('sort_order')->get();
        $collection = $this->collection::collection($results);

        return $collection->additional([
            'config' => $this->config,
            'modelClass' => base64_encode($this->model),
            'headers' => $this->getHeaders()
        ]);
    }

    private function setWhereConstraints(Builder $query): void
    {
        $items = collect(['where' => $this->wheres, 'whereNot' => $this->whereNots, 'whereIn' => $this->whereIns, 'whereNotIn' => $this->whereNotIns]);

        $items->each(fn($collection, $method) => $collection->each(fn($constraint) => $query->{$method}(...$constraint)));
    }
}
