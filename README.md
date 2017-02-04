[![npm version](https://badge.fury.io/js/ember-animejs.svg)](https://badge.fury.io/js/ember-animejs)
[![Build Status](https://travis-ci.org/null-null-null/ember-animejs.svg?branch=master)](https://travis-ci.org/null-null-null/ember-animejs)


# ember-animejs

An Ember.js wrapper for the animation library [anime.js](https://github.com/juliangarnier/anime).

## installation

`ember install ember-animejs`

## usage

```js
import anime from 'ember-animejs';

export default Ember.Component.extend({
  didInsertElement() {
    this._super(...arguments);

    anime({
      targets: this.element,
      translateX: '100px'
    });
  }
});
```

For more information on the `animejs` api, check out [their documentation](https://github.com/juliangarnier/anime).
