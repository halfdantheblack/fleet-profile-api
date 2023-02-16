import { config } from "dotenv";
export const configEnvs =()=>{
    config({path:`.env.${process.env.PLATFORM}`})
}