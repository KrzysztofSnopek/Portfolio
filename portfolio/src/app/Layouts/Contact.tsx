import React from "react";
import ContactForm from "../Components/ContactForm";
import ContactDetails from "../Components/ContactDetails";
import {} from "@fortawesome/free-solid-svg-icons";

export default function Contact(): JSX.Element {
  return (
    <div className="flex w-full">
      <ContactForm />
      <ContactDetails />
    </div>
  );
}
