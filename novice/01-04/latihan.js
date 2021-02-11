class Vehicle {
    constructor(state, automatic) {
        this.state = state;
        this.automatic = automatic;
    };

    startEngine() {
        this.state = true;
        return 'Engine is started'
    };

    shutEngine() {
        this.state = false;
        return 'Engine is stopped'
    };

    startDrive() {
        return "start driving 1km forward";
    };

    stopDrive() {
        return "vehicle stopped";
    }
};

// let vehicle = new Vehicle(true, true, 0);
// console.log(vehicle.startDrive());

class Car extends Vehicle {
    constructor(state, automatic, brand, wheels, doors, steer) {
        super(state, automatic);
        this.brand = brand;
        this.wheels = wheels;
        this.doors = doors;
        this.steer = steer;
    };

    openDoor() {
        return "Opening door";
    };

    closeDoor() {
        return "Closing door";
    };
};

// let car = new Car(true, false, "Ford", 4, 4, "Left");
// console.log(car.startEngine());
// console.log(car.openDoor());

class MotorCycle extends Vehicle {
    constructor(state, automatic, brand, wheels) {
        super(state, automatic);
        this.brand = brand;
        this.wheels = wheels;
    };
};

let motorCycle = new MotorCycle(false, true, "Honda", 2);
console.log(motorCycle.shutEngine());