import express, { Request, Response, Application, NextFunction } from 'express';
import 'express-async-errors';
import { errors } from 'celebrate';
import config from '@shared/config/config';
import logging from '@shared/config/logging';
import routes from '@shared/http/routes/index';
import mongoose from 'mongoose';

const NAMESPACE = 'Server';

logging.info('Mongo URL',config.mongo.url);
mongoose.connect(config.mongo.url, config.mongo.options)
    .then((result) => {
        logging.info(NAMESPACE, 'Mongo Connected');
    })
    .catch((error) => {
        logging.error(NAMESPACE, error.message, error);
    });

const app:Application = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(routes);
app.use(errors());

app.use((err: Error, request: Request, response: Response, next: NextFunction ) =>{
    if(err instanceof Error){
        return response.status(400).json({
            error: err.message
        });
    }
    return response.status(500).json({
        status: "error",
        message: "Internal server Error"
    });
});

app.listen(PORT, ():void => {
    console.log(`Server Running here 👉 http://localhost:${PORT}`);
});