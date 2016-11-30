import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  applied: [],

  actions: {
    removeFacet(facet) {
      this.get('toggleFacet')(facet.terms[0]);
    },
    removeFacets(facet) {
      let selected = Ember.get(facet, 'selected');
      selected.forEach((term) => this.get('toggleFacet')(term))
    }
  }
});
