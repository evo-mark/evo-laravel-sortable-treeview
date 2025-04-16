<?php

declare(strict_types=1);

namespace EvoMark\EvoLaravelSortableTreeview;

use EvoMark\EvoLaravelSortableTreeview\SortableTreeviewResource;
use EvoMark\EvoLaravelSortableTreeview\Traits\SortableTreeController;
use EvoMark\EvoLaravelSortableTreeview\Traits\SortableTreeModel;
use Exception;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;
use Illuminate\Support\Traits\Macroable;
use TypeError;

class SortableTreeview
{
    use Macroable;

    protected array $config;
    protected array $headers;

    /**
     * @var string When returning treeview results, use this as a collection resource
     */
    protected string $collection = SortableTreeviewResource::class;

    protected function __construct(
        protected string $model,
    ) {}

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

    public function get()
    {
        $query = $this->model::root();
        if ($this->config['lazy'] === true) {
            $query->withCount("directDescendants");
        } else {
            $query->with('descendants');
        }
        $results = $query->get();

        $collection = $this->collection::collection($results);

        return $collection->additional([
            'config' => $this->config,
            'modelClass' => base64_encode($this->model)
        ]);
    }
}
