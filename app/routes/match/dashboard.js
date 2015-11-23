import Ember from 'ember';
// import DS from 'ember-data';

export default Ember.Route.extend({
  setupController: function(controller) {
    controller.assignments = this.store.findAll('assignment');
  },
});
