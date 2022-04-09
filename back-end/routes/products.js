import express from "express"
import { createProduct, deleteProduct, listProduct, listProductDetail, updateProduct } from "../controllers/products";
import { userById } from "../controllers/user";
import { checkAuth, isAdmin, isAuth, requiredSignin } from "../middlewares/checkAuth";
const router = express.Router();


router.get('/products',listProduct)
router.get('/products/:id',listProductDetail)
router.post('/products/:userId',requiredSignin, isAuth, isAdmin, createProduct)
router.delete('/products/:id',deleteProduct)
router.put('/products/:id',updateProduct)

router.param("userId",userById)

export default router;