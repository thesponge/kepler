import Ember from 'ember';

export default Ember.Controller.extend({
  user: Ember.computed(function() {
    return this.store.createRecord('user');
  }),
  actions: {
    register: function() {
      console.log('Accessing the register action');
      console.log('User: ' + this.get('user.email'));
      console.log('Password: ' + this.get('user.password'));
      console.log('Confirmation: ' + this.get('user.password_confirmation'));
      var self = this;
      this.get('user').save().then(function() {
        self.notifications.addNotification({
          message: 'Done! Please check your inbox.',
          type: 'success'
        });
        self.transitionToRoute('login');
      });
    },
  }
});
