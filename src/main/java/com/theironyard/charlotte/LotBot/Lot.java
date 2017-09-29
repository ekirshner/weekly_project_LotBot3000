package com.theironyard.charlotte.LotBot;

public class Lot {
  private int id;
  private Space[] spaces;
  private double price;

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public Space[] getSpaces() {
    return spaces;
  }

  public void setSpaces(Space[] spaces) {
    this.spaces = spaces;
  }

  public Lot() {

  }

  public Lot(int id, Space[] spaces) {
    this.id = id;
    this.spaces = spaces;
  }
}
//Lot
//		id: int
//		spaces: Space[]
