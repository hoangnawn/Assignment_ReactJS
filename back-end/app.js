import express from 'express'
import mongoose from 'mongoose';
import productRoute from "./routes/products"
import categoryRoute from './routes/category'
import orderRoute from './routes/order'
import authRoute from './routes/auth'
import { checkAuth } from './middlewares/checkAuth';
const app = express();
import cors from 'cors'


app.use(cors())
app.use(express.json())
app.use("/api",checkAuth,productRoute);
app.use("/api",categoryRoute)
app.use("/api",orderRoute)
app.use("/api",authRoute)

mongoose.connect('mongodb://127.0.0.1:27017/nodejs');

// Bước 3: lắng nghe cổng thực thi
app.listen(8000, ()=>{
    console.log("Cổng 8000");
});