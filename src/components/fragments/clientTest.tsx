/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useRef,useEffect} from 'react'
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { CiFaceSmile } from "react-icons/ci";
import Link from 'next/link';

const dataService = [
  {
    title: "client tester",
    icons: (
      <CiFaceSmile className="md:relative md:left-14 md:size-[170px] size-[200px]" />
    ),
  },
  {
    title: "done project",
    icons: (
      <IoCheckmarkDoneCircleOutline className="md:relative md:left-14 md:size-[170px] size-[200px]" />
    ),
  },
];

const TesterClient = () => {
      const [count, setCount] = useState([0, 0, 0]);
      const targetValues = [9, 9];
      const sectionRef = useRef(null);

      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              targetValues.forEach((targetValue, index) => {
                let start = 0;
                const duration = 2000;
                const incrementTime = 20;
                const step = targetValue / (duration / incrementTime);

                const timer = setInterval(() => {
                  start += step;
                  if (start >= targetValue) {
                    start = targetValue;
                    clearInterval(timer);
                  }
                  setCount((prevCount) => {
                    const updatedCount = [...prevCount];
                    updatedCount[index] = Math.floor(start);
                    return updatedCount;
                  });
                }, incrementTime);
              });

              observer.unobserve(sectionRef.current as never);
            }
          },
          { threshold: 0.1 }
        );

        if (sectionRef.current) {
          observer.observe(sectionRef.current);
        }

        return () => {
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        };
      }, []);


  return (
    <section className="md:px-14 px-6 w-full md:h-[50vh] h-full lg:py-8 py-8 md:py-0">
      <div className="flex flex-col md:flex-row md:justify-center w-full h-full gap-14">
        {dataService.map((items, index) => (
          <Link
            href={"/experience/#portofolio"}
            className="h-full flex md:flex-row flex-col cursor-pointer group transition-all lg:flex-row justify-center items-center lg:w-1/3 md:w-full"
            key={index}
            data-aos="fade-up"
          >
            <div
              className="lg:w-1/2 md:w-full text-color-primary/20 group-hover:text-color-accent transition-all w-full h-full flex items-center justify-center"
              ref={sectionRef}
            >
              {items.icons}
            </div>
            <div className="lg:w-1/2 w-full flex flex-col gap-2 justify-center md:items-start items-center text-color-primary z-[99]">
              <h3 className="text-6xl font-bold">{count[index]}</h3>
              <p className="text-2xl font-semibold capitalize">{items.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default TesterClient