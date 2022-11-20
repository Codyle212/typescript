import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const user = User.buildUser({ name: 'John', age: 56 });
const root = document.getElementById('root');
if (root) {
    const userEdit = new UserEdit(root, user);
    userEdit.render();
    // const userForm = new UserForm(userEdit.regions.userForm, user);
    // userForm.render();
    // const userShow = new UserShow(userEdit.regions.userShow, user);
    // userShow.render();
} else {
    throw new Error('Root Element not found');
}
