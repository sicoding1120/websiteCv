/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import Service from "@/components/elements/service";
import "aos/dist/aos.css";
import HeroSection from "@/components/fragments/heroSec";
import About from "@/components/fragments/about";
import WhatIDo from "@/components/fragments/whatIDo";
import TesterClient from "@/components/fragments/clientTest";
import Skill from "@/components/fragments/skill";


const Index = () => {
  useEffect(() => {
    AOS.init({
      // Opsi konfigurasi AOS
      duration: 1000,
    });
    // Optional: Refresh AOS setiap kali komponen diperbarui
    AOS.refresh();
  }, []);


  return (
    <main className="w-full h-full transition-all scroll-smooth">
      <HeroSection/>
      <About/>
      <WhatIDo/>
      <TesterClient/>
      <Service />
      <Skill/>
    </main>
  );
};

export default Index;
