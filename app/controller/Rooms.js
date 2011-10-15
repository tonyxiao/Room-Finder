Ext.define('RF.controller.Rooms', {
    extend: 'Ext.app.Controller',
    models: ['Room'],
    stores: ['Rooms'],

    refs: [
        {ref: 'roomsFilter', selector: 'roomsfilter' },
        {ref: 'roomsList',   selector: 'roomslist' },
        {ref: 'roomView',  selector: 'roomview' },
        {ref: 'calendar', selector: '#calendar' }
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
                    me.filterRooms();
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
        bookings = record.data.bookings;
        this.getCalendar().store.loadData(record.data.bookings);
        console.log(this.getCalendar().store);
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
        if (!Ext.isEmpty(values.from_date)
            && !Ext.isEmpty(values.from_time)
            && !Ext.isEmpty(values.to_date)
            && !Ext.isEmpty(values.to_time)) {
            var from = Ext.Date.parse(values.from_date + "T" + values.from_time, 'c'),
                to = Ext.Date.parse(values.to_date + "T" + values.to_time, 'c');
//            console.log(from, to);
            rooms.filterBy(function(record, id) {
                var free = true;
                Ext.Array.each(record.data.bookings, function(booking, i, bookings) {
                    if (!Ext.isEmpty(booking)) {
                        var start = Ext.Date.parse(booking.start, 'c'),
                            end = Ext.Date.parse(booking.end, 'c');
//                        console.log(start, end);
//                        console.log(to.getTime() <= start.getTime());
//                        console.log(from.getTime() >= end.getTime());
                        if (!(to.getTime() <= start.getTime()
                            || from.getTime() >= end.getTime()))
                            free = false;
                    }
                });
                return free;
            });
        }
        if (!Ext.isEmpty(filters))
            rooms.filter(filters);
    }
});