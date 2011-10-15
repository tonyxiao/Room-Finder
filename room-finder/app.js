/* Global configurations and options */
Ext.Loader.setConfig({
    enabled: true,
//    disableCaching: false,
//    paths: {
//        'Extensible': 'lib/Extensible'
//    }
});
Ext.application({
    name: 'RF',
    controllers: ['Rooms', 'Bookings'],
    autoCreateViewport : true,

    launch: function() {

//        var rooms = [];
//        for (var i=0; i<10; i++) {
//            var room = {
//                id : i,
//                room_number: 'Room #'+i,
//                building: 'Friend',
//                photo: 'http://www.virtually-iceland.com/_uploads/iceland_radisson_Conference_room_700_hc.jpg',
//                capacity: 15,
//                admin: 'Paul'
//            };
//            rooms.push(room);
//        }
//        console.log(JSON.stringify(rooms));


    }
});