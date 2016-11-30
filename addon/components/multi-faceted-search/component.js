import Ember from 'ember';
import layout from './template';
import Facet from './facet';

export default Ember.Component.extend({
  layout,
  facetsWrapperClass: "col-sm-4",
  dataWrapperClass: "col-sm-8",
  facets: [],

  actions: {
    removeAllFacets() {
      let facets = this.get('facets');
      facets.forEach( (facet) => {
        let terms = facet.get('terms');
        terms.forEach( (term) => Ember.set(term, 'selected', false) );
      });
      this.notifyPropertyChange('facets');
    },
    toggleFacet(term) {
      let selected = term.selected;
      if (typeof selected === 'undefined' || !selected) {
        Ember.set(term, 'selected', true);
        this.get('addFacet')();
      } else {
        Ember.set(term, 'selected', false);
        this.get('removeFacet')();
      }
    }
  }
});
