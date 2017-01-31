import Ember from 'ember';

let Facet = Ember.Object.extend({
  category: "",
  type: "", // "checkbox" or "link"
  terms: [], // each term: { value: "", count: num.optional, selected: boolean }

  checkbox: Ember.computed.equal('type', 'checkbox'),
  link: Ember.computed.equal('type', 'link'),

  selected: Ember.computed.filterBy('terms', 'selected', true),
  multipleSelected: Ember.computed.gt('selected.length', 1),
  atleastOneSelected: Ember.computed.gt('selected.length', 0),
  selectedValues: Ember.computed('multipleSelected', 'selected', function() {
    let terms = this.get('selected');
    if (terms.length > 0) {
      return terms.map(t => t.value).join(", ");
    } else {
      return "";
    }
  })
});

export default Facet;
