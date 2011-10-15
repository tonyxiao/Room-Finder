Ext.define('RF.controller.Bookings', {
    extend: 'Ext.app.Controller',
    models: ['Booking'],
    stores: ['Bookings'],
    requires: [
        'Extensible.calendar.data.EventMappings',
        'Extensible.calendar.data.EventModel'
    ],
    refs: [
//        {ref: 'roomsFilter', selector: 'roomsfilter' },
//        {ref: 'roomsList',   selector: 'roomslist' },
//        {ref: 'roomView',  selector: 'roomview' }
    ],

    init: function() {
        var M = Extensible.calendar.data.EventMappings;
//        M.Title.mapping = 'evt_title';
        M.EventId.name = 'id';
        M.Title.name = 'title';
        M.StartDate.name = 'start';
        M.EndDate.name = 'end';
        Extensible.calendar.data.EventModel.reconfigure();
//        RF.model.Booking.reconfigure();
//        var me = this;
//        me.control({
//            'roomslist': {
//                itemclick: me.showRoom
//            },
//            '#filters #capacity': {
//                changecomplete: me.filterRooms
//            },
//            '#filters #building': {
//                change: me.filterRooms
//            }
//        });
    },
    onLaunch: function() {

    }
});