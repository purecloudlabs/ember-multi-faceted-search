import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  options: {
    search: {
      wrapperClass: "",
      buttonIconClass: "glyphicon glyphicon-search",
      placeholderText: "Enter search term"
    },
    applied: {
      wrapperClass: "col-sm-12 well",
      selectedClass: "btn btn-default",
      headingText: "Your Selections:"
    },
    facets: {
      wrapperClass: "col-sm-4",
      groupWrapperClass: "panel panel-default",
      groupLabelWrapperClass: "panel-heading",
      groupLabelClass: "panel-title",
      groupIconClass: "glyphicon",
      groupIconOpenClass: "glyphicon-triangle-right",
      groupIconClosedClass: "glyphicon-triangle-bottom",
      groupListWrapperClass: "panel-collapse",
      groupListClass: "panel-body"
    },
    dataWrapperClass: "col-sm-8"
  },
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
    toggleFacet(facet, term) {
      if (Array.isArray(term)) {
        // remove all terms from facet
        term.forEach((t) => {
          Ember.set(t, 'selected', false);
          this.get('removeFacet')(facet.get('category'), t);
        });
      } else {
        let selected = Ember.get(term, 'selected');
        if (typeof selected === 'undefined' || !selected) {
          if (Ember.get(facet, 'link')) {
            let terms = Ember.get(facet, 'terms');
            terms.forEach((t) => Ember.set(t, 'selected', false));
          }
          Ember.set(term, 'selected', true);
          this.get('addFacet')(facet.get('category'), term);
        } else {
          Ember.set(term, 'selected', false);
          this.get('removeFacet')(facet.get('category'), term);
        }
      }
    }
  }
});
