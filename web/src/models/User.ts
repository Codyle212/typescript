import { Model } from './Model';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';
import { Collection } from './Collection';

const rootUrl = 'http://localhost:3000/users';
export interface UserProps {
    //can have name or age
    id?: number;
    name?: string;
    age?: number;
}
export class User extends Model<UserProps> {
    static buildUser(attrs: UserProps): User {
        return new User(
            new Attributes<UserProps>(attrs),
            new Eventing(),
            new ApiSync<UserProps>(rootUrl)
        );
    }
    static buildUserCollection(): Collection<User, UserProps> {
        return new Collection<User, UserProps>(
            rootUrl,
            (json: UserProps) => User.buildUser(json)
            // equivelent to
            // (json: UserProps): User => {
            //     return User.buildUser(json);
            // }
        );
    }

    setRandomAge(): void {
        const age = Math.round(Math.random() * 100);
        this.set({ age });
    }
}
