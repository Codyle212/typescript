import { User } from './models/User';
//{ name: 'Amy', age: 25 }
const user = User.buildUser({ id: 1, name: 'Alice', age: 26 });

user.on('change', () => {
    console.log(user);
});

user.fetch();
