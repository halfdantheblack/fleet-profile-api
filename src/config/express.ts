import express,{Application} from 'express' ;
import bodyParser from 'body-parser';
import { route } from '../api/routes';
import { ErrorHandler,ConvertError,NotFound } from '../middleware/error';

export const app :Application = express();


app.use(bodyParser.json())
app.use(route)
app.use(ConvertError);
app.use(NotFound);
app.use(ErrorHandler);


