package controllers.rest;

import java.util.List;

import controllers.BaseController;

import models.Room;
import play.data.validation.Valid;
import play.mvc.Controller;
import play.mvc.Http;

public class Rooms extends BaseController {

	public static void index() {
    	List<Room> rooms = Room.all().fetch();
    	renderJSON(rooms);
    }

    public static void view(long id) {
    	Room r = Room.findById(id);
    	if (r == null)
    		notFound();
    	renderJSON(r);
    }

    public static void create(@Valid Room room) {
    	if (validation.hasErrors())
    		badRequest();
    	room.id = null;
    	room = room.merge();
    	room.save();
    	renderJSON(room);
    }

    public static void edit(long id, @Valid Room room) {
    	if (room.findById(id) == null)
    		notFound();
    	if (validation.hasErrors())
    		badRequest();
    	room.id = id;
    	room = room.merge();
    	room.save();
    	renderJSON(room);
    }

    public static void delete(long id) {
    	Room r = Room.findById(id);
    	if (r == null)
    		notFound();
    	r.delete();
        noResponse();
    }

}