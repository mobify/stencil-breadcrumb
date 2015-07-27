# Stencil Breadcrumb

Breadcrumb component that truncates, scrolls and supports various styling options

[Link to demo](#)

## Requirements

- Sass
- AMD loader
- Dust templating

## Installation

Installation instructions. Be as brief as possible without leaving out necessary requirements.

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
        id: 'something',
        class: 'something',
        items: [
            {'href':'/#', 'label':'Home'},
            {'href':'/#', 'label':'Homeware'}
        ]
    }
}
```

```html
{#myBreadcrumbsData}
    {@c-breadcrumbs id=id class=class items=items /}
{/myBreadcrumbsData}
```

## API

### Dust helper parameters

Param name | Type          | Description
:--------- | :------------ | :----------
id         | String        | Sets the `id` attribute of the underlying select element
class      | String        | Adds values to the `class` attribute of the root element
element    | DOM, String   | Accepts the underlying select element as a DOM node or HTML string
items      | Array of Obj  | Create list of items in array of object

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
