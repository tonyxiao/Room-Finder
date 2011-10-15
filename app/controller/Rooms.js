Ext.define('RF.controller.Rooms', {
    extend: 'Ext.app.Controller',
    models: ['Room'],
    stores: ['Rooms'],

    refs: [
        {ref: 'roomsFilter', selector: 'roomsfilter' },
        {ref: 'roomsList',   selector: 'roomslist' },
        {ref: 'roomView',  selector: 'roomview' }
    ],

    init: function() {
        var me = this;
        me.control({
            'roomslist': {
                itemclick: me.showRoom
            },
            '#filters [name=capacity]': {
                changecomplete: me.filterRooms
            },
            '#filters [name=building]': {
                change: me.filterRooms
            },
            '#filters button[text=Test]': {
                click: function() {
                    values = (me.getRoomsFilter().getValues());
                    
                }
            }
        });
    },
    onLaunch: function() {
        this.getRoomsStore().on('load', function(store) {
            var room = store.getById(0);
            console.log(room.data);
        })
    },
    showRoom: function(view, record) {
        this.getRoomView().bind(record);
    },
    filterRooms: function() {
        var rooms = this.getRoomsStore(),
            values = this.getRoomsFilter().getValues(),
            filters = [];
        rooms.clearFilter();

        if (!Ext.isEmpty(values.capacity)) {
            var limits = values.capacity.sort();
            // TODO: this whole sorting is still GAHH not working
            rooms.filterBy(function(record, id) {
                return record.data.capacity >= limits[0] && record.data.capacity <= limits[1];
            });
        }
        if (!Ext.isEmpty(values.building))
            filters.push({ property: 'building', value: values.building, exactMatch: true });
        if (!Ext.isEmpty(values))
        if (!Ext.isEmpty(filters))
            rooms.filter(filters);
    }
});