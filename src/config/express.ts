import express,{Application} from 'express' ;
import bodyParser from 'body-parser';
import { route } from '../api/routes';

export const app :Application = express();


app.use(bodyParser.json())
app.use(route)


