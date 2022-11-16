import { User } from './models/User';
//{ name: 'Amy', age: 25 }
const user = new User({ name: 'Jack', age: 21 });

user.save();
