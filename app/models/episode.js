import DS from 'ember-data';

export default DS.Model.extend({
  num: DS.attr('string'),
  title: DS.attr('string'),
  url: DS.attr('string'),
  airdate: DS.attr('date'),
  prodno: DS.attr('string'),
  stardate: DS.attr('string'),

  tags: DS.hasMany('tag'),
});
