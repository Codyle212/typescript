import { faker } from '@faker-js/faker';

export class Company {
    name: string;
    catchPhrase: string;
    location: {
        latitude: number;
        longitude: number;
    };
    constructor() {
        this.name = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            latitude: parseFloat(faker.address.latitude()),
            longitude: parseFloat(faker.address.longitude()),
        };
    }
}
