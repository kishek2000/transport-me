import React from "react";
import { UserTrips, DefinedTrips } from "../constants";

export class User {
  constructor() {
    this.savedTrips = [];
    this.tripHistory = [];
  }

  addTrip(id) {
    this.savedTrips.push(TripFacade.get(id));
  }

  getSavedTrips() {
    return this.savedTrips;
  }

  deleteTrip(id) {
    this.savedTrips = this.savedTrips.filter((trips) => {
      return trips.id !== id;
    });
  }

  addToTripHistory(id) {
    const today = new Date();
    this.tripHistory.push({ trip: TripFacade.get(id), date: today });
  }
}

export class TripFacade {
  static get(id) {
    return DefinedTrips.find((trip) => trip.id === id);
  }
}
