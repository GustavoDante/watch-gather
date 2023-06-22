'use client'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import React from 'react'

export default function Carousel({
  images,
  slidesToShow,
  width,
  height,
}: {
  images: string[]
  slidesToShow: number
  width: number
  height: number
}) {
  interface CustomArrowProps {
    onClick?: () => void
  }

  const CustomPrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
    return (
      <div
        className="slick-arrow absolute -left-5 top-1/2 z-10 hidden translate-y-[-50%] transform
                  cursor-pointer opacity-75 transition duration-500 before:ml-0.5 before:font-slick before:text-8xl
                before:text-gray before:content-['←'] hover:opacity-100 lg:block"
        onClick={onClick}
      ></div>
    )
  }

  const CustomNextArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
    return (
      <div
        className="slick-arrow absolute right-0 top-1/2 z-10 hidden translate-y-[-50%] transform cursor-pointer
                  opacity-75 transition duration-500 before:ml-0.5 before:font-slick before:text-8xl
                  before:text-gray before:content-['→'] hover:opacity-100 lg:block"
        onClick={onClick}
      ></div>
    )
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1524,
        settings: {
          slidesToShow: slidesToShow - 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slidesToShow - 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  }

  return (
    <div className="w-full">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt="movie"
              width={width}
              height={height}
              className="sm:w-50 md:w-70 lg:w-86 xl:w-86 2xl:w-86 rounded-2xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}
