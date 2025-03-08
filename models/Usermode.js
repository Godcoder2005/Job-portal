import mongoose from "mongoose";
import validator from "validator"

const UserSchema = new mongoose.schema({
    name: {
        type:String,
        require :[true, 'Name is requires']
    },
    lastname:{
        type:String,
    },
    email:{
        type:String,
        require:[true,'Email is require'],
        unique:true,
        validate : validator.isEmail
    },
    password:{
        type:String,
        require:[true,'Password is required']
    },
    location:{
        type:String,
        default:'India'
    },
},
    {timestamps:true}
);
export default mongoose.model('User', UserSchema)