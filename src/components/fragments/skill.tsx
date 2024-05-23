import React, { useState } from 'react'
import { FaHtml5, FaCss3Alt, FaRegUser } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill, RiReactjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import CardSkill from "@/components/elements/cardOfSkill";
import { cardSkill } from "@/components/data/skill";
import classNames from 'classnames';
import Link from 'next/link';
import AnimatedPage from '../elements/lib/AnimatedPage';
import CircleProses from '../elements/circleProgres';



const Skill = () => {
      const [updateData, setUpdateData] = useState<SkillData | undefined>(
        undefined
      );

      type SkillData = {
        id: number;
        title: string;
        description: string;
        className: string;
        hover: string;
        icon: string;
        color: string;
        skill: object[] | any;
      };
      const handleButton = (items: SkillData | object | any) => {
        setUpdateData(items);
      };

      const title = updateData ? updateData.title : "skill";
      const subTit = updateData
        ? updateData.description
        : `I have some programming skills or mastery
 several programming languages ​​such as HTML, CSS and several
 framework of javascript which is in each
 Languages ​​have different levels of understanding`;

      const iconMapping = {
        FaHtml5: FaHtml5,
        FaCss3Alt: FaCss3Alt,
        FaRegUser: FaRegUser,
        RiNextjsFill: RiNextjsFill,
        RiTailwindCssFill: RiTailwindCssFill,
        RiReactjsFill: RiReactjsFill,
        IoLogoJavascript: IoLogoJavascript,
        SiTypescript: SiTypescript,
      };

  return (
    <section
      className="w-full lg:h-screen bg-color-background/10 md:px-14 px-6 flex flex-col lg:flex-row gap-24 pt-24 md:pt-0"
      id={updateData?.title}
    >
      <div
        className="lg:w-1/2 w-full hidden md:block h-full px-14 md:pt-24"
        data-aos="fade-right"
      >
        <CardSkill dataSkill={cardSkill} handleButton={handleButton} />
      </div>
      <div className="md:hidden block">
        <div className="grid grid-cols-3 gap-10">
          {cardSkill.map((item: any, index: any) => {
            const IconComponent: any = iconMapping[item.icon as never];
            const classes = classNames(
              "profile_item grid grid-cols-3 rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 transition-all duration-500",
              {
                "hover:border-orange-600": item.color === "orange-600",
                "hover:border-blue-500": item.color === "blue-500",
                "hover:border-yellow-300": item.color === "yellow-300",
                "hover:border-blue-600": item.color === "blue-600",
                "hover:border-black": item.color === "black",
                "hover:border-sky-400": item.color === "sky-400",
              }
            );
            return (
              <Link
                href={`#${item.title}`}
                key={index}
                className={classes}
                title={item.title}
                onClick={() => handleButton(item)}
              >
                <span
                  className={classNames(
                    "flex md:w-[120px] md:h-[120px] w-[80px] h-[80px] transition-all duration-500 rounded-full z-[2] bg-white p-4 justify-center items-center",
                    {
                      "text-orange-600": item.color === "orange-600",
                      "text-blue-500": item.color === "blue-500",
                      "text-yellow-300": item.color === "yellow-300",
                      "text-blue-600": item.color === "blue-600",
                      "text-black": item.color === "black",
                      "text-sky-400": item.color === "sky-400",
                    }
                  )}
                >
                  {IconComponent && <IconComponent size={80} />}{" "}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="lg:w-1/2 h-full flex flx-col gap-6 md:py-24">
        <div className="w-full h-full flex flex-col gap-8">
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col">
              <h6
                className="text-color-accent capitalize lg:text-md md:text-3xl font-semibold"
                data-aos="fade-down"
              ></h6>
              <div className="flex flex-col gap-6">
                <h2
                  className="text-color-primary md:text-6xl lg:text-6xl text-4xl font-bold capitalize"
                  data-aos="fade-down"
                >
                  my skill
                </h2>
                <div className="w-20 h-1 bg-color-accent/80"></div>
              </div>
            </div>
            <div
              className="text-black/10 lg:text-6xl md:text-6xl text-3xl font-semibold flex gap-2 items-center"
              data-aos="fade-up"
            >
              <p>03</p>
              <div className="w-8 h-1 bg-color-accent/80"></div>
            </div>
          </div>
          <div className="w-full h-full">
            <AnimatedPage animation={null}>
              <div className="flex flex-col gap-4">
                <h2
                  className="text-4xl capitalize  font-bold text-color-primary"
                  data-aos="fade-down"
                >
                  {title}
                </h2>
                <p className="text-lg" data-aos="fade-up">
                  {subTit}
                </p>

                {updateData ? (
                  <div className="flex flex-col gap-8 w-full py-2 justify-center items-start">
                    <h4
                      className="font-bold capitalize text-2xl"
                      data-aos="fade-up"
                    >
                      proses :
                    </h4>
                    <div className="md:flex grid grid-cols-2 justify-center items-center w-full gap-14">
                      {updateData.skill.map((items: any, index: any) => (
                        <div
                          key={index}
                          className="flex flex-col gap-4 items-center text-lg font-semibold"
                          data-aos="fade-up"
                        >
                          <CircleProses
                            proses={items ? items.proses : 0}
                            color={items.color}
                          />
                          {items.name}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
                {updateData ? null : (
                  <div className="flex gap-2" data-aos="fade-up">
                    <p className="text-color-primary capitalize font-bold text-sm">
                      instruksi :
                    </p>
                    <p className="text-color-accent text-sm">
                      tekan salah satu logo dari bahasa pemrograman untuk
                      melihat lebih detail
                    </p>
                  </div>
                )}
              </div>
            </AnimatedPage>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill