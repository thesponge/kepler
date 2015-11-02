import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
      this.get('session').on('invalidationSucceeded', function() {
        window.location.reload();
      });
    }
  }
});
