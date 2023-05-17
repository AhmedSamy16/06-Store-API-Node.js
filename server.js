import dotenv from "dotenv"
dotenv.config()

import mongoose from "mongoose";
import app from "./app.js";

mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('DB connection successfully')
    })

const PORT = process.env.PORT
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

process.on('unhandledRejection', (err) => {
    console.log(err.name, err.message)
    console.log('Server is down....')
    server.close(() => {
        process.exit(1)
    })
})