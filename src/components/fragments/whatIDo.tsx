import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cards";
import Image from 'next/image';
import { EffectCards } from 'swiper/modules';

const cardWhatIdo = [
  {
    title: "frontend web developer",
    ket: "I have mastered several topics in frontend development and various programming languages or frameworks.",
  },
  {
    title: "UI/UX design",
    ket: "I have also mastered several topics in UI and UX, such as components, auto layout, and more.",
  },
  {
    title: "app mobile",
    ket: "I also have some understanding of mobile app development topics such as widgets, stateless, and stateful.",
  },
];


const WhatIDo = () => {
  return (
    <section className="w-full lg:h-full md:px-14 px-6 flex flex-col gap-4 py-8">
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col">
          <h6
            className="text-color-accent capitalize text-md font-semibold"
            data-aos="fade-down"
          >
            take a look
          </h6>
          <div className="flex flex-col gap-6">
            <h2
              className="text-color-primary text-3xl md:text-6xl font-bold capitalize"
              data-aos="fade-down"
            >
              what i do
            </h2>
            <div className="w-20 h-1 bg-color-accent/80"></div>
          </div>
        </div>
        <div
          className="text-black/10 md:text-6xl text-4xl font-semibold flex gap-2 items-center"
          data-aos="fade-up"
        >
          <p>02</p>
          <div className="w-8 h-1 bg-color-accent/80"></div>
        </div>
      </div>
      <div className="w-full h-full flex md:flex-col flex-col lg:flex-row gap-14">
        <div
          className="lg:w-1/2 w-full h-full flex flex-col justify-center items-center px-8 md:px-14 relative top-14 mb-8
          "
          data-aos="fade-down"
        >
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="w-full"
          >
            <SwiperSlide className="w-full">
              <Image
                src="/whatIDo1.jpg"
                alt="What I do 1"
                width={300}
                height={200}
                className="w-full md:h-[450px] h-[250px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/whatIDo2.jpg"
                alt="What I do 2"
                width={300}
                height={200}
                className="w-full md:h-[450px] h-[250px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/whatIDo3.jpg"
                alt="What I do 3"
                width={300}
                height={200}
                className="w-full md:h-[450px] h-[250px]"
              />
            </SwiperSlide>
          </Swiper>{" "}
        </div>
        <div className="lg:w-1/2 w-full h-full grid md:grid-cols-2 grid-cols-1 gap-4 justify-center items-center ">
          {cardWhatIdo.map((items, index) => (
            <div
              className="w-full h-full flex flex-col gap-2 rounded-xl group transition-all border-2 shadow-md border-white hover:border-color-accent justify-center items-center px-4"
              key={index}
              data-aos="fade-up"
            >
              <h2 className="text-[75px] font-bold relative md:right-[90px] right-[120px] group-hover:text-color-accent transition-all bottom-6 text-black/5 ">{`0${
                index + 1
              }`}</h2>
              <div className="flex flex-col gap-2 text-center relative bottom-6">
                <h4 className="text-2xl font-semibold capitalize">
                  {items.title}
                </h4>
                <p className="text-center">{items.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatIDo