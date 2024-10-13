const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
        },
        fullName:{
            type:String,
            required:true,
            trim:true,
            index:true
        },
        avatar:{
            type:String, // cloudinary url
            required:true
        },
        coverImage:{
            type:String
        },
        watchHistory:[
            {
                type:Schema.Types.ObjectId,
                ref:"Video",
                timestamp:{
                    type:Date,
                    required:true
                }
            }
        ],
        password:{
            type:String,
            required:[true,"Password is Required"],
            select:false
        },
        refreshToken:{
            type:String,
            select:false
        }
    },{ timestamps:true }
)

userSchema.pre("save",async function (next){
    if(!this.isModified("password")){
        return next();
    }
    this.password = await bcrypt.hashSync(this.password,10);
    next();
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function () {
    return jwt.sign({
        id:this._id,
        username:this.username,
        email:this.email,
        fullName:this.fullName,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    });
}

userSchema.methods.generateRefreshToken = function () {
    return jwt.sign({
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    },
    process.env.JWT_SECRET_REFRESH,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    });
}

userSchema.methods.updateRefreshToken = async function (refreshToken) {
    this.refreshToken = refreshToken;
    await this.save();
}
module.exports = mongoose.model("User",userSchema);