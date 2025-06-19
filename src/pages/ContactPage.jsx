import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8f5f2] text-[#091b1e] font-serif">
      {/* Header */}
      <header className="bg-[#091b1e] text-[#ebdfd4] px-6 py-4 flex justify-between items-center">
        <Link to={"/"}>
          <h1 className="text-4xl font-lavish">Zufos</h1>
        </Link>
        <button
          onClick={() => navigate("/")}
          className="bg-[#133b3d] px-4 py-2 rounded hover:bg-[#0f2f30] text-white text-lg"
        >
          Home
        </button>
      </header>

      {/* Content */}
      <div className="max-w-6xl mx-auto p-8">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Get in Touch</h3>
              <p>
                Whether it’s a question, feedback, or reservation inquiry —
                we're here to help. Reach out via phone, email, or the form.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                📍 <strong>Address:</strong> 123 Zufos Lane, Foodville, FL 32100
              </p>
              <p>
                📞 <strong>Phone:</strong>{" "}
                <a
                  href="tel:+1234567890"
                  className="text-[#133b3d] hover:underline"
                >
                  +1 (234) 567-890
                </a>
              </p>
              <p>
                ✉️ <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@zufos.com"
                  className="text-[#133b3d] hover:underline"
                >
                  info@zufos.com
                </a>
              </p>
              <p>
                🕒 <strong>Hours:</strong> Mon–Sun: 12:00 PM – 10:00 PM
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white shadow-md border p-6 rounded-xl space-y-4">
            <div>
              <label className="block font-semibold mb-1">Name</label>
              <input
                type="text"
                required
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Message</label>
              <textarea
                required
                rows="5"
                className="w-full border px-3 py-2 rounded"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#133b3d] text-white px-6 py-3 rounded text-lg uppercase hover:bg-[#0f2f30] w-full"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Optional: Google Map */}
        <div className="mt-16 rounded overflow-hidden shadow-md">
          <iframe
            title="Zufos Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.256265732319!2d-122.41941568468124!3d37.77492977975954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c0c4b2c39%3A0x4c409d498c9f6c59!2sYour%20Restaurant!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
