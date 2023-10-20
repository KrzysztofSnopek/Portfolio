import React from "react";
import ContactForm from "../Components/ContactForm";

export default function Contact(): JSX.Element {
  return (
    <div className="bg-slate-600 p-8 h-screen flex flex-col items-center">
      <h2 className="text-4xl font-bold text-slate-200">Contact</h2>
      <div className="w-1/2">
        <ContactForm />
      </div>
    </div>
  );
}
