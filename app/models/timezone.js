import DS from 'ember-data';

export default DS.Model.extend({
  	model: function() {
        return this.get('store').find('timezone');
    }
});
