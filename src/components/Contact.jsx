import React from "react";
import { useForm, ValidationError } from "@formspree/react";
// import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const [state, handleSubmit] = useForm("xzbnovod");
  // if (state.succeeded) {
  //   toast.success("Message Sent!");
  //   return;
  // } else {
  //   toast.error("Error!");
  // }
  return (
    <div id="contactme" className="w-full bg-bg_color py-7 padding">
      {/* <Toaster /> */}
      <h2 className="text-center text-4xl font-semibold text-white">
        Contact <span className="text-primary_color">Me!</span>
      </h2>
      <div className="w-full flex justify-center">
        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xzbnovod"
          method="POST"
          className="w-full max-w-[490px] my-12 grid place-items-center md:grid-cols-2 gap-x-6 gap-y-7"
        >
          <div className="w-full">
            {/* Full Name input */}
            <input
              type="text"
              name="Fullname"
              placeholder="FullName"
              required
              className="w-full border-2 border-primary_color bg-transparent px-3 py-2 outline-none text-white rounded-md"
            />
            <ValidationError
              prefix="Name"
              field="Fullname"
              errors={state.errors}
            />
          </div>
          {/* Email Address input */}
          <div className="w-full">
            <input
              type="email"
              name="Email"
              placeholder="Email Address"
              required
              className="w-full border-2 border-primary_color bg-transparent px-3 py-2 outline-none text-white rounded-md"
            />
            <ValidationError
              prefix="Email"
              field="Email"
              errors={state.errors}
            />
          </div>
          {/* Mobile Number input */}
          <div className="w-full">
            <input
              type="text"
              name="Number"
              placeholder="Mobile Number (optional)"
              className="w-full border-2 border-primary_color bg-transparent px-3 py-2 outline-none text-white rounded-md"
            />
            <ValidationError
              prefix="number"
              field="Number"
              errors={state.errors}
            />
          </div>
          {/* Email Subject input */}
          <div className="w-full">
            <input
              type="text"
              name="subject"
              placeholder="Email Subject"
              required
              className="w-full border-2 border-primary_color bg-transparent px-3 py-2 outline-none text-white rounded-md"
            />
            <ValidationError
              prefix="subject"
              field="subject"
              errors={state.errors}
            />
          </div>
          {/* Message TextArea */}
          <div className="w-full md:col-span-2">
            <textarea
              cols="30"
              rows="10"
              placeholder="Enter Your Message"
              name="message"
              required
              className="w-full border-2 border-primary_color bg-transparent px-3 py-2 outline-none text-white rounded-md"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          {/* Submit Button */}
          <div className="w-full flex justify-center md:col-span-2">
            <input
              type="submit"
              className="border-2 border-primary_color bg-transparent px-6 py-2 outline-none text-white rounded-md hover:bg-primary_color hover:text-black font-semibold tracking-[2px] cursor-pointer"
              disabled={state.submitting}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
