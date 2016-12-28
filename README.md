# Ember-cli-multi-faceted-search

This addon provides a view for managing a [faceted search](https://en.wikipedia.org/wiki/Faceted_search) alongside data.  You provide an array of filters with terms, and the addon will allow a user to add and remove these terms while notifying your app - which allows you to handle the data end of things.

## Installation

From your project / app, run
```
ember install ember-cli-multi-faceted-search
```

This addon creates a new component that you can use to wrap your data display: `{{multi-faceted-search}}`

Although styles can be customized, using [Bootstrap 3](http://getbootstrap.com/getting-started/) in your project is recommended for the [collapsing behavior](http://getbootstrap.com/javascript/#collapse).

## Using this addon

### The Component
```
{{#multi-faceted-search facets=yourFacetsArray addFacet=(action 'yourAddFacetAction') removeFacet=(action 'yourRemoveFacetAction')}}
<table>
...
</table>
{{/multi-faceted-search}}
```

### The Facet Array

In your app, where you handle the data, add :

```
import Facet from 'ember-cli-multi-faceted-search/components/multi-faceted-search/facet';
```

This is a custom `Ember.Object` that looks like:

```
{
  category: "LabelForFacet",
  type: "checkbox", // or "link"
  terms: [] // each term should be an object with at least : { value: "stringToDisplay", selected: boolean },
  ...
}
```

Massage your data to be an array of Facet objects.  Feed this array into the above component as `facets=yourFacetsArray`.

### Add and Remove Actions

Define actions that will modify your data based on actions taken by the user ( `addFacet` / `removeFacet` below ).

```
{{#multi-faceted-search facets=facets addFacet=(action "addFacet") removeFacet=(action "removeFacet")}}
```

The Facet object from above includes a `selected` property that returns the currently selected terms.  If your facets change based on selected terms, you need to handle refreshing and setting already selected terms, or editing the existing object.  An example of the former : 

```
facets: [],
yourURL: "http...",

actions: {
  yourAddFacetAction() {
    let oldFacets = this.get('facets'),
        query = "?",
        newFacets = [];

    // building URL query params from selected facets
    oldFacets.forEach( (facet) => {
      let selectedTerms = facet.get('selectedValues');
      if (selectedTerms.length)
        selectedTerms = selectedTerms.replace(/\s+/g, ''); // "term1, term2" => "term1,term2"
        query = query + facet.get('category') + "=" + selectedTerms + "&"
    });

    // JSON example - let's say our service returns : { facets: [ { facet1: ['term1', 'term2'] }, { facet2: ... } ] }
    // so we build the new array of Facets from this
    $.getJSON(this.get("yourURL") + query).then( (rtn) => {
      Object.keys(rtn.facets).forEach( (category) => {
        newFacets.push(Facet.create({ category: category, type: "checkbox", terms: rtn.facets[category] }));
      });
      this.set("facets", newFacets);
    });
  }
}
```


### Search

Adding search is simple!

```
{{#multi-faceted-search facets=facets search=query searchAction=(action 'searching')}}
...
{{/multi-faceted-search}}
```

Defining a two-way bound `search` parameter and adding a `searchAction` will generate a search box and notify you when the user initiates a search.  Currently, search is initiated by submitting the search input (ie hitting ENTER or clicking the attached button).
