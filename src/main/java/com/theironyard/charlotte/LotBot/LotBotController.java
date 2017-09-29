package com.theironyard.charlotte.LotBot;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class LotBotController {
  List<Lot> parkingLots = new ArrayList<>();
  List<Space> lotSpaces = new ArrayList<>();


  //  GET   /lots         Get a list of all lots in the system, including # of spots.
  @CrossOrigin
  @RequestMapping(path = "/lots", method = RequestMethod.GET)
  private List<Lot> getAllLots(){
    return parkingLots;
  }


  //  GET   /lots/<id>    Get a list of the status of all spots in the specified lot,
  //                      including the license plate # of anyone parked.
  @CrossOrigin
  @RequestMapping(path = "/lots/{id}", method = RequestMethod.GET)
  private List<Space> getSpaces(@PathVariable("id") int id){
    return lotSpaces;
  }

  //  POST  /lots/<id>    Park a new car in the specified lot. Must send the Vehicle object
  //                      in the request body.





}

//  The API
//  There are two key concepts that the entire Lot Bot system is based on: lots and cars. The API should support the following operations, and all should use JSON for encoding request and response bodies.
//
//

//Method  URL           Description





//  PUT   /lots/<id>/<spot>  Open up the specified spot and return the total owed.

//  GET   /transactions      Return a list of all transactions, along with the bill and
//                           license plate number of the charged vehicle.
