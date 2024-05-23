import React from "react";
import { useRouter } from "next/router";
import ContactMe from "@/components/layouts/contactMe";
import Experience from "@/components/layouts/experience";

const Dynamic = () => {
  const { query } = useRouter();

  switch (query.slug) {
    case "contactMe":
      return <ContactMe />;
    case "experience":
      return <Experience/>
  }
};

export default Dynamic;
