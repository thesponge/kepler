import Ember from 'ember';
import DS from 'ember-data';

var Account = DS.Model.extend({
  session: Ember.inject.service('session'),
  display_name    : DS.attr('string', {
    defaultValue: function() { return 'Unknown identity'; }
  }),
  join_date       : DS.attr(),
  bio             : DS.attr('string'),
  url             : DS.attr('string'),
  avatar          : DS.attr('string'),
  locations       : DS.hasMany('location', { async : true, embedded : 'always' }),
  languages       : DS.hasMany('language', { async : true, embedded : 'always' }),
  skills          : DS.hasMany('skill', { async : true, embedded : 'always' }),
  intentions      : DS.hasMany('intention', { async : true, embedded : 'always' }),
  affiliations    : DS.hasMany('affiliation', { async : true, embedded : 'always' }),
  newIntention    : DS.attr(),
  location_ids    : DS.attr(),
  language_ids    : DS.attr(),
  skill_ids       : DS.attr(),
  intention_ids   : DS.attr(),
  affiliation_ids : DS.attr(),
  user            : DS.belongsTo('user'),
  is_owner: Ember.computed(function(){
    return parseInt(this.get('id')) === this.get('session').get('session').content.authenticated.id;
  }),
  computed_display_name : Ember.computed(function(){
    if (this.get('display_name')) {
      return this.get('display_name');
    } else {
      return this.get('user.email').replace(/@.*$/g, '');
    }
  }).property('display_name'),
  formattedBio: Ember.computed(function() {
        return this.get('bio').replace(/\n\r?/g, '<br>');
  }).property('bio').cacheable()
});

//Account.reopenClass({
//  FIXTURES: [
//    {
//      "account": [{
//        "id": 1,
//        "first_name": "Barack",
//        "last_name": "Obama",
//        "location_ids": 1,
//        "language_ids": 1,
//        "skill_ids": 1,
//        "intention_ids": 1,
//        "affiliation_ids": 1
//      }],
//
//      "locations": [{
//        "id": 1,
//        "location": "Bucharest, Romania"
//      }],
//
//      "languages": [
//        {
//        "id": 1,
//        "common": 'russian',
//        "iso": 'ru_RU.UTF-8'
//        },
//        {
//        "id": 2,
//        "common": 'romanian',
//        "iso": 'ro_RO.UTF-8'
//        }
//      ],
//      "skills": [{
//        "id": 1,
//      }],
//      "intentions": [{
//        "id": 1,
//      }],
//      "affiliations": [{
//        "id": 1,
//      }]
//    }
//  ]
//});


export default Account;
