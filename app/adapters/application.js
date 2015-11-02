import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from "../config/environment";

var Adapter = DS.ActiveModelAdapter.extend(DataAdapterMixin, {
  host: ENV.APP.apiHost,
  namespace: ENV.APP.apiNamespace,
  authorizer: 'authorizer:devise'
});

export default Adapter;


