import asyncErrorHandler from "../Utils/asyncErrorHandler.js"
import Product from "../models/productModel.js"
import CustomError from "../Utils/CustomError.js"
import ApiFeatures from "../Utils/ApiFeatures.js"

export const getAllProducts = asyncErrorHandler(async (req, res, next) => {
    const query = new ApiFeatures(Product, req.query).filter().sort().limitFields().paginate()
    const products = await query.query
    res.status(200).json({
        status: 'success',
        count: products.length,
        data: { products }
    })
})

export const createProduct = asyncErrorHandler(async (req, res, next) => {
    const product = await Product.create(req.body)
    res.status(201).json({
        status: 'success',
        data: { product }
    })
})

export const getProductById = asyncErrorHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
        const err = new CustomError('Product not found', 404)
        return next(err)
    }
    res.status(200).json({
        status: 'success',
        data: { product }
    })
})

export const updateProduct = asyncErrorHandler(async (req, res, next) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    if (!product) {
        const err = new CustomError('Product not found', 404)
        return next(err)
    }
    res.status(200).json({
        status: 'success',
        data: { product }
    })
})

export const deleteProduct = asyncErrorHandler(async (req, res, next) => {
    const product = await Product.findByIdAndDelete(req.params.id)
    if (!product) {
        const err = new CustomError('Product not found', 404)
        return next(err)
    }
    res.status(204).json({
        status: 'success'
    })
})