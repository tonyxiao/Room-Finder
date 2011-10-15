package rf;

import java.lang.reflect.Type;

import models.Booking;

import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonSerializationContext;
import com.google.gson.JsonSerializer;

public class BookingTypeAdapter extends GsonTypeAdapter 
							 implements JsonSerializer<Booking>,
										JsonDeserializer<Booking> {
	private boolean recursive = false;
	
	public BookingTypeAdapter() {
		this(false);
	}
	
	public BookingTypeAdapter(boolean recursive) {
		this.recursive = recursive;
	}
	
	@Override
	public JsonElement serialize(Booking Booking, Type t, JsonSerializationContext ctx) {
		JsonObject j = getBasicSerialization(Booking);
		
		return j;
	}

	@Override
	public Booking deserialize(JsonElement je, Type t, JsonDeserializationContext ctx) {
		JsonObject j = je.getAsJsonObject();
		Booking b = new Booking();
		
		getBasicDeserialization(b, j);

		return b;
	}

}
