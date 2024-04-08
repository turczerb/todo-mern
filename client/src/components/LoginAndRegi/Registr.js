import { useState } from "react";
import styled from "styled-components"; //css
import { Navigate } from "react-router-dom";

const Regi = () => {
  const [userName, setUsername] = useState("");
  console.log(userName);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:3001/register", {
        method: "POST",
        body: JSON.stringify({ userName, password, email }), // converts JavaScript objects into strings
        headers: {
          "Content-Type": "application/json",
        },
      });
      setRedirect(true);
      if (redirect) {
        return <Navigate to={"/login"} />;
      }
    } catch (err) {
      alert("Regi failed ");
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Registration</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="username"
          value={userName}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="password again"
          value={passwordAgain}
          onChange={(event) => setPasswordAgain(event.target.value)}
        />
      </div>
      <div>
        <button disabled={!userName || !email || !password || !passwordAgain}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Regi;
