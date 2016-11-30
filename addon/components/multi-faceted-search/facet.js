import Ember from 'ember';

let Facet = Ember.Object.extend({
  category: "",
  type: "", // "checkbox" or "link" or "search"
  terms: [], // each term: { value: "", count: num.optional, selected: boolean }
  selected: Ember.computed.filterBy('terms', 'selected', true),

  checkbox: Ember.computed.equal('type', 'checkbox'),
  link: Ember.computed.equal('type', 'link'),
  search: Ember.computed.equal('type', 'search'),

  multipleFacets: Ember.computed.gt('selected.length', 1),
  atleastOneFacet: Ember.computed.gt('selected.length', 0),
  selectedValues: Ember.computed('multipleFacets', 'selected', function() {
    let terms = this.get('selected');
    if (terms.length > 1) {
      return terms.map(t => t.value).join(", ");
    } else if (terms.length === 1) {
      return terms[0].value;
    } else {
      return "";
    }
  })
});

export default Facet;
