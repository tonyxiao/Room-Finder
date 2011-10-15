package rf;

import java.lang.reflect.Type;

import models.Room;

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
		JsonObject j = getBasicSerialization(room);
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
