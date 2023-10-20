import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xaygvynb");
  if (state.succeeded) {
    return <p>Thanks for contacting me!-</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label htmlFor="name" className="p-2 text-slate-300 text-xl font-bold">
        Name
      </label>
      <input
        id="name"
        name="name"
        className="w-full border bg-slate-300 border-slate-500 px-2 py-2 rounded-lg shadow-sm focus:outline-none focus:border-slate-700 focus:ring-2 focus:ring-slate-700 focus:bg-slate-100"
      />

      <label htmlFor="email" className="p-2 text-slate-300 text-xl font-bold">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="w-full border bg-slate-300 border-slate-500 px-2 py-2 rounded-lg shadow-sm focus:outline-none focus:border-slate-700 focus:ring-2 focus:ring-slate-700 focus:bg-slate-100"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message" className="p-2 text-slate-300 text-xl font-bold">
        Your message
      </label>
      <textarea
        id="message"
        name="message"
        className="w-full border bg-slate-300 border-slate-500 p-2 rounded-lg shadow-sm focus:outline-none focus:border-slate-700 focus:ring-2 focus:ring-slate-700 focus:bg-slate-100"
      />

      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button
        type="submit"
        disabled={state.submitting}
        className="border p-1 my-4 rounded-lg bg-slate-300 shadow-sm hover:bg-slate-700 font-bold text-slate-700 hover:text-slate-300"
      >
        Submit
      </button>
    </form>
  );
}
