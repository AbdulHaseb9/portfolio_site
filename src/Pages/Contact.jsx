import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-toastify";

export default function Contact() {
  const [state, handleSubmit] = useForm("myzgdgow");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Your Message Sent Successfully");
    }
  }, [state.succeeded]);

  return (
    <>
      <div className="px-5 bg-secondary text-center w-full h-screen md:px-10 xl:px-20 flex flex-col justify-center">
        <h1
          data-aos="fade-down"
          className="text-3xl md:text-5xl font-semibold font-roman"
        >
          Contact Me
        </h1>
        <h1
          data-aos="fade-left"
          className="text-lg md:text-4xl font-roman text-primary my-3"
        >
          hasebsheikh2380@gmail.com
        </h1>
        <p data-aos="fade-right">
          Feel free to Contact me with any queries or questions!
        </p>
        <form onSubmit={handleSubmit} className="my-6" data-aos="fade-up">
          <div className="flex justify-center flex-col items-center md:flex-row gap-y-7">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="w-72 border-b-2 border-primary mx-4 pb-2 md:p-2 bg-transparent outline-none placeholder:text-primary"
              required
            />
            <ValidationError prefix="name" field="name" errors={state.errors} />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              className="w-72 border-b-2 border-primary mx-4 pb-2 md:p-2 bg-transparent outline-none placeholder:text-primary"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <textarea
            placeholder="Message"
            id="message"
            name="message"
            className="w-[290px] md:w-[600px] min-h-28 py-2 mt-4 text-sm bg-transparent outline-none border-b-2 border-primary placeholder:text-primary"
            required
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <div className="flex justify-center my-3">
            {/* <input type="submit" className='border-2 border-primary px-6 py-3 rounded-full block' /> */}
            <button
              type="submit"
              disabled={state.submitting}
              className="button-89 cursor-pointer"
              role="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
