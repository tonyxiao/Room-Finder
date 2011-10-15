Ext.define('RF.view.room.View', {
    alias: 'widget.roomview',
    extend: 'Ext.tab.Panel',
    requires: [
        'Extensible.calendar.CalendarPanel'
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
                    height: 308
                },
                {
                    id    : 'contentCt',
                    width : 500,
                    border: false
                }
            ]
        }, {
            id: 'cal',
            itemId: 'calendar',
            title: 'Availability',
            xtype: 'extensible.calendarpanel',
            eventStore: Ext.create('Extensible.calendar.data.EventStore',  {
                autoLoad: true,
                proxy: {
                    type: 'rest',
                    url: 'app/data/bookings.json'
                }
            }),
            showMultiWeekView: false,
            showMonthView: false
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
            '<div class="author">Capacity {capacity}</div>',
            '<div class="detail">Details: {admin}</div>'
        );
        
        imgTpl.overwrite(imgCt.el, record.data);
        contentTpl.overwrite(contentCt.el, record.data);
        
        //update the layout of the contentTpl
        contentCt.setHeight('auto');
        this.doLayout();
    }
});