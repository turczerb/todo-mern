import { useState } from "react";
import { useForm } from "react-hook-form"; //password matches future
import styled from "styled-components"; //css
import { Navigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"; //  we can use formSchema with hook form thx to this
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const formSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

const Regi = () => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const [passwordAgain, setPasswordAgain] = useState("");
  const [redirect, setRedirect] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const handleSub = async (e, data) => {
    /* e.preventDefault(); */
    console.log({ data });

    const response = await fetch(
      "http://localhost:3001/auth/registration",

      {
        method: "POST",
        body: JSON.stringify({ userName, password, email }), // converts JavaScript objects into strings
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("tartalom" + response);
    if (response.status !== 200) {
      alert("registration failed");
    } else {
      //alert("registration success");
      setRedirect(true);
    }
  };
  if (redirect) {
    return <Navigate to={"/login"} />;
  }

  return (
    <form onSubmit={handleSubmit(handleSub)}>
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
          {...register("email")}
          type="email"
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <input
          {...register("password")}
          type={type}
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
        />
        <span class="flex justify-around items-center" onClick={handleToggle}>
          <Icon class="absolute mr-10" icon={icon} size={18} />
        </span>
        <p>{errors.password?.message}</p>
      </div>
      <div>
        <input
          {...register("confirmPassword")}
          type="password"
          placeholder="password again"
          value={passwordAgain}
          onChange={(event) => setPasswordAgain(event.target.value)}
          required
        />
        <p>{errors.confirmPassword?.message}</p>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Regi;
