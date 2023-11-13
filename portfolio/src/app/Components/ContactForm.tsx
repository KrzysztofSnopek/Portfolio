import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import SubmitButton from "./SubmitButton";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xaygvynb");
  if (state.succeeded) {
    return (
      <div className="w-[90%] opacity-40 border bg-lightpurpleaccent border-secondary p-2 rounded-lg shadow-sm">
        <p className="flex justify-center text-primary font-bold text-lg p-2">
          Thank you for sending me a message!
        </p>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-[85%]">
      <label htmlFor="name" className="p-2 text-purpleaccent text-xl font-bold">
        Name
      </label>
      <input
        id="name"
        name="name"
        minLength={3}
        maxLength={30}
        required
        className="w-full opacity-40 border bg-purpleaccent border-secondary p-2 rounded-lg shadow-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:opacity-80"
      />

      <label
        htmlFor="email"
        className="p-2 text-purpleaccent text-xl font-bold"
      >
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        minLength={3}
        maxLength={30}
        required
        className="w-full opacity-40 border bg-purpleaccent border-secondary p-2 rounded-lg shadow-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:opacity-80"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label
        htmlFor="message"
        className="p-2 text-purpleaccent text-xl font-bold"
      >
        Your message
      </label>
      <textarea
        rows={4}
        id="message"
        name="message"
        className="w-full opacity-40 border bg-purpleaccent border-secondary p-2 rounded-lg shadow-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:opacity-80 resize-none scrollbar-none"
      />

      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <SubmitButton state={state.submitting} />
    </form>
  );
}
