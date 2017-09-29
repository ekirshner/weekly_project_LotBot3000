package com.theironyard.charlotte.LotBot;

import java.util.Date;

public class Transaction {
  private Vehicle Vehicle;
  private Date checkedInDate;
  private Date checkedOutDate;
  private double price;

  public Vehicle getVehicle() {
    return Vehicle;
  }

  public void setVehicle(Vehicle vehicle) {
    this.Vehicle = vehicle;
  }

  public Date getCheckedInDate() {
    return checkedInDate;
  }

  public void setCheckedInDate(Date checkedInDate) {
    this.checkedInDate = checkedInDate;
  }

  public Date getCheckedOutDate() {
    return checkedOutDate;
  }

  public void setCheckedOutDate(Date checkedOutDate) {
    this.checkedOutDate = checkedOutDate;
  }

  public double getPrice() {
    return price;
  }

  public void setPrice(double price) {
    this.price = price;
  }

  public Transaction() {

  }

  public Transaction(Vehicle Vehicle, Date checkedInDate, Date checkedOutDate, double price) {

    this.Vehicle = Vehicle;
    this.checkedInDate = checkedInDate;
    this.checkedOutDate = checkedOutDate;
    this.price = price;
  }
}
//Transaction
//		Vehicle: Vehicle
//		checkedInDate: Date
//		checkedOutDate: Date
//		price: double
