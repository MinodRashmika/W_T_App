import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv/config'

const app = express()
const PORT = process.env.PORT || 8070

app.use(cors())
app.use(bodyParser.json())

const URL = process.env.MONGO;

// connect to db

mongoose.connect(URL)
const con = mongoose.connection;
con.once('open', () => {
    console.log('connection is successful!')
});

app.listen(PORT, () => {
    console.log(`server is up and running on ${PORT}`)
})