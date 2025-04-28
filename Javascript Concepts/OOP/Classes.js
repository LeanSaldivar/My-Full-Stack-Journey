class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayInfo = () => {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}

class Car extends Vehicle {
    constructor(make, model, year, color) {
        super(make, model, year);
        this.color = color;
    }
}