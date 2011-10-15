Ext.define('RF.store.Bookings', {
    extend: 'Extensible.calendar.data.EventStore',
    listeners: {
        add: function(store, bookings) {
            Ext.each(bookings, function(booking, i) {
                booking.set('room_id', store.room.getId());
            });
        }
    }
});