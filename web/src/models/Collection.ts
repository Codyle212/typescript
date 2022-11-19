import { User } from './User';
import { Eventing } from './Eventing';

export class Collection {
    model: User[];
    events: Eventing = new Eventing();

    get on() {
        return this.events.on;
    }
}