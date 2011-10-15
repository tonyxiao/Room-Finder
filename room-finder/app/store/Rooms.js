Ext.define('RF.store.Rooms', {
    extend: 'Ext.data.Store',
    requires: 'RF.model.Room',
    model: 'RF.model.Room',
    autoLoad: true,
    autoSync: true,
    listeners: {
        datachanged: function(store) { store.syncComboStores(store); }

    },
    syncComboStores: function(store) {
        var buildings = [];
        Ext.each(store.collect('building', false, true), function(building) {
            buildings.push([building]);
        });
        Ext.getCmp('buildingCombo').store.loadData(buildings);
        var types = [];
        Ext.each(store.collect('room_type', false, true), function(type) {
            types.push([type]);
        });
        Ext.getCmp('roomTypeCombo').store.loadData(types);
    }
});