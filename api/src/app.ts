import { defaultCipherList } from 'constants';
import express from 'express';
import config from './config';
import cors from 'cors'; // to describe which servers are allow to request something
import videoRoutes from './routes/routes';
import morgan from 'morgan'


// TO CONNECT TO EXPRESS
const app = express();

// TO ESTABLISH A PORT VAR, SET THE VALUE PORT OF: 3000 AND EXPORT IT
//TO DEFINE THE PORT FROM .env to make our code more robust
app.set('port', config.PORT);
//morgan to display the GET and POST method in the console
app.use(morgan('dev'));
app.use(cors()); // WE ALLOW HERE TO MAKE REQUEST TO ALL THE SERVERS
app.use(express.json()); // to support the server to under json objects coming from POST methos for example
app.use(express.urlencoded({extended: false})); // to suppor data cominf from forms
app.use(videoRoutes);

export default app;