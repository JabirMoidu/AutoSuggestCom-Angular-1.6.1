# AutoSuggest Component Angular 1.6.1


## Implementation

This component has been built in Angular 1.6.1 and Angular's "Component" method has been used to write this component.

Auto suggestions would be populated based on the user input in the search field. 

It returns the data by searching for all the properties in the given static JSON. This JSON can be loaded from other URL as well using AJAX call.

There is a service called "contacts" has been used to fetch the data based on the search keyword, which is passed from the main controller.

on-key-press and result-arr are the callback function and data respectively, which are two bindings between main controller and component.

This component has been created as an element. It is as given below.
```HTML
<auto-suggest-com on-key-press="mc.doSearch(keyWord)" result-arr="mc.resultArr"></auto-suggest-com>

```

## Style Applied

"fontawesome" icons have been used to show different icons in the page and SCSS file has been created for writing the style.

## Plunker Link


[AutoSuggest Component - Plunker Link](https://plnkr.co/edit/5ffaNVgxwc6XCIc4n7th?p=preview) 



