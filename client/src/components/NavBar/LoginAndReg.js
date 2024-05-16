import styled from "styled-components"; //css
import { Link } from "react-router-dom"; //tudjunk másik oldalra jump
//itt kell a magic: ha be van lépve: clogout és username. ha nincs belépve: login/register
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Hooks/UserContext";
import { useNavigate } from "react-router-dom";

const LinkTitle = styled(Link)`
  text-decoration: none;
  color: black;
  margin: 20px;
  &:hover {
    border-left: 2px solid black;
  }
`;

const LoginAndRegi = () => {
  const navigate = useNavigate();
  const { setUserInfo, userInfo } = useContext(UserContext);
  // console.log("user info neve: " + userInfo.userName);

  //useEffect fetch
  //ez itt minek? lehet nem is kell
  useEffect(() => {
    fetch("http://localhost:3001/auth/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  const logout = () => {
    //we want to the cookie invalidate
    fetch("http://localhost:3001/auth/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo("");
    navigate("/");
  };

  const userName = userInfo?.userName;

  return (
    <div>
      {userName && (
        <>
          <LinkTitle> {userName} </LinkTitle>
          <LinkTitle onClick={logout}> Logout</LinkTitle>
        </>
      )}
      {!userName && (
        <>
          <LinkTitle to="/login"> Login </LinkTitle>
          <LinkTitle to="/registration"> Registration</LinkTitle>
        </>
      )}
    </div>
  );
};

export default LoginAndRegi;
