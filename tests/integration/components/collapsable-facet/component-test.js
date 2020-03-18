import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('collapsable-facet', 'Integration | Component | collapsable facet', {
  integration: true
});

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('facet', {
    category: 'test/category'
  });

  this.render(hbs`{{collapsable-facet facet=facet}}`);

  assert.equal(this.$().text().trim(), 'Test/Category');

});
