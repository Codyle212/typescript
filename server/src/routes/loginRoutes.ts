import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
    body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }

    res.status(403).send('Not permmited');
}

const router = Router();

router.get('/login', (req: Request, res: Response) => {
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
});

router.post('/login', (req: RequestWithBody, res: Response) => {
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
});

router.get('/', (req: Request, res: Response) => {
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
});

router.get('/logout', (req: Request, res: Response) => {
    req.session = undefined;
    res.status(302).redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
    res.status(200).send('Welcome to protected route, logged in user');
});

export { router };
