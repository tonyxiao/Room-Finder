Ext.define('RF.controller.Bookings', {
    extend: 'Ext.app.Controller',
    models: ['Booking'],
    stores: ['Bookings'],
    requires: [
        'Extensible.calendar.data.EventMappings',
        'Extensible.calendar.data.EventModel'
    ],
    refs: [
        {ref: 'calendar', selector: '#calendar' },
//        {ref: 'roomsList',   selector: 'roomslist' },
//        {ref: 'roomView',  selector: 'roomview' }
    ],

    init: function() {
        var M = Extensible.calendar.data.EventMappings;
        M.EventId.name = 'id';
        M.EventId.useNull = true;
        M.Title.name = 'title';
        M.StartDate.name = 'start';
        M.EndDate.name = 'end';
        M.Approved = {
            name: 'approved',
            mapping: 'approved',
            type: 'boolean'
        };
        M.RoomId = {
            name: 'room_id',
            mapping: 'room_id',
            type: 'int'
        };
        Extensible.calendar.data.EventModel.reconfigure();
        Extensible.form.field.DateRange.override({ showAllDay: false });
        Ext.override(Extensible.calendar.form.EventWindow, {
            titleTextAdd: 'New Booking',
            titleTextEdit: 'Edit Booking',
            enableEditDetails: false,
            getFormItemConfigs: function() {
                var items = this.callOverridden(arguments);
                items.push({
                    xtype: 'textfield',
                    fieldLabel: 'Contact Name',
                    name: 'contact_name'
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Contact Email',
                    name: 'contact_email'
                }, {
                    xtype: 'textarea',
                    fieldLabel: 'Event Description',
                    name: Extensible.calendar.data.EventMappings.Notes.name,
                    grow: true,
                    growMax: 150,
                    anchor: '100%'
                });
                return items;
            }
        });
        var me = this;
        me.control({
            '#calendar': {
                rangeselect: function(calendar, dates) {
//                    console.log(calendar, dates);
                    //TODO: Make sure to check for duplicate event
                }
            }
        });
    },
    onLaunch: function() {

    }
});