Ext.define('RF.view.room.Filter', {
    extend: 'Ext.form.Panel',
    alias: 'widget.roomsfilter',
    autoScroll: true,
    items: [
        {
            xtype: 'fieldset',
            title: 'Capacity',
            collapsible: true,
            margin: 5,
            items: [
                {
                    name: 'capacityMin',
                    fieldLabel: 'Min',
                    xtype: 'numberfield',
                    value: 0
                }, {
                    name: 'capacityMax',
                    fieldLabel: 'Max',
                    xtype: 'numberfield',
                    value: 300
                }
            ]
        }, {
            xtype: 'fieldset',
            title: 'Building & Room',
            collapsible: true,
            margin: 5,
            items: [
                {
                    id: 'buildingCombo',
                    itemId: 'building',
                    name: 'building',
                    xtype: 'combobox',
                    fieldLabel: 'Building Name',
                    store: []
                }, {
                    id: 'roomTypeCombo',
                    itemId: 'roomType',
                    name: 'room_type',
                    xtype: 'combobox',
                    fieldLabel: 'Room Type',
                    store: ['Classroom', 'Seminar Room', 'Theatre', 'Lounge', 'Other']
                }
            ]
        }, {
            xtype: 'fieldset',
            title: 'Tags',
            collapsible: true,
            margin: 5,
            items: [
                {
                    itemId: 'tags',
                    name: 'tags',
                    xtype: 'combobox',
                    multiSelect: true,
                    store: [
                        'Printer',
                        'Projector',
                        'Basement',
                        'Smelly',
                        'Some other stuff'
                    ]
                }
            ]
        }, {
            xtype: 'fieldset',
            title: 'Available During',
            collapsible: true,
            margin: 5,
            items: [
                {
                    fieldLabel: 'From Date',
                    id: 'from_date',
                    name: 'from_date',
                    xtype: 'datefield',
                    format: 'Y-m-d',
                    value: '2011-10-15'
                }, {
                    fieldLabel: 'From Time',
                    id: 'from_time',
                    name: 'from_time',
                    xtype: 'timefield',
                    format: 'H:i',
                    value: '09:00'
                }, {
                    fieldLabel: 'To Date',
                    id: 'to_date',
                    name: 'to_date',
                    xtype: 'datefield',
                    format: 'Y-m-d',
                    value: '2011-10-15'
                }, {
                    fieldLabel: 'To Time',
                    id: 'to_time',
                    name: 'to_time',
                    xtype: 'timefield',
                    format: 'H:i',
                    value: '09:40'
                }, {
                    xtype: 'button',
                    text: 'Reset Filter',
                    margin: 5
                }, {
                    xtype: 'button',
                    text: 'Filter by Availability',
                    margin: 5
                }
            ]
        }
    ]
});