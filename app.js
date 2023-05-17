import express from "express"
import storeRouter from "./routes/storeRoutes.js"
import { globalErrorHandler } from "./controller/errorController.js"

const app = express()

app.use(express.json())

app.use('/api/v1/products', storeRouter)

app.all('*', (req, res) => {
    res.status(404).json({
        status: 'failed',
        message: `Couldn't find ${req.originalUrl} on server!!`
    })
})

app.use(globalErrorHandler)

export default app