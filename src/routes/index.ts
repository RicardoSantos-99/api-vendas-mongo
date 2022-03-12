import { Router } from "express";
import logging from "../config/logging";
import {usersRouter} from "./users.routes";
import {sessionsRouter} from "./sessions.routes";

const routes = Router();

/** Log the request */
routes.use((req, res, next) => {
    /** Log the req */
    logging.info(`METHOD: [${req.method}]`, `URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        /** Log the res */
        logging.info(`METHOD: [${req.method}]`,`URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    })
    
    next();
});

/** Rules of our API */
routes.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

routes.use('/usuarios', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;