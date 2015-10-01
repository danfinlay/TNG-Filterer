import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title: DS.attr('string'),
  url: DS.attr('string'),

  // Computed Properties:
  link: Ember.computed('url', function(){
    var url = this.get('url');
    return 'http://en.memory-alpha.wikia.com' + url;
  }),
  name: Ember.computed('title', function(){
    var title = this.get('title');
    var words = title.split(' ')
    .map(function(word){
      return Ember.String.capitalize(word);
    });
    return words.join(' ');
  }),
  lower: Ember.computed('title', function(){
    var title = this.get('title');
    return title.toLowerCase();
  }),

  episodes: DS.hasMany('episode')
});
