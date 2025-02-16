
import {v2 as cloudinary} from "cloudinary"

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function uploadImage(image:File){

    const arrayBufferImg = await image.arrayBuffer();  
    const base64BufferImgString = Buffer.from(arrayBufferImg).toString('base64');
    const imageType = image.type;
    const dataUrl = `data:${imageType};base64,${base64BufferImgString}`;
    
    const result = await cloudinary.uploader.upload(dataUrl,{
      public_id: `${image.name.slice(0,-5)}_${Date.now()}`,
      folder: 'feed-course',
      eager: [{width: 500,fetch_format:"auto",quality: "auto",crop: "fill"}]
    })
    
    return result.eager[0].secure_url; 
}