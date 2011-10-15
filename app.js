/* Global configurations and options */
Ext.Loader.setConfig({
    enabled: true,
//    disableCaching: false,
    paths: {
        'Extensible': 'lib/Extensible'
    }
});
var events = {
    "evts": [
        {
            "id": 1001,
            "cid": 1,
            "title": "Vacation",
            "start": "2011-09-25T14:00:00.000Z",
            "end": "2011-10-05T19:00:00.000Z",
            "notes": "Have fun"
        },
        {
            "id": 1002,
            "cid": 2,
            "title": "Lunch with Matt",
            "start": "2011-10-15T15:30:00.000Z",
            "end": "2011-10-15T17:00:00.000Z",
            "loc": "Chuy's!",
            "url": "http://chuys.com",
            "notes": "Order the queso",
            "rem": "15"
        },
        {
            "id": 1003,
            "cid": 3,
            "title": "Project due",
            "start": "2011-10-15T19:00:00.000Z",
            "end": "2011-10-15T19:00:00.000Z"
        },
        {
            "id": 1004,
            "cid": 1,
            "title": "Sarah's birthday",
            "start": "2011-10-15T04:00:00.000Z",
            "end": "2011-10-15T04:00:00.000Z",
            "notes": "Need to get a gift",
            "ad": true
        },
        {
            "id": 1005,
            "cid": 2,
            "title": "A long one...",
            "start": "2011-10-03T04:00:00.000Z",
            "end": "2011-10-25T03:59:59.000Z",
            "ad": true
        },
        {
            "id": 1006,
            "cid": 3,
            "title": "School holiday",
            "start": "2011-10-20T04:00:00.000Z",
            "end": "2011-10-22T03:59:59.000Z",
            "ad": true,
            "rem": "2880"
        },
        {
            "id": 1007,
            "cid": 1,
            "title": "Haircut",
            "start": "2011-10-15T13:00:00.000Z",
            "end": "2011-10-15T13:30:00.000Z",
            "notes": "Get cash on the way"
        },
        {
            "id": 1008,
            "cid": 3,
            "title": "An old event",
            "start": "2011-09-15T04:00:00.000Z",
            "end": "2011-09-17T04:00:00.000Z",
            "ad": true
        },
        {
            "id": 1009,
            "cid": 2,
            "title": "Board meeting",
            "start": "2011-10-13T17:00:00.000Z",
            "end": "2011-10-13T22:00:00.000Z",
            "loc": "ABC Inc.",
            "rem": "60"
        },
        {
            "id": 1010,
            "cid": 3,
            "title": "Jenny's final exams",
            "start": "2011-10-13T04:00:00.000Z",
            "end": "2011-10-18T03:59:59.000Z",
            "ad": true
        },
        {
            "id": 1011,
            "cid": 1,
            "title": "Movie night",
            "start": "2011-10-17T23:00:00.000Z",
            "end": "2011-10-18T03:00:00.000Z",
            "notes": "Don't forget the tickets!",
            "rem": "60"
        },
        {
            "id": 1012,
            "cid": 4,
            "title": "Gina's basketball tournament",
            "start": "2011-10-23T12:00:00.000Z",
            "end": "2011-10-25T21:00:00.000Z"
        },
        {
            "id": 1013,
            "cid": 4,
            "title": "Toby's soccer game",
            "start": "2011-10-20T14:00:00.000Z",
            "end": "2011-10-20T16:00:00.000Z"
        }
    ]
};
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