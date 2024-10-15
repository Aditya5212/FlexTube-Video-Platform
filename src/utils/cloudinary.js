// import { v2 as cloudinary } from 'cloudinary';
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const path = require('path');
const cloudinary = require('cloudinary').v2;
const fs = require('fs'); // File System

const uploadOnCloudinary = async(localFilePath)=>
    {
        // Configuration
        cloudinary.config({ 
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
            api_key: process.env.CLOUDINARY_API_KEY, 
            api_secret: process.env.CLOUDINARY_API_SECRET ,
            secure: true
        });

        try{
            if(!localFilePath) return null;
            const uploadResult = await cloudinary.uploader
            .upload(localFilePath, {
                resource_type:'auto'
            })
            .catch((error) => {
                console.log(error);
            });
            console.log("File is uploaded on cloudinary...!");
            console.log(uploadResult.url);
            console.log(uploadResult);
            return uploadResult;
        }catch{
            fs.unlinkSync(localFilePath); //remove the locally saved file on server
            console.error("Failed to upload file on cloudinary...!");
            return null;
        }
        // Optimize delivery by resizing and applying auto-format and auto-quality
        const optimizeUrl = cloudinary.url('Certificate', {
            fetch_format: 'auto',
            quality: 'auto'
        });
        
        console.log(optimizeUrl);

};

module.exports = uploadOnCloudinary;