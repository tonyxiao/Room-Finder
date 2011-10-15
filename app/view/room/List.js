Ext.define('RF.view.room.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.roomslist',
    store: 'Rooms',
    columns: [
        {
            text: 'Room #',
            dataIndex: 'room_number'
        }, {
            text: 'Building',
            dataIndex: 'building'
        }, {
            text: 'Admin Name',
            dataIndex: 'admin'
        }, {
            text: 'Capacity',
            dataIndex: 'capacity'
        }
    ]
});