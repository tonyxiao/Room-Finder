package rf;

import java.lang.reflect.Field;
import java.util.HashSet;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;

public abstract class GsonTypeAdapter {

	private static final HashSet<Class<?>> basicTypes;
	static {
		HashSet<Class<?>> types = new HashSet<Class<?>>();
		types.add(String.class);
		types.add(Boolean.class);
		types.add(Character.class);
		types.add(Byte.class);
		types.add(Short.class);
		types.add(Integer.class);
		types.add(Long.class);
		types.add(Float.class);
		types.add(Double.class);
		types.add(Void.class);
		basicTypes = types;
	}
	private static final HashSet<String> excludedFields;
	static {
		HashSet<String> fields = new HashSet<String>();
		fields.add("willBeSaved");
		excludedFields = fields;
	}
	
	public static boolean isBasicType(Class c) {
		if (c.isPrimitive())
			return true;
		if (basicTypes.contains(c))
			return true;
		return false;
	}

	public static boolean isString(Class c) {
		return String.class.isAssignableFrom(c);
	}
	
	public static boolean isBoolean(Class c) {
		return c.getName().equals("boolean") || c.equals(Boolean.class);
	}
	
	public static boolean isCharacter(Class c) {
		return c.getName().equals("char") || c.equals(Character.class);
	}
	
	public static boolean isByte(Class c) {
		return c.getName().equals("byte") || c.equals(Byte.class);
	}
	
	public static boolean isShort(Class c) {
		return c.getName().equals("short") || c.equals(Short.class);
	}
	
	public static boolean isInt(Class c) {
		return c.getName().equals("int") || c.equals(Integer.class);
	}
	
	public static boolean isLong(Class c) {
		return c.getName().equals("long") || c.equals(Long.class);
	}
	
	public static boolean isFloat(Class c) {
		return c.getName().equals("float") || c.equals(Float.class);
	}
	
	public static boolean isDouble(Class c) {
		return c.getName().equals("double") || c.equals(Double.class);
	}
	
	public static boolean isNumber(Class c) {
		return Number.class.isAssignableFrom(c)
				|| c.getName().equals("byte")
				|| c.getName().equals("short")
				|| c.getName().equals("int")
				|| c.getName().equals("long")
				|| c.getName().equals("float")
				|| c.getName().equals("double");
	}
	
	/**
	 * Serialize all the public properties that are of the basic type,
	 * which includes String, Number, Boolean and Character
	 * @param Object o
	 * @return the serialized JsonObject
	 */
	public static JsonObject getBasicSerialization(Object o) {
		try {
			JsonObject j = new JsonObject();
			for (Field f : o.getClass().getFields()) {
				if (!excludedFields.contains(f.getName())) {
					if (isString(f.getType())) {
						j.addProperty(f.getName(), (String) f.get(o));
					} else if (isNumber(f.getType())) {
						j.addProperty(f.getName(), (Number) f.get(o));
					} else if (isCharacter(f.getType())) {
						j.addProperty(f.getName(), (Character) f.get(o));
					} else if (isBoolean(f.getType())) {
						j.addProperty(f.getName(), (Boolean) f.get(o));
					}
				}
			}
			return j;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	public static Object getBasicDeserialization(Object o, JsonObject j) {
		try {
			for (Field f : o.getClass().getFields()) {
				String fieldName = f.getName();
				Class fieldType = f.getType();
				JsonElement val = j.get(fieldName);
				
				if (!excludedFields.contains(fieldName) && val != null && !val.isJsonNull()) {
					if (isString(fieldType)) {
						f.set(o, val.getAsString());
					} else if (isByte(fieldType)) {
						f.set(o, val.getAsNumber().byteValue());
					} else if (isShort(fieldType)) {
						f.set(o, val.getAsNumber().shortValue());
					} else if (isInt(fieldType)) {
						f.set(o, val.getAsNumber().intValue());
					} else if (isLong(fieldType)) {
						f.set(o, val.getAsNumber().longValue());
					} else if (isFloat(fieldType)) {
						f.set(o, val.getAsNumber().floatValue());
					} else if (isDouble(fieldType)) {
						f.set(o, val.getAsNumber().doubleValue());
					} else if (isCharacter(fieldType)) {
						f.set(o, val.getAsCharacter());
					} else if (isBoolean(fieldType)) {
						f.set(o, val.getAsBoolean());
					}
				}
			}
			return o;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	//TODO: Write a generalized serializer + deserializer for model classes
}
