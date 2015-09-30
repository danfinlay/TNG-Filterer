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

  requiredTagControllers: Ember.computed.filterBy('tagControllers', 'required'),
  requiredTags: Ember.computed.mapBy('requiredTagControllers', 'tag'),
  requiredCount: Ember.computed.alias('requiredTags.length'),
  hasRequirements: Ember.computed.bool('requiredCount'),

  eligible: Ember.computed('tagControllers.@each.required', function(){
    var eps = this.get('model');

    var requiredTags = this.get('requiredTags');
    return eps.filter(function(ep){
      var unmatched = false;
      var epTags = ep.get('tags');
      requiredTags.forEach(function(tag){
        if (!epTags.contains(tag)){
          unmatched = true;
          return true;
        }
      });
      return !unmatched;
    });
  }),

  actions: {
    suggest: function(){
      var eps = this.get('eligible');
      var number = Math.floor(Math.random() * eps.get('length'));
      var ep = eps.objectAt(number);
      this.set('suggestion', ep);
    }
  }

});
