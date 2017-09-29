package com.theironyard.charlotte.LotBot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LotBotApplication {

	public static void main(String[] args) {
		SpringApplication.run(LotBotApplication.class, args);
	}
}


//	The backend
//	For this project, your API is going to be responsible for responding to every
// 	request in the table above, and maintaining the state of the parking lots.
// 	You’ll need the following models:
//
//	<>	Lot
//	<>	id: int
//	<>	spaces: Space[]
//	<>	Vehicle
//	<>	licensePlate: String
//	<>	Space
//	<>	car: Vehicle
//	<>	Transaction
//	<>	car: Vehicle
//	<>	checkedInDate: Date
//	<>	checkedOutDate: Date
//	<>	price: double
//
//		When a car parks in a space, you will need to set the “car” field for that space
// 		and create a “transaction” object. When a car leaves a space, you’ll find the
// 		transaction applicable to the car, set the checkedOutDate of the transaction.
// 		At this time, you’ll have to calculate how long the car spent in that space,
// 		and calculate the price that the person must pay, and free up the given space.
//
//		You will be given a list of lots to start with.



//		Hard mode
//		Come up with new features on your team and implement them.
