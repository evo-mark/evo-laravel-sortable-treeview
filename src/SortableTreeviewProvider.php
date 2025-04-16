<?php

declare(strict_types=1);

namespace EvoMark\EvoLaravelSortableTreeview;

use Illuminate\Support\ServiceProvider;

class SortableTreeviewProvider extends ServiceProvider
{
    public function boot()
    {
        $this->mergeConfigFrom(__DIR__ . '/Config/sortable-treeview.php', 'sortable-treeview');

        if ($this->app->runningInConsole()) {
            $this->publishes([
                __DIR__ . '/Config/sortable-treeview.php' => config_path('sortable-treeview.php'),
            ], 'config');
        }

        $this->loadRoutesFrom(__DIR__ . '/Routes/sortable-treeview.php');
    }
}
