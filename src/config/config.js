import 'dotenv/config'
import cors from 'cors';

module.exports = {
  cors: cors(),
  port: process.env.PORT
}