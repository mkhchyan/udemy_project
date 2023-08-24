import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log({ name, email, password });
  };

  return (
    <section className="container mx-auto my-10">
      <h1 className="text-center text-4xl tracking-wide font-bold text-purple-600 bg-primary">
        Register
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 pb-5 mt-10 xl:w-[30%] mx-auto"
      >
        <input
          type="text"
          className="border border-neutral-400 focus:border-purple-600 p-4 outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          required
        />

        <input
          type="email"
          className="border border-neutral-400 focus:border-purple-600 p-4 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          required
        />

        <input
          type="password"
          className="border border-neutral-400 focus:border-purple-600 p-4 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
        />

        <button
          type="submit"
          className="bg-purple-600 px-6 py-3 text-lg tracking-wide uppercase text-white"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Register;
