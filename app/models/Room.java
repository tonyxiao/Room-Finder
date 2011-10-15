package models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;

import play.db.jpa.Model;

@Entity
public class Room extends Model {
	
	public String room_number;
	
	public String building;
	
	public String room_type;
	
	public String image;
	
	public String admin;
	
	public String day_start;
	
	public String day_end;
	
	public int capacity;
	
	@OneToMany(cascade=CascadeType.ALL, orphanRemoval=true, mappedBy="room")
	public List<Booking> bookings;
	
}
