class View {
  static showCommandList() {
    console.log("node app.js");
    console.log("node app.js help");
    console.log("node app.js theaterList");
    console.log("node app.js customerList");
    console.log("node app.js checkSeat <id_theater>");
    console.log(
      "node app.js buyTicket <id_theater> <nama_penonton> <gender_penonton> <seat_number> <tipe_ticket>"
    );
    console.log("node app.js ticketInfo <id_penonton");
  }
  static theaterShow(data) {
    console.table(data);
  }
  static customerShow(data) {
    console.log(data);
  }
  static showSeats(data) {
    console.log(data);
  }
  // Tambahkan sendiri method yang kamu butuhkan
  static messsage(msg) {
    console.log(msg);
  }
  static error(err) {
    console.error(err);
  }
}

module.exports = View;
