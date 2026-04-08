<?php

declare(strict_types=1);

namespace EvoMark\EvoLaravelSortableTreeview;

use Exception;
use TypeError;
use ArrayAccess;
use BadMethodCallException;
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

    protected string $sortOrderColumn = "sort_order";

    /**
     * Contains all eloquent builder queries that will be proxied
     */
    protected Collection $eloquent;

    protected Collection $withRelations;
    protected Collection $countRelations;

    /**
     * @var string When returning treeview results, use this as a collection resource
     */
    protected string $collection = SortableTreeviewResource::class;

    protected function __construct(
        protected string $model,
    ) {
        $this->eloquent = collect([]);
        $this->withRelations = collect([]);
        $this->countRelations = collect([]);
    }

    /**
     * Factory function for the class
     */
    public static function for(string $model): static
    {
        static::validateModel($model);
        $instance = new static($model);

        return $instance;
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

        if (in_array(SortableTreeModel::class, class_uses($model)) === false) {
            throw new Exception($model . " is not using the SortableTreeModel trait");
        }
    }

    public function setSortOrderColumn(string $sortOrderColumn)
    {
        $this->sortOrderColumn = $sortOrderColumn;


        return $this;
    }

    public function setQuery(Builder $query): static
    {
        $this->query = $query;

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
        $config['disableUpdate'] ??= false;

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
        $instance = new $this->model;
        $table = $instance->getTable();

        if (!Schema::hasColumn($table, $this->sortOrderColumn)) {
            throw new Exception($table . " is missing the column " . $this->sortOrderColumn);
        }


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

        $results = $query->orderBy($this->sortOrderColumn)->get();
        $collection = $this->collection::collection($results);

        return $collection->additional([
            'config' => $this->config,
            'modelClass' => base64_encode($this->model),
            'headers' => $this->getHeaders()
        ]);
    }

    private function setWhereConstraints(Builder $query): Builder
    {
        $this->eloquent->each(function (Collection $constraints, string $method) use ($query) {
            $constraints->each(function (array $arguments) use ($query, $method) {
                $query->{$method}(...$arguments);
            });
        });

        return $query;
    }

    /***********************************
     * MAGIC METHODS
     ***********************************/

    /**
     * @throws BadMethodCallException
     */
    public function __call(string $name, array $arguments): static
    {
        $validMethods = [
            "whereRaw",
            "orWhereRaw",
            "havingRaw",
            "orHavingRaw",
            "where",
            "orWhere",
            "whereNot",
            "orWhereNot",
            "whereAny",
            "orWhereAny",
            "whereAll",
            "orWhereAll",
            "whereNone",
            "orWhereNone",
            "whereIn",
            "whereNotIn",
            "whereNotInStrict",
            "orWhereIn",
            "orWhereNotIn",
            "whereIntegerInRaw",
            "orWhereIntegerInRaw",
            "whereIntegerNotInRaw",
            "orWhereIntegerNotInRaw",
            "whereJsonContains",
            "whereJsonDoesntContain",
            "whereJsonContainsKey",
            "whereJsonDoesntContainKey",
            "whereJsonLength",
            "whereLike",
            "orWhereLike",
            "whereNotLike",
            "orWhereNotLike",
            "whereBetween",
            "orWhereBetween",
            "whereNotBetween",
            "orWhereNotBetween",
            "whereBetweenColumns",
            "whereNotBetweenColumns",
            "orWhereBetweenColumns",
            "orWhereNotBetweenColumns",
            "whereValueBetween",
            "whereValueNotBetween",
            "orWhereValueBetween",
            "orWhereValueNotBetween",
            "whereNull",
            "whereNotNull",
            "orWhereNull",
            "orWhereNotNull",
            "whereDate",
            "orWhereDate",
            "whereMonth",
            "orWhereMonth",
            "whereDay",
            "orWhereDay",
            "whereYear",
            "orWhereYear",
            "whereTime",
            "orWhereTime",
            "wherePast",
            "whereFuture",
            "whereToday",
            "whereBeforeToday",
            "whereAfterToday",
            "whereNowOrPast",
            "whereNowOrFuture",
            "whereTodayOrBefore",
            "whereTodayOrAfter",
            "whereColumn",
            "orWhereColumn",
            "whereExists",
            "orWhereExists",
            "whereNotExists",
            "orWhereNotExists",
            "whereFullText",
            "orWhereFullText",
            "whereBelongsTo",
            "wherePivot",
            "wherePivotIn",
            "wherePivotNotIn",
            "wherePivotBetween",
            "wherePivotNotBetween",
            "wherePivotNull",
            "wherePivotNotNull",
            "whereHas",
            "orWhereHas",
            "whereAttachedTo",
            "whereRelation",
            "orWhereRelation",
            "whereMorphRelation",
            "orWhereMorphRelation",
            "doesntHave",
            "orDoesntHave",
            "whereDoesntHave",
            "orWhereDoesntHave",
            "whereHasMorph",
            "whereDoesntHaveMorph",
            "whereMorphedTo",
            "whereNotMorphedTo",
            "when",
            "whereRowValues",
            "orWhereRowValues",
            "whereNested",
            "whereJsonOverlaps",
            "orWhereJsonOverlaps",
            "whereJsonDoesntOverlap",
            "orWhereJsonDoesntOverlap",
        ];

        if (in_array($name, $validMethods) === false) {
            throw new BadMethodCallException(sprintf("Method %s::%s does not exist", static::class, $name));
        }

        if ($this->eloquent->has($name) === false) {
            $this->eloquent->put($name, collect());
        }

        $this->eloquent[$name]->push($arguments);

        return $this;
    }
}
