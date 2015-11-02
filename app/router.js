import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('register');
  this.route('recover');
  this.route('match', function() {
    this.route('dashboard');
  });
});

export default Router;
