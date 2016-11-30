import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('applied-facets', 'Integration | Component | applied facets', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{applied-facets}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#applied-facets}}
      template block text
    {{/applied-facets}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
