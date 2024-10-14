import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e =>{
    e.preventDefault();
    const data = {
      firstName: name,
      email: email,
      password: password
    }
    console.log(data);
  }

  return (
    <div className="mt-32">
      <h1 className="text-3xl text-orange-600 text-center p-5">Contact Form</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-3 flex flex-col justify-center items-center gap-3 text-zinc-700">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
          className="px-3 py-2 rounded-md w-full outline-none focus:ring-2 focus:ring-orange-600"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          className="px-3 py-2 rounded-md w-full outline-none focus:ring-2 focus:ring-orange-600"
        />
        <input
          type="password"
          name="password"
          placeholder="*********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-3 py-2 rounded-md w-full outline-none focus:ring-2 focus:ring-orange-600"
          autoComplete="current-password"
        />
        <button type="submit" className="px-3 py-2 rounded-md bg-orange-600 text-white">Submit</button>
      </form>
      {console.log(name, email, password)}
    </div>
  );
}

export default ContactForm;