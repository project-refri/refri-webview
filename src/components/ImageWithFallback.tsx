'use client';
import React, { useEffect, useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { FALLBACK_IMAGE, LOADING_IMAGE } from '@/lib/constans';

interface ImageWithFallbackProps extends Omit<ImageProps, 'src' | 'alt'> {
  src?: string;
  alt?: string;
}

const ImageWithFallback = ({ src, alt, ...rest }: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      {...rest}
      src={
        imgSrc ? (imgSrc.length > 0 && imgSrc[0] === 'h' ? imgSrc : FALLBACK_IMAGE) : LOADING_IMAGE
      }
      onError={() => {
        setImgSrc(FALLBACK_IMAGE);
      }}
      alt={alt || 'Image'}
      unoptimized
    />
  );
};

export default ImageWithFallback;
