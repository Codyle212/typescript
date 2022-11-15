interface Reportable {
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

const myDrink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My Drink is ${this.color}\nCarbonated?: ${this.carbonated}\nIt contains: ${this.sugar} of sugar`;
    },
};
//use interface instead of the following lond definition
// vehicle: {
//     name: string;
//     year: number;
//     broken: boolean;
// }
const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};

printSummary(oldCivic);
printSummary(myDrink);
