import express from "express"
import { 
    createProduct, 
    deleteProduct, 
    getAllProducts, 
    getProductById, 
    updateProduct 
} from "../controller/storeController.js"

const router = express.Router()

router.route('/')
    .get(getAllProducts)
    .post(createProduct)

router.route('/:id')
    .get(getProductById)
    .patch(updateProduct)
    .delete(deleteProduct)

export default router