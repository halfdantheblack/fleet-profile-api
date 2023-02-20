import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
const app = express();
const jwt = require('jsonwebtoken');
import jwt_decode from "jwt-decode";
app.use(bodyParser.json());
app.post('/', function (req: Request, res: Response) {
    let username: string = req.body.username
    let password: string = req.body.password
    if (username == 'finny' && password == '123') {

        let token: String = jwt.sign({ username }, 'secret', { expiresIn: '60s' });
        res.send({ token: token })

    } else {
        res.send("failed")
    }
})
app.post('/verifyToken',async function (req: Request, res: Response) {
    let check = await authorize(req.body.token)
    res.send(check)
})
app.get("/get", function (req: Request, res: Response) {

})
function authorize(token: string){
    var decoded:any = jwt_decode(token);
    if(decoded.username=='finny'){
        return ("USER AUTHORIZED")
    }else{
        return ('USER UNAUTHORIZED')
    }
}
app.listen(3000, () => console.log(`server running on portss`));
