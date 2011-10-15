package models;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

import play.db.jpa.Model;

@Entity
public class Booking extends Model {
	
	public String title;
	
	public String contact_name;
	
	public String contact_email;
	
	public String start;
	
	public String end;
	
	public boolean approved;
	
	@ManyToOne
	public Room room;
	
}
