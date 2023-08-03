'use client'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import React from 'react'
import { MoviesProps } from '@/@types/Movie'
import Link from 'next/link'
import { BackDrop } from '../BackDrop'

interface CarouselProps {
  movies: MoviesProps[]
  slidesToShow: number
  biggerText?: boolean
}
interface CustomArrowProps {
  onClick?: () => void
}

export function Carousel({
  movies,
  slidesToShow,
  biggerText,
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
        breakpoint: 1920,
        settings: {
          slidesToShow: slidesToShow - 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slidesToShow - 2,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: slidesToShow - 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: slidesToShow - 4,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.05,
          slidesToScroll: 1,
          dots: false,
          centerMode: false,
        },
      },
    ],
    className: '[&>*:nth-child(2)]:overflow-y-visible [&>*:nth-child(2)]:overflow-x-clip',
  }

  return (
    <div className="w-full">
      <Slider {...settings}>
        {movies
          .filter((movie: MoviesProps) => movie.poster_path !== null)
          .map((movie: MoviesProps, index) => (
            <div key={index} className='group relative w-full h-full transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:z-10'>
              <div className='w-5/6 h-full'>
                <Link href={`#`} >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_TMBD_IMAGE_BASE_URL}${process.env.NEXT_PUBLIC_TMBD_IMAGE_SIZE}${movie.poster_path}`}
                    alt="movie"
                    width={1280}
                    height={720}
                    className="h-full w-full rounded-2xl"
                  />
                </Link>
              </div>
              <BackDrop movie={movie} biggerText={biggerText}/>
            </div>
          ))}
      </Slider>
    </div>
  )
}
