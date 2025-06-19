import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { Tabs } from "../components/ShiftingDropDown";

const AccountPage = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    photo: "",
  });

  const [uploading, setUploading] = useState(false);

  const handleChange = async (e) => {
    const { name, value, files } = e.target;

    if (name === "photo" && files[0]) {
      const file = files[0];
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "zufosRes"); // your unsigned preset

      setUploading(true);
      try {
        const res = await fetch(
          "https://api.cloudinary.com/v1_1/djqu3woz5/image/upload", // your cloud name
          {
            method: "POST",
            body: data,
          }
        );
        const result = await res.json();
        setForm((prev) => ({ ...prev, photo: result.secure_url }));
        setUploading(false);
      } catch (err) {
        console.error("Cloudinary upload failed:", err);
        setUploading(false);
      }
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone } = form;

    if (!name || !email || !phone) {
      alert("Please fill in all required fields.");
      return;
    }

    setUser(form); // store in context
    localStorage.setItem("user", JSON.stringify(form)); // persist across refresh
    navigate("/serving-option");
  };

  return (
    <div className="h-screen w-full overflow-y-hidden">
      {/* Header */}
      <div className="flex flex-wrap">
        <section className="mx-auto w-full">
          <nav className="flex flex-col lg:flex-row justify-between items-center text-white w-full bg-[#091b1e]">
            <Link to="/">
              <div className="px-5 xl:px-12 py-4">
                <div className="font-lavish text-4xl lg:text-5xl text-[#ebdfd4] transition-all duration-500">
                  Zufos
                </div>
              </div>
            </Link>
            <div className="px-5 py-4 font-serif text-lg lg:text-xl text-[#ebdfd4] border border-[#ebdfd4] w-full lg:w-[30%] flex justify-center items-center">
              <div className="flex justify-evenly w-full items-center space-x-4 text-center">
                <Link to="/order">Order Online</Link>
                <div className="relative group">
                  <div className="text-2xl select-none"> & </div>

                  <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block z-50">
                    <Tabs />
                  </div>
                </div>
                <Link to="/reservation">Reservations</Link>
              </div>
            </div>
          </nav>
        </section>
      </div>
      <div className="min-h-screen bg-[#102f35] flex items-center justify-center p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-[#ebdfd4] p-8 rounded-md w-full max-w-md space-y-4 font-serif"
        >
          <h2 className="text-2xl text-center text-[#091b1e]">
            Create Your Account
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
            className="w-full"
          />

          {uploading && (
            <p className="text-center text-sm text-blue-500">Uploading...</p>
          )}

          {form.photo && (
            <img
              src={form.photo}
              alt="Uploaded"
              className="w-20 h-20 object-cover rounded-full mx-auto"
            />
          )}

          <button
            type="submit"
            className="bg-[#091b1e] text-[#ebdfd4] px-6 py-2 rounded w-full hover:opacity-90"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountPage;
