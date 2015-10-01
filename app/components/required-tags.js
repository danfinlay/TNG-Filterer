import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'section',
  classNames: ['required-tags', 'tags'],
  classNameBindings: ['key'],

  searchFilter: '',

  title: Ember.computed('key', function(){
    var key = this.get('key');
    return Ember.String.capitalize(key);
  }),

  firstHundredTags: Ember.computed('sortedTags.@each', function(){
    var tags = this.get('sortedTags');
    var result = []
    for (var i = 0; i < 100 && i < tags.length; i++) {
      result.push(tags.objectAt(i));
    }
    return result;
  }),
  tagSorters: ['tag.episodes.length:desc'],
  sortedTags: Ember.computed.sort('filteredTags', 'tagSorters'),
  filteredTags: Ember.computed('ctrls', 'searchFilter', function(){
    var filter = this.get('searchFilter').toLowerCase();
    var ctrls = this.get('ctrls');
    return ctrls.filter(function(ctrl){
      var tagTitle = ctrl.get('tag.lower');
      return tagTitle.indexOf(filter) !== -1;
    });
  }),

  actions: {
    removeFilters: function(){
      var ctrls = this.get('ctrls');
      var key = this.get('key');
      ctrls.forEach(function(ctrl){
        ctrl.set(key, false);
      });
    }
  }

});
