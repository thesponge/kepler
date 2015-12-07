import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('register');
  this.route('recover');
  this.route('match', function() {
    this.route('assignments', {resetNamespace: true}, function() {
        this.route('show', {path: ':assignment_id'});
    });
  });


  this.route('account', function() {
      this.route('show', {path: ':id'});
  });
});

export default Router;
