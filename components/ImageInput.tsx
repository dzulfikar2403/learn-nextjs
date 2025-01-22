"use client"
import Image from 'next/image';
import React, { useRef, useState } from 'react'

type ImageInputProps = {
  name:string
}

const ImageInput = ({name}:ImageInputProps) => {
  const [pickedImage, setPickedImage] = useState<null | string>(null)
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleInputFile = () => {
    inputFileRef.current?.click()
  }

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];

    if(!file){
      setPickedImage(null)
      return
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result as string)
    }

    fileReader.readAsDataURL(file)
  }

  return (
    <div className='flex gap-4 items-center flex-col-reverse py-4'>
      <div className='relative w-40 h-40 border-2 rounded flex justify-center items-center overflow-hidden'>
      {pickedImage ? <Image src={pickedImage as string} alt='user picked image.' fill className='object-cover object-center' /> : <p className='text-sm'>No image picked yet.</p> }
      </div>
      <input type="file" ref={inputFileRef} accept='image/png, image/jpeg' className='hidden' name={name} required onChange={handleImageChange}/>
      <button type='button' onClick={handleInputFile} className='px-4 bg-slate-500 rounded-sm'>Choose Image</button>
    </div>
  )
}

export default ImageInput