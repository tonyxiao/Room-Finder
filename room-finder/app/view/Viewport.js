Ext.define('RF.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: ['RF.view.Header', 'RF.view.room.List', 'RF.view.room.View', 'RF.view.room.Filter'],
    layout: 'fit',
    items: [
        {
            xtype: 'panel',
            layout: 'fit',
            dockedItems: [
                Ext.create('RF.view.Header', {
                    html: 'Room Finder'
                })
            ],
            border: false,
            items: [
                {
                    xtype: 'panel',
                    layout: 'border',
                    items: [
                        {
                            itemId: 'filters',
                            region: 'west',
                            xtype: 'roomsfilter',
                            title: 'Filters',
                            flex: 2
//                            collapsed: true,
//                            collapsible: true
                        }, {
                            region: 'center',
                            xtype: 'roomslist',
                            title: 'Rooms List',
                            flex: 2
                        }, {
                            region: 'east',
                            xtype: 'roomview',
                            flex: 3
//                            collapsed: true,
//                            collapsible: true
                        }
                    ]
                }
            ]
        }
    ]
});
