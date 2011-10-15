package models;

import javax.persistence.Entity;

import play.db.jpa.Model;

@Entity
public class Room extends Model {
	
	public String room_number;
	
	public String building;
	
	public String image;
	
	public String admin;
	
	public String day_start;
	
	public String day_end;
	
	public int capacity;
	
	
	
}
