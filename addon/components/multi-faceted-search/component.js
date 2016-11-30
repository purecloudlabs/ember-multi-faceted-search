import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  facetsWrapperClass: "col-sm-4",
  dataWrapperClass: "col-sm-8",
  searchWrapperClass: "",
  facets: [],
  search: null,
  _search: "",

  noSearch: Ember.computed.none('search'),

  actions: {
    addSearch() {
      this.set('search', this.get('_search'));
      this.get('searchAction')();
    },
    removeSearch() {
      this.setProperties({ search: "", _search: ""});
      this.get('searchAction')();
    },
    removeAllFacets() {
      let facets = this.get('facets');
      facets.forEach( (facet) => {
        let terms = facet.get('terms');
        terms.forEach( (term) => Ember.set(term, 'selected', false) );
      });
      this.notifyPropertyChange('facets');
    },
    toggleFacet(facet, term) {
      let selected = Ember.get(term, 'selected');
      if (typeof selected === 'undefined' || !selected) {
        if (Ember.get(facet, 'link')) {
          let terms = Ember.get(facet, 'terms');
          terms.forEach((term) => Ember.set(term, 'selected', false));
        }
        Ember.set(term, 'selected', true);
        this.get('addFacet')();
      } else {
        Ember.set(term, 'selected', false);
        this.get('removeFacet')();
      }
    }
  }
});
