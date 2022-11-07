interface Vehicle {
    name: string;
    year: Date;
    broken: boolean;
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}\nYear: ${this.year}\nBroken?: ${this.broken}`;
    },
};
//use interface instead of the following lond definition
// vehicle: {
//     name: string;
//     year: number;
//     broken: boolean;
// }
const printVehicle = (vehicle: Vehicle): void => {
    console.log(vehicle.summary());
};

printVehicle(oldCivic);
