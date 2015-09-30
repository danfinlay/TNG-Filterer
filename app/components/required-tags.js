import Ember from 'ember';

export default Ember.Component.extend({
  searchFilter: '',

  tagSorters: ['tag.episodes.length:desc'],
  sortedTags: Ember.computed.sort('filteredTags', 'tagSorters'),
  filteredTags: Ember.computed('sortedTags', 'searchFilter', function(){
    var filter = this.get('searchFilter').toLowerCase();
    var ctrls = this.get('ctrls');
    return ctrls.filter(function(ctrl){
      var tagTitle = ctrl.get('tag.lower');
      return tagTitle.indexOf(filter) !== -1
    });
  }),
});
