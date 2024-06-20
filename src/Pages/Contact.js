import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    emailjs.sendForm('service_h9wzf94', 'template_p06e7ij', data, '_v1Y6oJzcCFc2CllO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <main className="container mx-auto max-width section py-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-5">Contact Me</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto bg-white p-8 shadow-md rounded">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              {...register("name", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your name"
            />
            {errors.name && <p className="text-red-500 text-xs italic">Please enter your name.</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your email"
            />
            {errors.email && <p className="text-red-500 text-xs italic">Please enter your email.</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              {...register("message", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your message"
              rows="5"
            ></textarea>
            {errors.message && <p className="text-red-500 text-xs italic">Please enter a message.</p>}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Connect with me</h2>
        <div className="flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/your-linkedin-id" target="_blank" rel="noopener noreferrer" className="text-blue-600">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://github.com/your-github-id" target="_blank" rel="noopener noreferrer" className="text-gray-800">
            <i className="fab fa-github fa-2x"></i>
          </a>
          {/* Add more icons as needed */}
        </div>
      </div>
    </main>
  );
}

export default Contact;
