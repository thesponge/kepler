import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ['confirmation_token'],
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
      this.get('user').save().then(() => {
        this.notifications.addNotification({
          message: 'Done! Please check your inbox.',
          type: 'success'
        });
        this.transitionToRoute('login');
      }, () => {
          self.get('user').get('errors').map((v) => {
              self.notifications.addNotification({
                  message: v.attribute + ' ' + v.message,
                  type: 'error',
                  autoClear: true
              });
          });
      });
    },
  }
});
