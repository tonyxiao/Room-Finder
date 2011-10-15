Ext.define('RF.model.Room', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',           type: 'int',   useNull: true},
        {name: 'room_number',  type: 'string'},
        {name: 'building',     type: 'string'},
        {name: 'image',        type: 'string'},
        {name: 'admin',        type: 'string'},
        {name: 'day_start',    type: 'string'},
        {name: 'day_end',      type: 'string'},
        {name: 'capacity',     type: 'int'},
        'bookings'
    ],
    validations: [
        {type: 'presence',  field: 'first_name'},
        {type: 'presence',  field: 'last_name'},
        {type: 'presence',  field: 'device_id'},
        {type: 'presence',  field: 'phone_num'}
    ],
//    hasMany: { model: 'RF.model.Booking', name: 'bookings' },
    proxy: {
        type: 'ajax',
        url : 'http://localhost:9000/rest/rooms'
    }
});