import React from "react";
import ContactForm from "../Components/ContactForm";

export default function Contact(): JSX.Element {
  return (
    <div className="h-screen flex flex-col items-start">
      <div className="w-full">
        <ContactForm />
      </div>
    </div>
  );
}
