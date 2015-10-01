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

  rejectedTagControllers: Ember.computed.filterBy('tagControllers', 'rejected'),
  rejectedTags: Ember.computed.mapBy('rejectedTagControllers', 'tag'),
  rejectedCount: Ember.computed.alias('rejectedTags.length'),

  eligible: Ember.computed('rejectedCount', 'requiredCount', 'model.@each',
                                   function(){
    var eps = this.get('model');
    var requiredTags = this.get('requiredTags');
    var rejectedTags = this.get('rejectedTags');

    return eps.filter(function(ep){
      var epTags = ep.get('tags');
      var good = true;

      requiredTags.forEach(function(requiredTag){
        if (!epTags.contains(requiredTag)){
          good = false;
        }
      });

      rejectedTags.forEach(function(rejectedTag){
        if (epTags.contains(rejectedTag)){
          good = false;
        }
      });

      return good;
    })
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
