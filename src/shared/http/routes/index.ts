import { Router } from "express";
import logging from "@shared/config/logging";
import {usersRouter} from "@modules/user/http/routes/users.routes";
import {sessionsRouter} from "@modules/user/http/routes/sessions.routes";
import { productsRouter } from "@modules/product/http/routes/products.routes";
import { ordersRouter } from "@modules/order/http/routes/orders.routes";

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
routes.use('/products', productsRouter);
routes.use('/orders', ordersRouter);

export default routes;