import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    setupController: function(controller) {
        controller.assignments = this.store.findAll('assignment');
    },
  // activate: function() {
  //   this.transitionTo('match.dashboard');
  // }
});