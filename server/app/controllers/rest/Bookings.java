package controllers.rest;

import java.util.List;

import controllers.BaseController;

import models.Booking;
import play.data.validation.Valid;
import play.mvc.Controller;
import play.mvc.Http;

public class Bookings extends BaseController {

	public static void index() {
    	List<Booking> bookings = Booking.all().fetch();
    	renderJSON(bookings);
    }

    public static void view(long id) {
    	Booking b = Booking.findById(id);
    	if (b == null)
    		notFound();
    	renderJSON(b);
    }

    public static void create(@Valid Booking booking) {
    	if (validation.hasErrors())
    		badRequest();
    	booking.id = null;
    	booking = booking.merge();
    	booking.save();
    	renderJSON(booking);
    }

    public static void edit(long id, @Valid Booking booking) {
    	if (booking.findById(id) == null)
    		notFound();
    	if (validation.hasErrors())
    		badRequest();
    	booking.id = id;
    	booking = booking.merge();
    	booking.save();
    	renderJSON(booking);
    }

    public static void delete(long id) {
    	Booking b = Booking.findById(id);
    	if (b == null)
    		notFound();
    	b.delete();
        noResponse();
    }

}