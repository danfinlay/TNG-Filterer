import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  isNewSerializerAPI: true,
  //
  // extractAttributes:function(){
  //   var result = Object.create(arguments[1])
  //   delete result.tags
  //   return result
  // },
  // extractRelationship:function(){
  //     debugger;
  // },
});
