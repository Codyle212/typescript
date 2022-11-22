import { Request, Response, NextFunction } from 'express';
import { get, controller, use } from './decorators';

function requireAuth(req: Request, res: Response, next: NextFunction): void {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }

    res.status(403).send('Not permmited');
}
@controller('')
class RootController {
    @get('/')
    getRoot(req: Request, res: Response) {
        if (req.session && req.session.loggedIn) {
            res.status(200).send(`
            <div>
                <div>You are logged in</div>
                <a href="./logout">Log out</a>
            </div>
        `);
        } else {
            res.status(401).send(`
            <div>
                <div>You are not logged in</div>
                <a href="./login">Log In</a>
            </div>
        `);
        }
    }
    @get('/protected')
    @use(requireAuth)
    getProtected(req: Request, res: Response) {
        res.status(200).send('Welcome to protected route, logged in user');
    }
}
