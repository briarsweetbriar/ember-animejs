import Ember from 'ember';
import anime from 'ember-animejs';

export default Ember.Component.extend({
  classNames: ['anime-tester'],

  didRender(...args) {
    this._super(...args);

    anime({
      targets: this.element,
      backgroundColor: '#333'
    });
  }
});
