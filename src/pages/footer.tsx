import React from "react";
import Image from "next/image";
import { FaChevronUp } from "react-icons/fa";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className="flex w-full h-[10vh] bg-color-primary justify-between items-center px-8 scroll-smooth">
      <div className="flex gap-4 items-center text-color-accent capitalize font-semibold">
        <Image src={"/favicon.png"} alt={""} width={40} height={40} />
        &copy; daffa hafizh firdaus 2024
      </div>
      <Link href={"#"} className="p-3 bg-color-accent rounded-lg" title="go to up">
        <FaChevronUp size={20} />
      </Link>
    </footer>
  );
};

export default Footer;
