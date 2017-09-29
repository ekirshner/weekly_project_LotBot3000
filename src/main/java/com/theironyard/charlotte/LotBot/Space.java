package com.theironyard.charlotte.LotBot;

import java.util.Date;

public class Space {
  private Vehicle Vehicle;
  private Date timeIn;

  public Space(Vehicle Vehicle) {
    this.Vehicle = Vehicle;
  }

  public Space() {
  }

  public Vehicle getVehicle() {
    return Vehicle;
  }

  public void setVehicle(Vehicle vehicle) {
    this.Vehicle = vehicle;
  }
}
//Space
//		Vehicle: Vehicle
