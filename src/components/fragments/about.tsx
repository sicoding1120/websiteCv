import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <section className="w-full lg:h-[110vh] md:h-full md:px-14 px-6 py-24">
      <div className=" w-full h-full flex flex-col-reverse md:flex-col-reverse lg:flex-row gap-14 items-center md:items-center lg::items-start">
        <div className="lg:w-1/2 md:w-[40rem] w-full h-full" data-aos="fade-up">
          <Image
            src={"/imgContent2.png"}
            alt={""}
            width={300}
            height={300}
            className="w-full h-full"
          />
        </div>
        <div className="lg:w-1/2 md:w-full w-full h-full">
          <div className="w-full h-full flex flex-col gap-8">
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col gap-2">
                <h6
                  className="text-color-accent capitalize lg:text-xl md:text-2xl text-md font-semibold"
                  data-aos="fade-down"
                >
                  discover
                </h6>
                <h1
                  className="text-color-primary lg:text-6xl md:text-6xl text-3xl font-bold capitalize"
                  data-aos="fade-down"
                >
                  about me
                </h1>
                <div className="md:w-20 w-14 h-1 bg-color-accent/80"></div>
              </div>
              <div
                className="text-black/10 lg:text-6xl md:text-4xl text-3xl font-semibold flex gap-2 items-center"
                data-aos="fade-up"
              >
                <p>01</p>
                <div className="md:w-8 w-4 h-1 bg-color-accent/80"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <p
                className="lg:text-lg md:text-2xl text-color-primary"
                data-aos="fade-up"
              >
                Hello, my name is Daffa Hafizh Firdaus, I m a web junior
                developer, now studying at a vocational Islamic boarding school
                Madinatul Koran, at Madinatul Koran Vocational School I sat on a
                bench 10th grade I want to become a web senior in the next 3
                years developers
              </p>
            </div>
            <div
              className="lg:px-4 justify-center flex lg:justify-start "
              data-aos="fade-up"
            >
              <Link
                href={"/contactMe"}
                className="btn lg:w-1/3 w-1/2 capitalize md:text-xl text-color-secondary bg-color-primary border border-color-primary hover:text-color-primary hover:bg-transparent hover:border-color-primary"
              >
                contact me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About