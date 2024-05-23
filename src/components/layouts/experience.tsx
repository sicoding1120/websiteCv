import React, { useEffect, useState } from "react";
import { FaBookOpen } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import portofolio from "../data/portofolio.json";
import { GiBookAura } from "react-icons/gi";
import Link from "next/link";
import AnimatedPage from "../elements/lib/AnimatedPage";

const Experience = () => {
  const [portofolioUp, setPortofolioUp] = useState([...portofolio]);
  const [validasi, setValidasi] = useState(false);
  console.log(validasi);
  let hasil = validasi === true ? 9 : 6;
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const events = [
    {
      year: "2012 - 2019",
      school: "sdit baiturrahman",
      location: "bekasi timur",
      description:
        "I studied for 6 years on there before I continued to junior and senior high school",
    },
    {
      year: "2019 - 2023",
      school: "pondok pesantren Smp madinatul qur'an",
      location: "jonggol, bogor",
      description:
        "After I attended elementary school, I continued my studies at the Smp MadinatulQuran Islamic boarding school",
    },
    {
      year: "2023 - 2026",
      school: "pondok pesantren smk madinatul qur'an",
      location: "jonggol, bogor",
      description:
        "After learning about religion, I decided to study technology at Smk MadinatulQuran",
    },
  ];
  const dataAchievment = [
    {
      year: "2022 -2023",
      school: "anggota osis bagian bahasa",
      location: "smp madinatulqur'an",
      description:
        "I have been osis part of this language for approximately 1 year",
    },
    {
      year: "2023 - 2024",
      school: "anggota osis bagian kesehatan",
      location: "smk madinatul qur'an",
      description: "I have been osis part of this language for 6 months",
    },
  ];

  const myGoals = [
    {
      title: "senior web developer",
      desc: "My target is to become a senior web developer like my seniors so that it is easy to find work or study and can also freelance during school",
    },
    {
      title: "fullstack developer",
      desc: "I also want to become a full stack developer so I can build interactive and multifunctional websites and work on the front end and back end",
    },
    {
      title: "freelancer",
      desc: "I want to have my own income from my own hard work without having to burden my parents",
    },
  ];

  return (
    <main className="w-full h-full flex flex-col bg-gray-50 gap-6 ">
      <section className="w-full h-[40vh] bg-no-repeat bg-cover bg-bottom bg-bg2 bg-fixed">
        <div className="bg-black/60 w-full h-full flex justify-center items-center">
          <AnimatedPage animation={null}>
            <div className="flex flex-col gap-4 items-center">
              <h2 className="text-color-accent font-semibold lg:text-6xl md:text-6xl text-4xl capitalize">
                experience
              </h2>
              <p className="text-color-secondary uppercase font-semibold text-sm">
                pengalaman
              </p>
            </div>
          </AnimatedPage>
        </div>
      </section>
      <div className="flex flex-col md:flex-row gap-4 items-start md:px-14 px-6">
        <div className="md:w-1/2 w-full h-full ">
          <div className="">
            <h1 className="text-2xl font-bold mb-12 text-center text-gray-800 capitalize">
              school
            </h1>
            {events.map((event, index) => (
              <div
                key={index}
                className="lg:w-[600px] mb-8 md:ml-4 flex flex-col gap-4 md:gap-0 items-start relative"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-color-accent text-white flex items-center justify-center shadow-lg">
                    <FaBookOpen />
                  </div>
                  <div className="ml-4 font-semibold text-gray-800 text-lg">
                    {event.year}
                  </div>
                </div>
                <div className="md:ml-14 p-6 bg-white shadow-lg rounded-lg border-l-4 border-color-accent flex flex-col gap-6">
                  <div className="flex gap-4 items-center">
                    <GiBookAura size={20} />
                    <div className="flex flex-col capitalize font-semibold">
                      <p>{event.school}</p>
                      <p>{event.location}</p>
                    </div>
                  </div>
                  <div className="w-full">
                    <p>{event.description}</p>
                  </div>
                </div>
                <div className="absolute left-0 top-2 w-6 h-6 bg-color-accent rounded-full transform -translate-x-1/2 border-4 border-white shadow-md"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 w-full h-full text-color-primary justify-start flex flex-col">
          <div className="">
            <h1 className="text-2xl font-bold mb-12 text-center text-gray-800 capitalize">
              achievments
            </h1>

            {dataAchievment.map((event, index) => (
              <div
                key={index}
                className="mb-8 md:ml-4 flex flex-col gap-4 md:gap-0 items-start relative"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-color-primary text-white flex items-center justify-center shadow-lg">
                    <FaBookOpen />
                  </div>
                  <div className="ml-4 font-semibold text-gray-800 text-lg">
                    {event.year}
                  </div>
                </div>
                <div className="md:ml-14 p-6 bg-white shadow-lg rounded-lg border-l-4 border-color-primary flex flex-col gap-6">
                  <div className="flex gap-4 items-center">
                    <GiBookAura size={20} />
                    <div className="flex flex-col capitalize font-semibold">
                      <p>{event.school}</p>
                      <p>{event.location}</p>
                    </div>
                  </div>
                  <div>
                    <p>{event.description}</p>
                  </div>
                </div>
                <div className="absolute left-0 top-2 w-6 h-6 bg-color-primary rounded-full transform -translate-x-1/2 border-4 border-white shadow-md"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section
        id="portofolio"
        className="w-full h-full md:px-14 px-6 py-8 flex flex-col gap-6"
      >
        <div className="flex flex-row justify-center items-center w-full">
          <div className="flex flex-col gap-4">
            <h1
              className="md:text-6xl text-3xl font-bold text-color-primary capitalize"
              data-aos="fade-right"
            >
              my portofolio
            </h1>
            <div className="md:w-full w-14 h-1 bg-color-accent/80 "></div>
          </div>
        </div>
        <div className="w-full h-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {portofolioUp.slice(0, hasil).map((items, index) => (
            <div
              className="w-full h-[250px] rounded-xl bg-blue-500 group transition-all overflow-hidden"
              key={index}
              data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
            >
              <div className="w-full h-full bg-black/40 z-[999] text-color-secondary flex absolute flex-col left-full justify-end group-hover:left-0 cursor-pointer transition-all group-hover:flex px-6 py-4">
                <h4 className="text-2xl font-bold capitalize ">
                  {items.title}
                </h4>
                <p className="text-lg font-semibold capitalize">
                  {items.subtitle}
                </p>
              </div>
              <Image
                src={`/portofolio/porto${index + 1}.png`}
                alt={""}
                width={200}
                height={200}
                className="transition-all group-hover:scale-110 w-full h-full"
              />
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center items-center">
          <Link
            href={"#portofolio"}
            className="flex justify-center items-center text-color-primary text-lg capitalize w-[120px] border border-color-primary py-1 rounded-md hover:bg-color-primary transition-all hover:text-color-accent"
            onClick={() => setValidasi(!validasi)}
          >
            {validasi === true ? "hide" : "see all"}
          </Link>
        </div>
      </section>
      <section className="w-full lg:h-screen bg-color-background/10 md:px-14 px-6 md:pt-14 pt-14 ">
        <div className="w-full h-full flex flex-col gap-8">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-col gap-4">
              <h1
                className="md:text-6xl text-3xl font-bold text-color-primary capitalize"
                data-aos="fade-down"
              >
                my goals
              </h1>
              <div className="md:w-20 w-14 h-1 bg-color-accent/80"></div>
            </div>
            <div
              className="text-black/30 md:text-6xl text-3xl font-semibold flex gap-2 items-center"
              data-aos="fade-up"
            >
              <p>02</p>
              <div className="md:w-8 w-4 h-1 bg-color-accent/80"></div>
            </div>
          </div>
          <div className="w-full h-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:px-4 py-14 lg:gap-8 md:gap-20 gap-24">
            {myGoals.map((items, index) => (
              <div
                className={`border-4 border-color-primary rounded-2xl flex flex-col transition-all group hover:border-color-accent`}
                key={index}
                data-aos="fade-up"
              >
                <div className=" w-full h-14 flex justify-end items-center px-6">
                  <div
                    className={`w-24 h-24 bg-color-primary relative bottom-8 rounded-xl flex justify-center items-center md:group-hover:right-44 lg:group-hover:right-60 group-hover:right-48 right-0 transition-all group-hover:bg-color-accent`}
                  >
                    <Image src={""} alt={""} />
                  </div>
                </div>
                <div className="w-full h-full px-4 flex flex-col gap-4 justify-center">
                  <h3
                    className="md:text-2xl text-4xl text-color-primary font-bold capitalize"
                    data-aos="fade-down"
                  >
                    {items.title}
                  </h3>
                  <p className="text-color-primary text-lg" data-aos="fade-up">
                    {items.desc}
                  </p>
                </div>
                <div className="w-full h-36 px-6 flex justify-start items-center">
                  <div className="w-24 h-8 relative top-12 rounded-md bg-color-primary transition-all md:group-hover:left-44 lg:group-hover:left-60 group-hover:left-48 group-hover:bg-color-accent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Experience;
