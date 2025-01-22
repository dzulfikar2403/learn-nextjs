"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const ImageSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const Images = [
    {img: "/images/burger.jpg",alt: "burger-logo"},
    {img: "/images/curry.jpg",alt: "curry-logo"},
    {img: "/images/dumplings.jpg",alt: "dumplings-logo"},
    {img: "/images/pizza.jpg",alt: "pizza-logo"},
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => prev < Images.length - 1 ? prev + 1 : 0)      
    }, 5000);

    () => clearInterval(interval)
  },[])

  return (
    <div className='relative overflow-hidden rounded-lg w-full h-full flex'>
      {Images.map((el,i) => (
        <Image
          key={i} 
          src={el.img}
          width={100}
          height={100}
          className={currentIndex === i ? "w-full h-full absolute z-1 object-cover opacity-1 transition-all ease-in-out duration-500 " : "opacity-0"}
          alt={el.img}
        />
      ))}
    </div>
  )
}

export default ImageSlide