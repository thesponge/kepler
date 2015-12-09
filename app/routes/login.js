import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    //console.log(this.controller.get('session').get('isAuthenticated'));
    if (this.controller.get('session').get('isAuthenticated') === true) {
      this.transitionTo('match');
    } else {
      this.render();
    }
  }
});
