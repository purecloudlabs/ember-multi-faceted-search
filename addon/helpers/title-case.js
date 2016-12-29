import Ember from 'ember';

export function titleCase([inputStr]/*, hash*/) {
  return inputStr.replace(/\b\w+/g,
    word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
}

export default Ember.Helper.helper(titleCase);
