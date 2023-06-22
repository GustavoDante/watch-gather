'use client'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import React from 'react'
import { MoviesProps } from '@/@types/Movie'

interface CarouselProps {
  movies: MoviesProps[]
  slidesToShow: number
  width: number
  height: number
}
interface CustomArrowProps {
  onClick?: () => void
}

export function Carousel({
  movies,
  slidesToShow,
  width,
  height,
}: CarouselProps) {
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
        {movies
          .filter((movie) => movie.poster_path !== null)
          .map((movie, index) => (
            <div key={index}>
              <Image
                src={`${process.env.NEXT_PUBLIC_TMBD_IMAGE_BASE_URL}${process.env.NEXT_PUBLIC_TMBD_IMAGE_SIZE}${movie.poster_path}`}
                alt="movie"
                width={width}
                height={height}
                className="h-auto w-auto rounded-2xl"
              />
            </div>
          ))}
      </Slider>
    </div>
  )
}
