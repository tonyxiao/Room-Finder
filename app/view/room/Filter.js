Ext.define('RF.view.room.Filter', {
    extend: 'Ext.form.Panel',
    alias: 'widget.roomsfilter',
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
                    itemId: 'capacity',
                    name: 'capacity',
                    xtype: 'multislider',
                    width: 200,
                    values: [0, 500],
                    increment: 5,
                    minValue: 0,
                    maxValue: 500,
                    // this defaults to true, setting to false allows the thumbs to pass each other
                    constrainThumbs: false
                }
            ]
        }, {
            xtype: 'fieldset',
            title: 'Building',
            collapsible: true,
            margin: 5,
            items: [
                {
                    itemId: 'building',
                    name: 'building',
                    xtype: 'combobox',
                    fieldLabel: 'name',
                    store: [
                        'Friend',
                        'CS',
                        'East Pyne',
                        'Nassau',
                        'Lewis'
                    ]
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
                    validator: function(val) {
                        return !Ext.isEmpty(val);
                    }
                }, {
                    fieldLabel: 'From Time',
                    name: 'from_time',
                    xtype: 'timefield',
                    format: 'H:i'
                }, {
                    fieldLabel: 'To Date',
                    name: 'to_date',
                    xtype: 'datefield',
                    format: 'Y-m-d'
                }, {
                    fieldLabel: 'To Time',
                    name: 'to_time',
                    xtype: 'timefield',
                    format: 'H:i'
                }
            ]
        }
    ]
});