import axios, { AxiosResponse } from 'axios';

interface UserProps {
    //can have name or age
    id?: number;
    name?: string;
    age?: number;
}

type GetUserReturn = string | number | undefined;
const BACKEND_URL = 'http://localhost:3000';

export class User {
    //each type of events have an array of callbacks
    constructor(private data: UserProps) {}
    get(propName: string): GetUserReturn {
        return this.data[propName as keyof UserProps];
    }
    set(update: UserProps): void {
        //assign all properties of update to data of this user overrides the first
        this.data = { ...this.data, ...update };
    }

    fetch(): void {
        axios
            .get(`${BACKEND_URL}/users/${this.get('id')}`)
            .then((response: AxiosResponse): void => {
                this.set(response.data);
            });
    }

    save(): void {
        const id = this.get('id');
        if (id) {
            axios.put(`${BACKEND_URL}/users/${id}`, this.data);
        } else {
            axios.post(`${BACKEND_URL}/users`, this.data);
        }
    }
}
