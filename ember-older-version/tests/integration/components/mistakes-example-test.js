import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mistakes-example', 'Integration | Component | mistakes example', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mistakes-example}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#mistakes-example}}
      template block text
    {{/mistakes-example}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
