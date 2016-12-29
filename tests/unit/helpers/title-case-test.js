
import { titleCase } from 'dummy/helpers/title-case';
import { module, test } from 'qunit';

module('Unit | Helper | title case');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = titleCase(["hello dolly"]);
  assert.equal(result, "Hello Dolly");
});

