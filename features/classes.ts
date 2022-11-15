class Vehicle {
    constructor(public color: string) {}
    protected honk(): void {
        console.log('beep');
    }
}

class Car extends Vehicle {
    constructor(public wheel: number, color: string) {
        super(color);
    }
    //override the abstract class by redefining the function
    private drive(): void {
        console.log('vroom');
    }
    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const carA = new Car(4, 'red');
carA.startDrivingProcess();

const vehicle = new Vehicle('white');
