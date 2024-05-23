// components/PartnerCarousel.js
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import React from "react";

export default function Service() {
  const partners = [
    {
      name: "web dev",
      logo: "/icons-dekstop.png ",
      ket: "We are dedicated to developing projects that reflect our vision and values.",
    },
    {
      name: "ui/ux design",
      logo: "/icons-uiux.png",
      ket: "Creating works that inspire and push the boundaries of creativity.",
    },
    {
      name: "mobile app dev",
      logo: "/icons-mobile.png",
      ket: "Every project we undertake is a reflection of our commitment to quality and excellence.",
    },
  ];
  return (
    <section className="bg-color-background/10 py-16 w-full h-full">
      <div className="md:px-14 px-6 text-center w-full h-full py-6">
        <div className="flex flex-col gap-2">
          <h1
            className="text-color-primary md:text-6xl text-3xl font-bold capitalize"
            data-aos="fade-right"
          >
            service
          </h1>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {partners.map((service, index) => (
            <SwiperSlide key={index}>
              <div
                className="border-4 h-[320px] border-color-primary mx-6 group my-14 rounded-lg px-6 shadow-md transform hover:scale-105 transition-all duration-300 flex flex-col gap-2"
              >
                <div className="w-full h-6 flex justify-end">
                  <div className="w-14 h-8 rotate-90 bg-color-primary rounded-md relative top-6 left-[3.3rem] md:group-hover:top-[9.5rem] group-hover:top-[14.5rem] transition-all"></div>
                </div>
                <div className="flex flex-col gap-4">
                  <Image
                    src={service.logo}
                    alt={service.name}
                    width={200}
                    height={200}
                    className="md:w-full h-36 object-contain "
                  />
                  <div className="flex flex-col gap-3">
                    <p className="text-lg font-semibold text-gray-800">
                      {service.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {service.ket}
                    </p>
                  </div>
                </div>
                <div className="w-full h-6 flex justify-start">
                  <div className="w-14 h-8 rotate-90 bg-color-primary rounded-md relative right-[3.3rem] bottom-8 md:group-hover:bottom-[9.5rem] group-hover:bottom-[14.5rem] transition-all"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
