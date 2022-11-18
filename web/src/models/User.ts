import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
const rootUrl = 'http://localhost:3000/users';
export interface UserProps {
    //can have name or age
    id?: number;
    name?: string;
    age?: number;
}
export class User {
    public events: Eventing = new Eventing();
    public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
    public attributes: Attributes<UserProps>;
    constructor(attrs: UserProps) {
        this.attributes = new Attributes<UserProps>(attrs);
    }

    get on() {
        //get back a reference to the on function in eventing
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    get get() {
        return this.events.get;
    }
}
