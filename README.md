# Stencil Breadcrumb

Breadcrumb component that truncates, scrolls and supports various styling options

**View demo (coming soon)**

## Requirements

- AdaptiveJS 2.1 or greater

## Installation

```shell
cd my/adaptive/project
grunt component:install:breadcrumbs
```

## Usage

During installation, AdaptiveJS will register a Dust helper for the component which can be used in any template.

### With a pre-existing breadcrumbs element

Output list elements in breadcrumbs component

```html
{@c-breadcrumbs element=breadcrumbsListMarkup /}
```

### With options from data

```javascript
var context = {
    myBreadcrumbsData: {
        class: 'something',
        items: [
            {'href':'/#', 'label':'Home'},
            {'href':'/#', 'label':'Homeware', 'isActive': true}
        ]
    }
}
```

```html
{#myBreadcrumbsData}
    {@c-breadcrumbs class=class items=items /}
{/myBreadcrumbsData}
```

## API

### Dust helper parameters

Param name | Type          | Description
:--------- | :------------ | :----------
class      | String        | Adds values to the `class` attribute of the root element
element    | DOM, String   | Accepts the underlying select element as a DOM node or HTML string
items      | Array of Obj  | Create list of items in array of object
isActive   | Boolean       | Adds active class to active item

### Sass configurable variables

Variable name                     | Type      | Description
:-------------------------------- | :-------- | :----------
$breadcrumbs__divider-content     | Boolean   | Give divider content
$breadcrumbs__show-more-content   | Boolean   | Give 'show more' content

## Development

* run `npm install`
* run `bower install`
* run `grunt serve`
* navigate to [localhost:3000/tests/visual](http://localhost:3000/tests/visual)
