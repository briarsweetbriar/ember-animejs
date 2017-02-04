import Ember from 'ember';
import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | it works');

test('it-works', function(assert) {
  const done = assert.async();

  visit('/');

  andThen(function() {
    Ember.run.later(() => {
      assert.equal(Ember.$('.anime-tester').attr('style'), 'background-color: rgb(51, 51, 51);', 'it works!');

      done();
    }, 2000);
  });
});
