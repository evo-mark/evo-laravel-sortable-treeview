# evoMark Laravel Sortable Treeview

## Requirements (v2)

- Vue 3.5+
- Vuetify 4.0+
- Inertia 3.0+

## Installation

Add the following repository to your `composer.json` file:

```json
"repositories": [
    {
        "type": "vcs",
        "url": "https://github.com/evo-mark/evo-laravel-sortable-treeview"
    }
],
```

and then this to your `require` section:

```json
"require": {
    "evo-mark/evo-laravel-sortable-treeview": "^2.0.0"
}
```

then run `composer update`.

### JavaScript

Once you've installed the composer package, you can install the PNPM package symlink:

```sh
pnpm add vendor/evo-mark/evo-laravel-sortable-treeview
```

## Usage

### Configuration

To publish your config file for **SortableTreeview**, run:

```sh
php artisan v:p --provider="EvoMark\EvoLaravelSortableTreeview\SortableTreeviewProvider"
```

### Model

To setup a model as sortable, add the following to the model:

```php
use EvoMark\EvoLaravelSortableTreeview\Traits\SortableTreeModel;

class Model
{
    use SortableTreeModel;
}
```

### Controller

Pass the treeview items to the frontend like so:

```php
return Inertia::render('setup/tyre-group/index', [
    'tyreGroups' => fn() => SortableTreeview::for(TyreGroup::class)->setConfig([])
        ->setHeaders([
            [
                'value' => 'actions',
                'title' => 'Actions'
            ]
        ])->get()
]);
```

You can call `setConfig` with the following options:

| Prop                  | Type        | Default              | Description                                                                   |
| --------------------- | ----------- | -------------------- | ----------------------------------------------------------------------------- |
| lazy                  | bool        | false                | Enables lazy loading of child items instead of loading the full tree upfront. |
| maxDepth              | int \| null | null                 | Maximum depth of the tree. `null` means no limit.                             |
| itemChildren          | string      | "children"           | Key used to access child items in each node.                                  |
| itemChildrenCount     | string      | "children_count"     | Key used to access the number of children for a node.                         |
| itemTitle             | string      | "title"              | Key used for the display label/title of each item.                            |
| itemValue             | string      | "id"                 | Key used as the unique identifier for each item.                              |
| loadChildrenRoute     | string      | "{$routePrefix}lazy" | Route used to fetch children dynamically when lazy loading is enabled.        |
| loadChildrenMethod    | string      | "get"                | HTTP method used for loading children.                                        |
| updateSortOrderRoute  | string      | "{$routePrefix}sort" | Route used to persist updated sort order.                                     |
| updateSortOrderMethod | string      | "put"                | HTTP method used for updating sort order.                                     |
| updateItemRoute       | string      | ""                   | Route used to update an individual item.                                      |
| updateItemMethod      | string      | "PATCH"              | HTTP method used to update an individual item.                                |

### Frontend

Finally, your frontend should look like this:

```html
<template>
    <EvoSortableTreeview model="tyreGroups">
        <template #item.title="{ item }"> {{ item.name }} </template>
        <template #item.columns="{ item }">
            <VBtnGroup>
                <VBtn color="error" :icon="mdiDelete" variant="text"></VBtn>
            </VBtnGroup>
        </template>
    </EvoSortableTreeview>
</template>

<script setup>
    import { EvoSortableTreeview } from 'evo-laravel-sortable-treeview';
</script>
```

### Slots

The following slots are available inside the SortableTreeview component:

| Slot Name          | Props             | Description                                                                 |
| ------------------ | ----------------- | --------------------------------------------------------------------------- |
| item.prepend-title | `{ item }`        | Rendered before the main item title. Useful for icons, badges, or prefixes. |
| item.title         | `{ item, title }` | Main title content for the item. Defaults to displaying `item[itemTitle]`.  |
| item.append-title  | `{ item }`        | Rendered after the main item title. Useful for actions, tags, or metadata.  |
| item.columns       | `{ item }`        | Renders additional column content aligned to the right of the item.         |
