import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  applied: [],
  search: null,

  actions: {
    removeSearch() {
      this.get('removeSearch')();
    },
    removeFacets(facet) {
      let selected = Ember.get(facet, 'selected');
      selected.forEach((term) => this.get('toggleFacet')(facet, term));
    }
  }
});
