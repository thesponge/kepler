import Ember from 'ember';

export default Ember.Controller.extend({
  assignment: function() {
    return this.store.createRecord('assignment');
  }.property(),
  languages_select: Ember.computed(function() {
    return this.store.findAll('language');
  }),
  rewards_select: Ember.computed(function() {
    return this.store.findAll('assignment-reward');
  }),
  skills_select: Ember.computed(function() {
    var output = [];
    this.store.findAll('skill').then(function(records){
      records.forEach(function(item){

        var filter = output.filter(function(obj) {
              return obj.text === item.get('category');
            });

        if (filter.length === 0) {
          output.push({
            text: item.get('category'),
            children:[
              {
                id: item.get('id'),
                text: item.get('name')
              }
            ]
          });
        } else {
          var index = output.indexOf(filter[0]);
          output[index].children.push(
            {
              id: item.get('id'),
              text: item.get('name')
            }
          );
        }
      });
    });

    return output;
  }),
  actions: {
      submitAssignment: function() {
          var self = this;
          this.get('assignment').save().then(function() {
              self.notifications.addNotification({
                  message: 'Assignment #' + self.get('assignment').id + ' created!',
                  type: 'success',
                  autoClear: true
              });
              self.transitionToRoute('assignments.show', self.get('assignment'));
          },
            function(response) {
                console.error('There was a problem', response);
            }
        );
      },
    cancel: function(){
        this.get('assignment').deleteRecord();
        this.transitionToRoute('match');
    }
  },
});
