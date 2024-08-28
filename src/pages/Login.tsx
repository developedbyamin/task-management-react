import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && email) {
      localStorage.setItem("data", JSON.stringify({ username, email }));
      navigate("/dashboard");
      return;
    } else {
      ref.current!.innerText = "Please fill in the form!";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Login</button>
      <div ref={ref}></div>
    </form>
  );
};

export default Login;
