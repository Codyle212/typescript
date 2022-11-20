// import { UserEdit } from './views/UserEdit';
import { User, UserProps } from './models/User';
import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
// const user = User.buildUser({ name: 'John', age: 56 });
// const userEdit = new UserEdit(root, user);
// userEdit.render();
const rootUrl = 'http://localhost:3000/users';
const users = new Collection<User, UserProps>(
    rootUrl,
    (json: UserProps): User => {
        return User.buildUser(json);
    }
);

users.on('change', () => {
    const root = document.getElementById('root');
    if (root) {
        new UserList(root, users).render();
    } else {
        throw new Error('Root Element not found');
    }
});

users.fetch();
