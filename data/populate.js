import dotenv from "dotenv"
dotenv.config()

import fs from "fs"
import mongoose from "mongoose"
import Product from "../models/productModel.js"

const data = JSON.parse(fs.readFileSync('./data/data.json', 'utf-8'))

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        await Product.deleteMany({})
        console.log('Products deleted successfully')
        const products = await Product.create(data)
        console.log(products)
        console.log('Products created successfully')
        process.exit(0)
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

start()