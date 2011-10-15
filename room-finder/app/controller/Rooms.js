Ext.define('RF.controller.Rooms', {
    extend: 'Ext.app.Controller',
    models: ['Room'],
    stores: ['Rooms'],

    refs: [
        {ref: 'roomsFilter', selector: 'roomsfilter' },
        {ref: 'roomsList',   selector: 'roomslist' },
        {ref: 'roomView',  selector: 'roomview' },
        {ref: 'calendar', selector: '#calendar' },
        {ref: 'roomForm', selector: 'roomview roomform' }
    ],

    init: function() {
        var me = this;
        me.control({
            'roomslist': {
                itemclick: me.showRoom
            },
            'roomslist button[action=add]': {
                click: function() {
                    var  win = Ext.create('Ext.window.Window', {
                        title: 'Create New Room',
                        height: 450,
                        width: 600,
                        layout: 'fit',
                        items: { 
                            xtype: 'roomform'
                        }
                    }).show();
                    win.down('button[text=Delete]').hide();
                    win.down('button[text=Save]').on('click', function() {
                        var form = win.child('roomform').getForm();
                        if (form.isValid()) {
                            me.getRoomsStore().add(form.getValues());
                            win.destroy();
                        }

                    });
                }
            },
            '#filters numberfield': {
                change: me.filterRooms
            },
            '#filters [name=building]': {
                change: me.filterRooms
            },
            '#filters button[text="Filter by Availability"]': {
                click: me.filterRooms
            },
            '#filters button[text="Reset Filter"]': {
                click: function() {
                    Ext.getCmp('from_date').setValue('');
                    Ext.getCmp('from_time').setValue('');
                    Ext.getCmp('to_date').setValue('');
                    Ext.getCmp('to_time').setValue('');
                    me.filterRooms();
                }
            },
            'roomview roomform button[text=Save]': {
                click: function() {
                    var form = me.getRoomForm().getForm();
                    console.log(form.isValid());
                    console.log(form.getRecord());
                    console.log(form.getValues());
                    form.getRecord().set(form.getValues());
//                    if (form.isValid()) {
//                        form.updateRecord(form.getRecord());
//                    }
                }
            },
            'roomview roomform button[text=Delete]': {
                click: function() {
                    var form = me.getRoomForm().getForm(),
                        record = form.getRecord();
                    if (record != null) {
                        me.getRoomsStore().remove(record);
                        me.resetRoomView();
                    }
                }
            }
        });
    },
    onLaunch: function() {
//        this.getRoomsStore().on('load', function(store) {
//            var room = store.getById(0);
//            console.log(room.data);
//        })
    },
    resetRoomView: function() {
        this.getRoomView().setActiveTab(0);
        this.getCalendar().disable();
        this.getRoomForm().disable();
    },
    showRoom: function(view, record) {
        this.getRoomView().bind(record);
        this.getRoomForm().enable();
        this.getCalendar().enable();
        this.getCalendar().store.room = record;
        this.getCalendar().store.loadData(record.data.bookings);
        this.getRoomForm().loadRecord(record);
    },
    filterRooms: function() {
        var rooms = this.getRoomsStore(),
            values = this.getRoomsFilter().getValues(),
            filters = [];
        rooms.clearFilter();

        if (!Ext.isEmpty(values.capacityMin) && !Ext.isEmpty(values.capacityMax)) {
            filters.push({
                filterFn: function(record, id) {
                    var min = values.capacityMin,
                        max = values.capacityMax;
                    return record.data.capacity >= min && record.data.capacity <= max;
                }
            });
        }

        if (!Ext.isEmpty(values.building))
            filters.push({ property: 'building', value: values.building, exactMatch: true });

        if (!Ext.isEmpty(values.from_date)
            && !Ext.isEmpty(values.from_time)
            && !Ext.isEmpty(values.to_date)
            && !Ext.isEmpty(values.to_time)) {
            var from = Ext.Date.parse(values.from_date + "T" + values.from_time, 'c'),
                to = Ext.Date.parse(values.to_date + "T" + values.to_time, 'c');
            filters.push({
                filterFn: function(record, id) {
                    var free = true;
                    Ext.Array.each(record.data.bookings, function(booking, i, bookings) {
                        if (!Ext.isEmpty(booking)) {
                            var start = Ext.Date.parse(booking.start, 'c') || booking.get('start'),
                                end = Ext.Date.parse(booking.end, 'c') || booking.get('end');
                            if (!(to.getTime() <= start.getTime()
                                || from.getTime() >= end.getTime()))
                                free = false;
                        }
                    });
                    return free;
                }
            });
        }
        if (!Ext.isEmpty(filters))
            rooms.filter(filters);

        var cal = this.getCalendar();
        if (cal.store.indexOf(cal.store.room) == -1) {
            this.getRoomView().resetView();
            this.getRoomView().setActiveTab(0);
            cal.store.room = null;
        }
    }
});