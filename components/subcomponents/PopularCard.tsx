"use client";
import Image from "next/image";
import Link from "next/link";
import hoodieImg from "@/images/HOODIEPrueba.webp";
import hoodieImg1 from "@/images/HOODIEPrueba1.webp";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

// THIS FILE CAN BE IMPROVED

const PopularCard = () => {
  const slides = [
    {
      url: hoodieImg1,
      id: 0,
    },
    {
      url: hoodieImg,
      id: 1,
    },
    {
      url: hoodieImg,
      id: 2,
    },
    {
      url: hoodieImg,
      id: 3,
    },
    {
      url: hoodieImg,
      id: 4,
    },
    {
      url: hoodieImg,
      id: 5,
    },
    {
      url: hoodieImg,
      id: 6,
    },
  ];

  return (
    <div className="max-w-[520px] md:max-w-full md:w-full">
      <div className="w-full">
        {/* For Tablet */}
        <CarouselProvider
          className="lg:hidden md:block hidden"
          naturalSlideWidth={200}
          naturalSlideHeight={100}
          isIntrinsicHeight={true}
          totalSlides={7}
          visibleSlides={2}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack className="absolute z-30 left-0 ml-8 focus:outline-none cursor-pointer">
              <BsChevronCompactLeft className="text-4xl" />
            </ButtonBack>
            <div className="w-full h-full overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div className="h-full flex lg:gap-8 md:gap-0 gap-14 items-center justify-start transition ease-out duration-700">
                  {slides.map((slide) => (
                    <Slide key={slide.id} index={slide.id}>
                      <Link
                        href="/shop/HOODIE(ANDCONFUSED)I"
                        className="flex flex-shrink-0 relative w-full sm:w-auto"
                      >
                        <Image
                          src={hoodieImg1}
                          alt="Hoodie"
                          className="w-full h-full object-contain rounded-2xl cursor-pointer"
                          priority
                        />
                        <div className="absolute flex flex-col gap-2 bottom-6 left-4 text-black">
                          <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6">
                            HOODIE (AND CONFUSED) I
                          </h3>
                          <h2>$40000</h2>
                        </div>
                      </Link>
                    </Slide>
                  ))}
                </div>
              </Slider>
            </div>
            <ButtonNext className="absolute z-30 right-0 mr-8 focus:outline-none cursor-pointer">
              <BsChevronCompactRight className="text-4xl" />
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* For Mobile */}
        <CarouselProvider
          className="block md:hidden"
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          isIntrinsicHeight={true}
          totalSlides={7}
          visibleSlides={1}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack className="absolute z-30 left-0 ml-8 focus:outline-none cursor-pointer">
              <BsChevronCompactLeft className="text-4xl" />
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div className="h-full flex items-center justify-center transition ease-out duration-700">
                  {slides.map((slide) => (
                    <Slide key={slide.id} index={slide.id}>
                      <Link
                        href="/shop/HOODIE(ANDCONFUSED)I"
                        className="flex flex-shrink-0 relative w-full sm:w-auto"
                      >
                        <Image
                          src={hoodieImg1}
                          alt="Hoodie"
                          className="w-full h-full object-contain rounded-2xl cursor-pointer"
                          priority
                        />
                        <div className="absolute flex flex-col gap-2 bottom-6 left-4 text-black">
                          <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6">
                            HOODIE (AND CONFUSED) I
                          </h3>
                          <h2>$40000</h2>
                        </div>
                      </Link>
                    </Slide>
                  ))}
                </div>
              </Slider>
            </div>
            <ButtonNext className="absolute z-30 right-0 mr-8 focus:outline-none cursor-pointer">
              <BsChevronCompactRight className="text-4xl" />
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* For Desktop */}
        <CarouselProvider
          className="hidden lg:block"
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          isIntrinsicHeight={true}
          totalSlides={7}
          visibleSlides={3}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack className="absolute z-30 left-12 focus:outline-none cursor-pointer">
              <BsChevronCompactLeft className="text-4xl" />
            </ButtonBack>
            <div className="w-full h-full mx-12 overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div className="h-full flex items-center justify-center transition ease-out duration-700">
                  {slides.map((slide) => (
                    <Slide key={slide.id} index={slide.id}>
                      <Link
                        href="/shop/HOODIE(ANDCONFUSED)I"
                        className="flex flex-shrink-0 relative w-full sm:w-auto"
                      >
                        <Image
                          src={hoodieImg1}
                          alt="Hoodie"
                          className="w-full h-full object-contain cursor-pointer rounded-2xl"
                          priority
                        />
                        <div className="absolute flex flex-col gap-2 bottom-6 left-4 text-black">
                          <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6">
                            HOODIE (AND CONFUSED) I
                          </h3>
                          <h2>$40000</h2>
                        </div>
                      </Link>
                    </Slide>
                  ))}
                </div>
              </Slider>
            </div>
            <ButtonNext className="absolute z-30 right-12 focus:outline-none cursor-pointer">
              <BsChevronCompactRight className="text-4xl" />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default PopularCard;
