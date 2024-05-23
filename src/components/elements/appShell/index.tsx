import React from "react";
import Navbar from "../navbar";
import Footer from "@/pages/footer";
const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer/>
    </>
  );
};

export default AppShell;
