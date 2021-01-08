import express from 'express';
import morgan from 'morgan';
import helmet from "helmet";
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
import globalRouter from './routers/globalRouter';
import routes from './routers/routes';
import { localsMiddleware } from './middlewares';
const app = express();

app.use(function(req, res, next) {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://archive.org");
    next();
});
app.set("view engine", "pug")
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use*(bodyParser.urlencoded( {extended:true}));
app.use(localsMiddleware)

//router
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;