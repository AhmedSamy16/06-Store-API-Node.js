import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product's name is required"],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, "Product's price is required"]
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.5
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: 'Company Not found'
        }
    }
})

const Product = mongoose.model('Product', productSchema)

export default Product