Ext.define('RF.model.Booking', {
    extend: 'Extensible.calendar.data.EventModel',
    fields: [
        { name: 'id',       type: 'int' },
        { name: 'cid',      type: 'int' },
        { name: 'title',    type: 'string' },
        { name: 'start',    type: 'date', dateFormat: 'c' },
        { name: 'end',      type: 'date', dateFormat: 'c' },
        { name: 'rrule',    type: 'string' },
        { name: 'loc',      type: 'string' },
        { name: 'notes',    type: 'string' },
        { name: 'url',      type: 'string' },
        { name: 'ad',       type: 'boolean' },
        { name: 'rem',      type: 'string' },
        { name: 'approved', type: 'boolean' },
        { name: 'room_id',  type: 'int', useNull: true }
    ],
    belongsTo: 'RF.model.Room',
    proxy: {
        type: 'rest',
        url: 'app/data/bookings.json'
    }
});