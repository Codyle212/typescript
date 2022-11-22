import { Request, Response, NextFunction } from 'express';
import { get, controller, post, bodyValidator } from './decorators';

@controller('/auth')
class LoginController {
    @get('/login')
    getLogin(req: Request, res: Response): void {
        res.status(200).send(`
        <form method="POST">
            <div>
                <label>Email</label>
                <input name="email" type="email">
            </div>
            <div>
                <label>Password</label>
                <input name="password" type="password">
            </div>
            <button>Submit</button>
        </form>
    `);
    }
    @post('/login')
    @bodyValidator('email', 'password')
    postLogin(req: Request, res: Response) {
        const { email, password } = req.body;
        if (
            email &&
            password &&
            email === 'admin@example.com' &&
            password === 'password'
        ) {
            req.session = { loggedIn: true };
            res.status(302).redirect('/');
        } else {
            res.send('Invalid email or password');
        }
    }
    @get('/logout')
    getLogout(req: Request, res: Response) {
        req.session = undefined;
        res.status(302).redirect('/');
    }
}
