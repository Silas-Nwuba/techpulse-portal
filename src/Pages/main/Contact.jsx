import React, { useEffect } from "react";
import Aside from "../../ui/Aside";
import ContactForm from "../../ui/ContactForm";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact - TechPulses";
    window.scrollTo(0, 0);
    const handleScroll = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener("popstate", handleScroll);
    return () => {
      window.removeEventListener("popstate", handleScroll);
      document.title = "TechPulse";
    };
  }, []);
  return (
    <>
      <div className="mb-10 grid grid-cols-1 xl:flex xl:justify-between xl:gap-10">
        <ContactForm />
        <Aside />
      </div>
    </>
  );
};

export default Contact;
