import Ember from 'ember';

export default Ember.Controller.extend({

  tags: Ember.computed(function(){
    return this.store.all('tag');
  }),
  tagControllers: Ember.computed('tags', function(){
    var tags = this.get('tags');
    return tags.map(function(tag){
      return Ember.Object.create({
        tag: tag,
        required: false,
        rejected: false,
      })
    })
  }),

});
