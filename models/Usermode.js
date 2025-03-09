import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

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
UserSchema.pre('save',async function(){
    const salt = await  bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
})
export default mongoose.model('User', UserSchema)