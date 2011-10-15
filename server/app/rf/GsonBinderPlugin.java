package rf;

import java.lang.annotation.Annotation;
import java.lang.reflect.Type;
import java.util.Map;

import models.Room;
import models.Booking;
import play.PlayPlugin;
import play.db.jpa.JPABase;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import rf.RoomTypeAdapter;
import rf.BookingTypeAdapter;

public class GsonBinderPlugin extends PlayPlugin {
	public static Gson gson = new GsonBuilder().
			registerTypeAdapter(Booking.class, new BookingTypeAdapter()).
			registerTypeAdapter(Room.class, new RoomTypeAdapter()).
			create();
	
	@Override
	public Object bind(String name, Class clazz, Type type,
			Annotation[] annotations, Map<String, String[]> params) {
		if (clazz != null && JPABase.class.isAssignableFrom(clazz)) {
			if (clazz.equals(Booking.class))
				return gson.fromJson(params.get("body")[0], Booking.class);
			if (clazz.equals(Room.class))
				return gson.fromJson(params.get("body")[0], Room.class);
		}
		return null;
	}

}
