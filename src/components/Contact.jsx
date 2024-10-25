import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen  z-[-2] w-screen transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
        <form className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full p-2 mt-2 border rounded"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 mt-2 border rounded"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              className="w-full p-2 mt-2 border rounded"
              placeholder="Your Message"
              rows="5"
            ></textarea>
          </div>
          <button className="w-full py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
