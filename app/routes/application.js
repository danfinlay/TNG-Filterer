import Ember from 'ember';
import fixtures from '../fixtures/episodes'

export default Ember.Route.extend({
  model:function(){

    this.store.pushPayload(fixtures)
    return this.store.all('episode')
  }
});
