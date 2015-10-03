Template.home.created = function() {
  console.log('Created the home template');
};
Template.home.rendered = function(){
  console.log('Rendered the home template');
};
Template.home.destroyed = function(){
  console.log('Destroyed the home template');
};

Tasks = new Mongo.Collection("posts");

Template.home.helpers({
  dataContextHelper: function(){
   return {
     someText: 'helper function to populate someText template variable .js',
     someNested: {text: 'someNested.text'}
    };
  },
  postsList: function(){
    //Try to pull from data base
    if (Meteor.isClient) {
      return Tasks.find();
    }
    //If were offline show dummy data
    else{
      return[{
        title:'Second Entry',
        description:'work work',
        author:'juan Huertas',
        timeCreated:moment().subtract(3,'days').unix()
      },{
        title:'First  Entry',
        description:'work',
        author:'juan Huertas',
        timeCreated:moment().subtract(7,'days').unix()
        
      }]; 
    }
    
  }
});
Template.body.events({
    "submit .new-task": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value from form element
      var text = event.target.text.value;
      console.log(text);
      console.log(Tasks.find().fetch());
      // Insert a task into the collection
      Tasks.insert({ title:'Entry', description:text, author:'juan Huertas', timeCreated:new Date() });
 
      // Clear form
      event.target.text.value = "";
    },
    "click .postListItem h2 a": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value from form element
      // Insert a task into the collection
      var result = Meteor.call('bar');
 
      // Clear form
      event.target.text.value = "";
    }

  });