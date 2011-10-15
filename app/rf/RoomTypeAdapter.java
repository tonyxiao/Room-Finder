package rf;

import java.lang.reflect.Type;

import models.Booking;
import models.Room;

import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonSerializationContext;
import com.google.gson.JsonSerializer;

public class RoomTypeAdapter extends GsonTypeAdapter 
							 implements JsonSerializer<Room>,
										JsonDeserializer<Room> {
	
	@Override
	public JsonElement serialize(Room room, Type t, JsonSerializationContext ctx) {
		BookingTypeAdapter bta = new BookingTypeAdapter();
		
		JsonObject j = getBasicSerialization(room);
		
		JsonArray bookings = new JsonArray();
		if (room.bookings != null)
			for (Booking b : room.bookings)
				bookings.add(bta.serialize(b, t, ctx));
		j.add("bookings", bookings);
					
		return j;
	}

	@Override
	public Room deserialize(JsonElement je, Type t, JsonDeserializationContext ctx) {
		JsonObject j = je.getAsJsonObject();
		Room r = new Room();
		
		getBasicDeserialization(r, j);

		return r;
	}

}
