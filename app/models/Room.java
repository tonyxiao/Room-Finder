package models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;

import play.db.jpa.JPA;
import play.db.jpa.Model;

@Entity
public class Room extends Model {
	
	public String room_number;
	
	public String building;
	
	public String room_type;
	
	public String image;
	
	public String admin;
	
	public String description;
	
	public int capacity;
	
	@OneToMany(cascade=CascadeType.ALL, mappedBy="room")
	public List<Booking> bookings;
	
	public Room delete() {
    	JPA.em().createNativeQuery("Delete from Booking where room_id = :id")
    	.setParameter("id", this).executeUpdate();
		return super.delete();

	}
}
