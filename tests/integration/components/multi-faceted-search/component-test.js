import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('multi-faceted-search', 'Integration | Component | multi faceted search', {
  integration: true
});

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{multi-faceted-search}}`);

  assert.equal(this.$().text().trim(), 'Your Selections:');

  // Template block usage:
  this.render(hbs`
    {{#multi-faceted-search}}
      template block text
    {{/multi-faceted-search}}
  `);

  assert.ok(this.$().text().trim().includes('template block text'));
});
