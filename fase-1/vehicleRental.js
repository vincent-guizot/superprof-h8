// The 4 pillars of OOP

/**
 * 1. Inheritance
 * 2. Polymorphism
 * 3. Encapsulation
 * 4. Abstraction
 */

class Vehicle {
  // Release 0
  constructor(
    brand,
    model,
    price,
    condition,
    age,
    customers,
    totalRentDays,
    totalRentCost
  ) {
    this.brand = brand || "";
    this.model = model || "";
    this.price = price || 0;
    this._condition = condition || 100;
    /* _condition artinya private property */
    // truthy-truthy pasti ambil sisi kiri dari truthy
    // falsy-falsy pasti ambil sisi kanan dari falsy
    this.age = age || 0;
    this.customers = customers || [];
    this.totalRentDays = totalRentDays || 0;
    this.totalRentCost = totalRentCost || 0;
  }

  condition() {
    return this._condition;
  }

  setCondition(condition) {
    this._condition = condition;
  }

  // Release 1
  increasingAge() {
    if (this._condition > 0) {
      this.age += 1;
      let randomNumber = Math.ceil(Math.random() * 30);
      this._condition -= randomNumber;
      if (this._condition < 0) this._condition = 0;
      //   console.log(this._condition);
    } else {
      this._condition = 0;
      //   console.log("Tidak bisa menjalankan method");
    }
  }

  // Release 3
  rent() {
    let random = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
    if (this._condition > 0) {
      while (random > 0) {
        this.customers.push(new Customer());
        random--;
      }
    }
  }

  // Release 4
  calculate() {
    this.totalRentCost = this.customers.length * this.price;
    this.totalRentDays = this.customers.length;
  }
  report() {
    let review = this.getRatings();
    return `Total rent days : ${this.totalRentDays} Total rent cost: ${this.totalRentCost} Reviews: ${this.customers.length} (${review.good} good, ${review.bad} bad)`;
  }
  resetReport() {
    this.customers = [];
    this.totalRentCost = 0;
    this.totalRentDays = 0;
  }
  getRatings() {
    let totalGood = 0;
    let totalBad = 0;
    this.customers.forEach((customer) => {
      if (customer.review === "good") totalGood++;
      else if (customer.review === "bad") totalBad++;
    });
    return {
      good: totalGood,
      bad: totalBad,
    };
  }
}

// Release 2
class Customer {
  constructor() {
    this.review = this.getReview();
  }
  getReview() {
    let score = Math.floor(Math.random() * 3);
    if (score === 0) {
      return "bad";
    } else {
      return "good";
    }
  }
}

let vehicle = new Vehicle("Toyota", "Camry", 200_000);

// Release 5

do {
  vehicle.increasingAge();
  vehicle.rent();
  vehicle.calculate();
  console.log(
    `Age ${
      vehicle.age
    } Report | Condition = ${vehicle.condition()}% | ${vehicle.report()}`
  );
  vehicle.resetReport();
} while (vehicle.condition() > 0);

// Release 6

class Car extends Vehicle {
  constructor(
    brand,
    model,
    price,
    condition,
    age,
    customers,
    totalRentDays,
    totalRentCost
  ) {
    super(
      brand,
      model,
      price,
      condition,
      age,
      customers,
      totalRentCost,
      totalRentDays
    );
  }
}

class MotorCycle extends Vehicle {
  constructor(
    brand,
    model,
    price,
    condition,
    age,
    customers,
    totalRentDays,
    totalRentCost
  ) {
    super(
      brand,
      model,
      price,
      condition,
      age,
      customers,
      totalRentCost,
      totalRentDays
    );
  }
}
// Release 7
