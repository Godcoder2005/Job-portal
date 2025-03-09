import mongoose from "mongoose";
import validator from "validator"

const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        require :[true, 'Name is requires']
    },
    lastname:{
        type:String,
    },
    email:{
        type:String,
        required :[true,'Email is require'],
        unique:true,
        validate : validator.isEmail
    },
    password:{
        type:String,
        required:[true,'Password is required']
    },
    location:{
        type:String,
        default:'India'
    },
},
    {timestamps:true}
);
export default mongoose.model('User', UserSchema)