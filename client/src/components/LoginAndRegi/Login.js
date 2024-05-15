import styled from "styled-components"; //css
import { useCookies } from "react-cookie"; //mire jó?
import { Navigate } from "react-router-dom";
import { UserContext } from "../Hooks/UserContext";
import { useContext, useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [, setCookies] = useCookies(["access_token"]);
  const { setUserInfo } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault(); //wont fresh the website
    // itt kell egy POST req
    console.log("tarkabab");
    const response = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      body: JSON.stringify({ userName, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      //if we have cookie we can save it in cred
    });
    console.log("tartalom" + response);
    /* if (response.status !== 200) {
      alert("registration failed");
    } else {
      //alert("registration success");
      
      setRedirect(true);
    } */

    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      console.log("lefut ez az ág??");
      alert("wrong cred");
    }
  };
  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Login</h1>
        <div>
          <input
            type="text"
            placeholder="username"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
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
          <button disabled={!userName || !password}>Login</button>
        </div>
      </div>
    </form>
  );
};

export default Login;
