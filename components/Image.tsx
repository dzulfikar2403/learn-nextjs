"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type ImageType = {
  src: string;
  alt: string;
};

const ImageBase = ({ src, alt }: ImageType) => {
  const [open, setOpen] = useState(false);
  const refModal = useRef<HTMLDivElement | null>(null);

  const closeModal = (e: any) => {
    if (refModal.current && !refModal.current?.contains(e.target)) {
      setOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("click", closeModal);
    } else {
      document.removeEventListener("click", closeModal);
    }

    return () => {
      document.removeEventListener("click", closeModal);
    };
  }, [open]);

  const isOpen = open && (
    <div className="inset-0 absolute flex justify-center items-center backdrop-blur">
      <div ref={refModal} className="relative w-2/3 h-4/5 rounded-md overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <Image src={src} alt={alt} fill />
      </div>
    </div>
  );

  return (
    <>
      <div className="relative w-40 h-40 rounded-md overflow-hidden" onClick={() => setOpen((prev) => !prev)}>
        <Image src={src} alt={alt} fill />
      </div>
      {isOpen}
    </>
  );
};

export default ImageBase;
