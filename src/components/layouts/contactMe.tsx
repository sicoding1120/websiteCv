import React, { useState,useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import InputContact from "../elements/inputContact";
import {
  FaWhatsapp,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import BtnSocialMedia from "../elements/btnSocialMedia";
import AnimatedPage from "../elements/lib/AnimatedPage";
import AOS from "aos"
import 'aos/dist/aos.css'; // Import CSS AOS jika diperlukan


const AnimationBottom = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },

}
const contact = [
  {
    title: "bekasi timur, jawa barat, indonesia",
    icon: <CiLocationOn />,
  },
  {
    title: "daffahafizhfirdaus07@gmail.com",
    icon: <AiOutlineMail />,
  },
  {
    title: "+62 812-1129-5729",
    icon: <BsTelephone />,
  },
];
const inputUserNamePlaceholder = [
  {
    placeholder: "fist name",
  },
  {
    placeholder: "last name",
  },
];
const inputSecondPlaceholder = [
  {
    placeholder: "Email",
  },
  {
    placeholder: "subject",
  },
];

const mediaSocial = [
  {
    icons: <FaWhatsapp size={36} />,
    bg: "#25D366",
    name: "whatsapp",
    href: "https://wa.me/6281211295729",
  },
  {
    icons: <FaGithub size={36} />,
    bg: "#24292F",
    name: "github",
    href: "https://github.com/sicoding1120",
  },
  {
    icons: <FaInstagram size={36} />,
    bg: "#D13C98",
    name: "instagram",
    href: "https://www.instagram.com/daffahafizhfirdaus07/",
  },
];
const ContactMe = () => {

  useEffect(() => {
    AOS.init({
      /* options */
    });
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { firstName, lastName, email, subject, message } = formData;

    if (!firstName || !lastName || !email || !subject || !message) {
      setError("Enter your message first before sending it to Daffa Hafizh");
      return;
    }
    setError("");
    const whatsappUrl = `https://wa.me/6281211295729?text=${encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="w-full h-full">
      <section className="w-full h-[40vh] bg-no-repeat bg-cover bg-bottom bg-bg2 bg-fixed">
        <div className="bg-black/60 w-full h-full flex justify-center items-center">
          <AnimatedPage animation={AnimationBottom}>
            <div className="flex flex-col gap-4 items-center">
              <h2 className="text-color-accent font-semibold text-6xl capitalize">
                contact me
              </h2>
              <p className="text-color-secondary uppercase font-semibold text-sm">
                hubungi saya di sini
              </p>
            </div>
          </AnimatedPage>
        </div>
      </section>
      <section className="w-full md:h-screen">
        <div className="w-full h-full md:px-20 px-4 py-14 mb-8">
          <div className="w-full h-full flex flex-col lg:flex-row gap-14">
            <div className="bg-color-primary lg:w-1/2 h-full p-14">
              <div className="w-full h-full flex flex-col gap-14 justify-center items-center">
                <h2 className="text-4xl capitalize font-bold text-color-secondary">
                  contact me
                </h2>
                <div className="flex flex-col gap-8 justify-center">
                  {contact.map((items, index) => (
                    <div className="flex gap-4" key={index}>
                      <span className="text-color-accent text-2xl">
                        {items.icon}
                      </span>
                      <p className="text-lg text-white">{items.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full h-full flex flex-col gap-6">
              <AnimatedPage animation={null}>
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col">
                    <h6 className="text-color-accent capitalize text-md font-semibold">
                      contact me
                    </h6>
                    <div className="flex flex-col gap-2">
                      <h1 className="text-color-primary text-4xl font-bold capitalize">
                        get in touch with me
                      </h1>
                      <div className="w-20 h-1 bg-color-accent/80"></div>
                    </div>
                  </div>
                  <div className="text-black/10 text-4xl font-semibold flex gap-2 items-center">
                    <p>01</p>
                    <div className="w-6 h-1 bg-color-accent/80"></div>
                  </div>
                </div>
              </AnimatedPage>
              <div className="w-full h-full pt-14">
                <form onSubmit={handleSubmit}>
                  <div className="w-full h-full flex flex-col">
                    <div className="grid grid-cols-2 w-full h-24 gap-5">
                      {inputUserNamePlaceholder.map((items, index) => (
                        <div
                          className="w-full h-full flex justify-center items-center"
                          key={index}
                        >
                          <InputContact
                            placeholder={items.placeholder as never}
                            name={index === 0 ? "firstName" : "lastName"}
                            onChange={handleChange}
                            value={
                              index === 0
                                ? formData.firstName
                                : formData.lastName
                            }
                          />
                        </div>
                      ))}
                    </div>
                    <div className="w-full h-full py-2">
                      <div className="w-full h-full flex flex-col gap-6">
                        {inputSecondPlaceholder.map((items, index) => (
                          <InputContact
                            placeholder={items.placeholder as never}
                            key={index}
                            name={index === 0 ? "email" : "subject"}
                            value={
                              index === 0 ? formData.email : formData.subject
                            }
                            onChange={handleChange}
                          />
                        ))}
                        <div className="flex flex-col gap-4">
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            className={`w-full h-48 bg-gray-500/10 p-4 resize-none input input-bordered focus:outline-none`}
                          ></textarea>
                          {error && (
                            <p
                              className={`text-red-500 ${
                                error ? "block" : "hidden"
                              } ${error ? "shake" : ""}`}
                            >
                              {error}
                            </p>
                          )}
                          <button
                            className="btn md:w-1/3 w-1/2 text-lg bg-color-primary text-color-accent hover:bg-color-accent hover:text-color-primary border-none "
                            type="submit"
                            onClick={handleSubmit}
                          >
                            send to
                            <FaWhatsapp size={24} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[60vh] mt-14">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1389699953743!2d107.03794517504953!3d-6.245410493742948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698ef0c7568825%3A0xffcc7c7ba1addfc2!2sJl.%20P.Timor%20Raya%2C%20RT.005%2FRW.009%2C%20Aren%20Jaya%2C%20Kec.%20Bekasi%20Tim.%2C%20Kota%20Bks%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1716009178302!5m2!1sid!2sid"
          loading="lazy"
          className="w-full h-full"
        ></iframe>
      </section>
      <section className="w-full h-[30vh]">
        <div className="w-full h-full flex gap-8 justify-center items-center">
          {mediaSocial.map((items, index) => (
            <BtnSocialMedia key={index} bgIcons={items?.bg} name={items?.name} href={items?.href}>
              {items?.icons}
            </BtnSocialMedia>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ContactMe;
