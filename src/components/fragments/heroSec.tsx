/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState, useEffect} from 'react'
import BtnGithub from '../elements/btnGithub';
import Image from 'next/image';




const HeroSection = () => {
      const [text, setText] = useState("");
      const textsToType: any = ["web developer", "UI/UX design", "app mobile"];
      const typingSpeed = 180; // Kecepatan mengetik (dalam milidetik)
      const intervalTime = 10; // Waktu antara perubahan teks (dalam milidetik)

      useEffect(() => {
        let index = 0;
        let textIndex = 0;

        const interval = setInterval(() => {
          setText(textsToType[textIndex].substring(0, index));

          if (++index > textsToType[textIndex].length) {
            setTimeout(() => {
              index = 0;
              textIndex = (textIndex + 1) % textsToType.length;
            }, intervalTime);
          }
        }, typingSpeed);
        return () => clearInterval(interval);
      }, []);

  return (
    <section className="w-full lg:h-screen md:h-full bg-bg1 md:px-14 pb-44 px-6 md:py-14  bg-cover">
      <div className="w-full h-full flex flex-col-reverse md:flex-col-reverse lg:flex-row gap-2 items-center md:items-start">
        <div className="lg:w-1/2 md:w-full h-full lg:py-14 md:py-6 md:pb-24 flex flex-col justify-center items-center md:items-start gap-6">
          <div className="flex flex-col lg:gap-4 gap-2 text-center justify-center items-center lg:items-start md:text-start">
            <h4 className="lg:text-2xl md:text-lg text-color-secondary font-semibold capitalize">
              hallo, saya daffa
            </h4>
            <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold text-color-secondary capitalize">
              junior <span className="text-color-accent">{text}</span>
            </h1>
            <p className="text-color-secondary lg:text-lg md:text-xl w-4/5 md:text-center lg:text-start">
              Beginner Web Developer, Focus on HTML, CSS, JavaScript, and some
              javascript frameworks{" "}
            </p>
          </div>
          <div className="flex gap-4 md:justify-center lg:justify-start md:items-center lg:items-start md:w-full lg:w-2/3">
            <button className="btn lg:w-1/3 md:text-xl lg:text-sm text-sm h-full capitalize text-color-secondary bg-color-accent border border-color-accent hover:text-color-accent hover:bg-transparent hover:border-color-accent">
              more about me
            </button>
            <BtnGithub />
          </div>
        </div>
        <div className="lg:w-1/2 md:w-[40rem] w-[23rem] md:h-full px-6">
          <Image
            src={"/imgContent1.png"}
            alt={""}
            width={300}
            height={300}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection