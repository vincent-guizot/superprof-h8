const Model = require("../models/model");
const View = require("../views/view");

// Tambahkan parameter sesuai kebutuhanmu

class Controller {
  // PART 1
  static help() {
    View.showCommandList();
  }
  static theaterList() {
    Model.readTheater((err, data) => {
      if (!err) {
        View.theaterShow(data);
      } else {
        View.error(err);
      }
    });
  }
  static customerList() {
    Model.readCustomer((err, data) => {
      if (!err) {
        View.customerShow(data);
      } else {
        View.error(err);
      }
    });
  }
  static checkSeat(params) {
    const id = +params[0];
    Model.checkSeat(id, (err, data) => {
      if (!err) {
        View.showSeats(data);
      } else {
        View.error(err);
      }
    });
  }

  // PART 2
  static buyTicket() {}
  static ticketInfo() {}
  static changeTicket() {}
  static cancelTicket() {}
  static showCustomer() {}
}

module.exports = Controller;
