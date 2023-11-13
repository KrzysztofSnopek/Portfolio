import React from "react";
import ContactForm from "../Components/ContactForm";
import ContactDetails from "../Components/ContactDetails";

export default function Contact(): JSX.Element {
  return (
    <div className="flex w-full mt-8">
      <ContactForm />
      <ContactDetails />
    </div>
  );
}
