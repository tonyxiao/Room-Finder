Ext.define('RF.view.room.Filter', {
    extend: 'Ext.form.Panel',
    alias: 'widget.roomsfilter',
    autoScroll: true,
    buttons: [{
        text: 'Test'
    }],
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
            title: 'Building',
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
                    id: 'buildingTypeCombo',
                    itemId: 'buildingType',
                    name: 'building_type',
                    xtype: 'combobox',
                    fieldLabel: 'Building Type',
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
                    name: 'from_date',
                    xtype: 'datefield',
                    format: 'Y-m-d',
                    value: '2011-10-15',
                    validator: function(val) {
                        return !Ext.isEmpty(val);
                    }
                }, {
                    fieldLabel: 'From Time',
                    name: 'from_time',
                    xtype: 'timefield',
                    format: 'H:i',
                    value: '09:00'
                }, {
                    fieldLabel: 'To Date',
                    name: 'to_date',
                    xtype: 'datefield',
                    format: 'Y-m-d',
                    value: '2011-10-15'
                }, {
                    fieldLabel: 'To Time',
                    name: 'to_time',
                    xtype: 'timefield',
                    format: 'H:i',
                    value: '09:40'
                }
            ]
        }
    ]
});