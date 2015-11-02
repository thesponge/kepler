import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import Configuration from 'ember-simple-auth/configuration';

export default Ember.Route.extend(ApplicationRouteMixin, {
  setupController: function(controller) {
  }
});
