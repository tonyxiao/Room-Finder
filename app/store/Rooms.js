Ext.define('RF.store.Rooms', {
    extend: 'Ext.data.Store',
    requires: 'RF.model.Room',
    model: 'RF.model.Room',
    autoLoad: true,
    autoSync: true
});