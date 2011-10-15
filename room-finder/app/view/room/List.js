Ext.define('RF.view.room.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.roomslist',
    store: 'Rooms',
    columns: [
        {
            text: 'Building',
            dataIndex: 'building'
        }, {
            text: 'Room #',
            dataIndex: 'room_number'
        }, {
            text: 'Room Type',
            dataIndex: 'room_type'
        }, {
            text: 'Admin Name',
            dataIndex: 'admin',
            hidden: true
        }, {
            text: 'Capacity',
            dataIndex: 'capacity',
            width: 70
        }
    ]
});