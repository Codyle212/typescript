class Vehicle {
    color: string;
    constructor(color: string) {
        this.color = color;
    }
    protected honk(): void {
        console.log('beep');
    }
}

class Car extends Vehicle {
    //override the abstract class by redefining the function
    drive(): void {
        console.log('vroom');
    }
    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const carA = new Car('red');
carA.startDrivingProcess();

const vehicle = new Vehicle('white');
