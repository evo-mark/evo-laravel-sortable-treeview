<?php

use EvoMark\EvoLaravelSortableTreeview\Controllers\SortableTreeviewController;
use Illuminate\Support\Facades\Route;


Route::middleware(config('sortable-treeview.middleware'))->prefix(config('sortable-treeview.route-prefix'))->as('sortable-treeview.')->group(function () {
    Route::get('lazy', [SortableTreeviewController::class, 'loadTreeviewChildren'])->name('lazy');
    Route::put('sort', [SortableTreeviewController::class, 'updateTreeviewSortOrder'])->name('sort');
});
