const { Theater, Customer, Regular, IMAX, Premiere } = require("./class.js");
const fs = require("fs");
// Tambahkan parameter sesuai kebutuhanmu

class Model {
  // PART 1
  static readTheater(cb) {
    fs.readFile("./data/theaters.json", "utf8", (err, data) => {
      if (err) cb(err, null);
      else {
        let theaters = JSON.parse(data);
        theaters = theaters.map((theater) => {
          const { id, name, movie } = theater;
          return new Theater(id, name, movie);
        });

        cb(null, theaters);
      }
    });
  }
  static readCustomer(cb) {
    fs.readFile("./data/customers.json", "utf8", (err, data) => {
      if (err) cb(err, null);
      else {
        let customers = JSON.parse(data);
        customers = customers.map((customer) => {
          const { id, name, gender, ticket } = customer;
          const { theaterName, type, movie, seatNumber } = ticket;
          return new Customer(
            id,
            name,
            gender,
            theaterName,
            type,
            movie,
            seatNumber
          );
        });

        cb(null, customers);
      }
    });
  }
  static checkSeat(id, cb) {
    let result = {};
    this.readTheater((err, theaters) => {
      if (!err) {
        result = theaters.find((theater) => theater.id === id);
        this.readCustomer((err, customers) => {
          if (!err) {
            customers.forEach((customer) => {
              if (customer.ticket.movie === result.movie) {
                result.customers.push(customer);
              }
            });
            cb(null, result);
          } else {
            cb(err, null);
          }
        });
      } else {
        cb(err, null);
      }
    });
  }

  // PART 2
  static save(data, pathFile, cb) {
    // note jika ingin diganti atau mau menambahkan method boleh untuk method save ini
    // yang digunakan untuk writeFile
  }
  static addCustomer() {
    // buyTicket
  }
  static findCustomer() {
    // ticketInfo
  }
  static updateTicket() {}
  static deleteTicket() {}
  static showCustomerByTheater() {
    // showCustomer
  }
}

module.exports = Model;
