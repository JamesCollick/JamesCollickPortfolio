import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();

    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.subject,
      title: "Website Contact Submission", // You can customize this
    };

    emailjs
      .send(
        "service_2ltuey3",      // Replace this
        "template_80k50wp",     // Replace this
        templateParams,
        "Y8cU0kzbOlXOBaYCA"       // Replace this
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          e.target.reset();
          alert("Message sent successfully!");
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <>
      <form className="contact_form" onSubmit={handleSubmit(onSubmit)}>
        <div className="first">
          <ul>
            <li>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Name"
              />
              {errors.name && errors.name.type === "required" && (
                <span>Name is required</span>
              )}
            </li>

            <li>
              <input
                {...register("email", {
                  required: "Email is Required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email format",
                  },
                })}
                type="email"
                placeholder="Email"
              />
              {errors.email && <span role="alert">{errors.email.message}</span>}
            </li>

            <li>
              <textarea
                {...register("subject", { required: true })}
                placeholder="Message"
              ></textarea>
              {errors.subject && <span>Message is required.</span>}
            </li>
          </ul>
        </div>

        <div className="tokyo_tm_button">
          <button type="submit" className="white-fill-bg fill-black">
            Send Message
          </button>
        </div>
      </form>
    </>
  );
};

export default Contact;