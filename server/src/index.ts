import express from 'express';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/login.controller';
import './controllers/root.controller';
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['cookie'] }));

app.use(AppRouter.getInstance());
app.listen(3000, () => {
    console.log('listening on port 3000');
});
