import React, { useEffect, useState } from "react";
import { FaHtml5, FaCss3Alt, FaRegUser } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill, RiReactjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import classNames from "classnames";
import Link from "next/link";
// import dataSkill from "../json/skill.json"

const CardSkill = ({
  dataSkill,
  handleButton,
}: {
  dataSkill: any;
  handleButton: any;
}) => {
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

const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const intervalId = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dataSkill.length);
  }, 2000); // Set the interval duration

  return () => clearInterval(intervalId);
}, [dataSkill]);
  
  return (
    <div className="relative  h-full w-full flex items-center justify-center">
      <div className="profileCard_container relative md:p-40 p-14 md:border-2 md:border-dashed rounded-full md:border-spacing-4 md:border-gray-400/50">
        {dataSkill.map((item: any, index: any) => {
          const IconComponent: any = iconMapping[item.icon as never];
          const classes = classNames(
            "profile_item absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 transition-all duration-500",
            {
              "hover:border-orange-600": item.color === "orange-600",
              "hover:border-blue-500": item.color === "blue-500",
              "hover:border-yellow-300": item.color === "yellow-300",
              "hover:border-blue-600": item.color === "blue-600",
              "hover:border-black": item.color === "black",
              "hover:border-sky-400": item.color === "sky-400",
              "rotate-animation": index === currentIndex,
            },
            item.className
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
        <button
          className="profile_item md:w-[250px] md:h-[250px] w-[180px] h-[180px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0"
          title="button"
        >
          <div className="w-full bg-white h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
            <span className="w-20 h-20 flex justify-center items-center">
              <FaRegUser size={150} />
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CardSkill;
