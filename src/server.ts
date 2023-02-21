import http from 'http'
import {app,envs} from './config'
import { Connect } from './config/mongoose'
const server = http.createServer(app)
server.listen(envs.port)
server.on('listening', () => {
    Connect()
    // RedisClient().connect();
  });
