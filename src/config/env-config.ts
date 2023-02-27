import {config} from 'dotenv'
config({path:`.env.${process.env.PLATFORM}`})
export const envs = {
    port:process.env.PORT,
    mongoUri:process.env.MONGO_URL,
    jwtSecret:process.env.JWT_SECRET,
    jwtExpirationInterval: process.env.JWT_EXPIRATION_MINUTES 
}