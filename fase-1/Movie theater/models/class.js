// Create all class for instantiate here
class Theater {
  constructor(id, name, movie, customers = []) {
    this.id = id;
    this.name = name;
    this.movie = movie;
    this.customers = customers;
  }
}

class Customer {
  constructor(id, name, gender, theaterName, type, movie, seatNumber) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.ticket = this.getTicket(theaterName, type, movie, seatNumber);
  }
  getTicket(theaterName, type, movie, seatNumber) {
    switch (type) {
      case "Regular":
        return new Regular(theaterName, movie, seatNumber);
      case "IMAX":
        return new IMAX(theaterName, movie, seatNumber);
      case "Premiere":
        return new Premiere(theaterName, movie, seatNumber);
    }
  }
}

class Ticket {
  #seatNumber;
  constructor(theaterName, type, movie, seatNumber) {
    this.theaterName = theaterName;
    this.type = type;
    this.movie = movie;
    this.#seatNumber = seatNumber;
  }
}

class Regular extends Ticket {
  constructor(theaterName, movie, seatNumber) {
    super(theaterName, "Regular", movie, seatNumber);
  }
}

class IMAX extends Ticket {
  constructor(theaterName, movie, seatNumber) {
    super(theaterName, "IMAX", movie, seatNumber);
  }
}

class Premiere extends Ticket {
  constructor(theaterName, movie, seatNumber) {
    super(theaterName, "Premiere", movie, seatNumber);
  }
}
// Hal yang perlu di pertimbangkan setelah membuat class sesuai requirement :
// - Composition & Aggregation
// - Factory Method

module.exports = {
  Theater,
  Customer,
};
