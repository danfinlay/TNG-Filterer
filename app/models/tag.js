import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title: DS.attr('string'),
  name: Ember.computed('title', function(){
    var title = this.get('title');
    var words = title.split(' ')
    .map(function(word){
      return Ember.String.capitalize(word);
    });
    return words.join(' ');
  }),

  episodes: DS.hasMany('episode')
});
