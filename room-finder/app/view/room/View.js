Ext.define('RF.view.room.View', {
    alias: 'widget.roomview',
    extend: 'Ext.tab.Panel',
    requires: [
        'Extensible.calendar.CalendarPanel',
        'RF.view.room.Form'
    ],
    items: [
        {
            id        : 'itemCt',
            xtype     : 'panel',
            cls       : 'item-ct',
            border    : false,
            autoScroll: true,
            title     : 'Room Details',
            layout: {
                type : 'hbox',
                align: 'middle',
                pack : 'center'
            },
            items: [
                {
                    id    : 'imgCt',
                    border: false,
                    margin: '0 10 0 20',
                    width : 200,
                    height: 308,
                    html: '<img src="http://www.workforcenetwork.com/workforcefiles/uploads/Corner_Conference_Room.jpg" />'
                },
                {
                    id    : 'contentCt',
                    width : 500,
                    border: false,
                    html: '<div class="name">Please Select a Room</div>' +
                          '<div class="author">Capacity</div>' +
                          '<div class="detail">Details</div>'
                }
            ]
        }, {
            id: 'cal',
            itemId: 'calendar',
            title: 'Availability',
            disabled: true,
            xtype: 'extensible.calendarpanel',
            activeItem: 1,
            eventStore: Ext.create('RF.store.Bookings',  {
                proxy: {
                    type: 'rest',
                    url: '/rest/bookings'
                },
                listeners: {
                    beforeload: function(store, operation) {
                        return false; // hack to get around te problem where viewchange cause store reload
                    }
                }
            }),
            enableEditDetails: false
        }, {
            xtype: 'roomform',
            title: 'Edit Room (Admin only)',
            disabled: true
        }
    ],
    
    /**
     * Binds a record to this view
     */
    bind: function(record) {
        var imgCt = Ext.getCmp('imgCt'),
            contentCt = Ext.getCmp('contentCt');
        
        var imgTpl = new Ext.XTemplate(
            '<img src="{image}" />'
        );
        
        var contentTpl = new Ext.XTemplate(
            '<div class="name">{building} <span>{room_number}</span></div>',
            '<div class="author">Room Type: {room_type}</div>',
            '<div class="detail">Admin: {admin} <br />Description: {description}</div>'
        );
        
        imgTpl.overwrite(imgCt.el, record.data);
        contentTpl.overwrite(contentCt.el, record.data);
        
        //update the layout of the contentTpl
        contentCt.setHeight('auto');
        this.doLayout();
    },
    resetView: function() {
        var imgCt = Ext.getCmp('imgCt'),
            contentCt = Ext.getCmp('contentCt');

        var imgTpl = new Ext.XTemplate(
            '<img src="http://www.workforcenetwork.com/workforcefiles/uploads/Corner_Conference_Room.jpg" />'
        );

        var contentTpl = new Ext.XTemplate(
            '<div class="name">Please Select a Room</div>',
            '<div class="author"></div>',
            '<div class="detail"></div>'
        );

        imgTpl.overwrite(imgCt.el, []);
        contentTpl.overwrite(contentCt.el, []);
        //update the layout of the contentTpl
        contentCt.setHeight('auto');
        this.doLayout();
    }
});