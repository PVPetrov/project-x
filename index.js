import express from 'express'
import mongoose from 'mongoose'
import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import multer from 'multer'
import signale from './middlewares/logger'
import config from './config'
import router from './routes'
import errorHandler from './middlewares/errorHandler'

const app = express();

app.use(cors())
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(json())
app.use(urlencoded({extended: true}))
app.use('/', router)
app.use(errorHandler)

app.listen(config.port, () => {
    signale.success('Listening to port 3000');
    mongoose.connect('mongodb://localhost:27017/learning', {useNewUrlParser: true}, (err) => {
        if(!err) {
            signale.success('Connected to MongoDB');
        } else {
            signale.error(err.message);
        }
    });
})