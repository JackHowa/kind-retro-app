import { module, test } from 'qunit';
import { setupTest } from 'kind/tests/helpers';

module('Unit | Route | boards', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:boards');
    assert.ok(route);
  });
});
