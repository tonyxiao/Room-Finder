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
        'events'
    ],
    validations: [
        {type: 'presence',  field: 'first_name'},
        {type: 'presence',  field: 'last_name'},
        {type: 'presence',  field: 'device_id'},
        {type: 'presence',  field: 'phone_num'}
    ],
    proxy: {
        type: 'ajax',
        url : 'app/data/rooms.json'
    }
});