import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  collapsed: false,
  facet: {},

  actions: {
    toggleCollapse() {
      this.toggleProperty('collapsed');
    },
    toggleFacet(term) {
      this.get('toggleFacet')(term);
      this.notifyPropertyChange('facet');
    }
  }
});
