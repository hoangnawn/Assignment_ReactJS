import mongoose, {ObjectId} from "mongoose";

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
},{timestamps:true})

export default mongoose.model('Category',categorySchema);