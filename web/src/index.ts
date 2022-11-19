import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user = User.buildUser({ name: 'John', age: 56 });
const root = document.getElementById('root');
if (root) {
    const userForm = new UserForm(root, user);
    userForm.render();
}
