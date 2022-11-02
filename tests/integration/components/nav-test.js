import { module, test } from 'qunit';
import { setupRenderingTest } from 'kind/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | nav', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Nav />`);

    assert.dom(this.element).hasText('Home 🏠 Boards 📁');
  });
});
