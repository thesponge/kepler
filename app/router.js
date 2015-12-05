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
    this.route('dashboard');
  });

  this.route('assignments', function() {
    this.route('show');
  });

  this.route('account', function() {
    this.route('show');
  });
});

export default Router;
