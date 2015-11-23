import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service('session'),
    actions: {
      authenticate() {
        let { identification, password } = this.getProperties('identification', 'password');
        this.get('session').authenticate('authenticator:devise', identification, password).catch((reason) => {
          //this.set('errorMessage', reason.error);
          this.notifications.addNotification({
              message: reason.errors[0],
              type: 'error',
              autoClear: true
          });
        });
        this.get('session').on('authenticationSucceeded', function() {

        });
      },
    },
});
