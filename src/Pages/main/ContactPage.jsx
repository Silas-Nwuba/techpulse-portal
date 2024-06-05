import React, { useEffect } from "react";
import ContactForm from "../../ui/ContactForm";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact - TechPulse";
    window.scrollTo({ top: 0 });
    return () => {
      document.title = "TechPulse";
    };
  }, []);
  return (
    <>
      <div className="mb-10">
        <ContactForm />
      </div>
    </>
  );
};

export default ContactPage;
