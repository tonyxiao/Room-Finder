Ext.define('RF.view.room.Form', {
    alias: 'widget.roomform',
    extend: 'Ext.form.Panel',
    buttonAlign: 'left',
    buttons: [{
        text: 'Save'
    }, {
        text: 'Delete'
    }],
    items: [
        {
            xtype: 'fieldset',
            title: 'Basic Info',
            defaultType: 'textfield',
            margin: 10,
            items: [
                {
                    fieldLabel: 'Building',
                    name: 'building'
                }, {
                    fieldLabel: 'Room Number',
                    name: 'room_number'
                }, {
                    fieldLabel: 'Room Type',
                    name: 'room_type'
                }, {
                    fieldLabel: 'Room Admin',
                    name: 'admin'
                }, {
                    fieldLabel: 'Room Image',
                    name: 'image'
                }, {
                    xtype: 'numberfield',
                    fieldLabel: 'Capacity',
                    name: 'capacity'
                }
            ]
        }, {
            xtype: 'fieldset',
            title: 'Additional Info',
            margin: 10,
            items: [
                {
                    xtype: 'textarea',
                    fieldLabel: 'Description',
                    name: 'description',
                    anchor: '100%'
                }
            ]
        }
    ]
});