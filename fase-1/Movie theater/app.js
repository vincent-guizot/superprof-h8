const Controller = require("./controllers/controller.js");

// Good luck and happy coding ...

const command = process.argv[2];
const params = process.argv.slice(3);

switch (command) {
  case "help":
    Controller.help();
    break;
  case "theaterList":
    Controller.theaterList();
    break;
  case "customerList":
    Controller.customerList();
    break;
  case "checkSeat":
    Controller.checkSeat(params);
    break;
  case "buyTicket":
    Controller.buyTicket(params);
    break;
  case "ticketInfo":
    Controller.ticketInfo(params);
    break;
  default:
    if (command === undefined || command === "") Controller.help();
    else Controller.message();
}
