import mongoose, { Connection } from "mongoose";
import { envs } from "./env-config";
mongoose.Promise = global.Promise;

mongoose.set("strictQuery", false);
// mongoose.set('debug', env === 'development');

mongoose.connection.on('error', (err) => {
    console.log("DB Connection err");
    console.log(err);
    
    
});

mongoose.connection.on('connected', () => {
    console.log("DB connected");
    
});
export const Connect = ()=>{
    if(envs.mongoUri)
    {
        mongoose.connect(envs.mongoUri.toString())
        return mongoose.Connection
    }   
    return null
}