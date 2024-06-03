import { Link } from "react-router-dom"; //tudjunk másik oldalra jump
import LoginAndRegi from "./LoginAndReg";
import styled from "styled-components"; //css
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Hooks/UserContext";

const TitleContainer = styled.div`
  padding: 10px;
  background-color: rgb(215, 197, 244);
`;

const TitleInnerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const AppTitle = styled(Link)`
  text-decoration: none;
  font-size: 30px;
  color: black;
`;

const LogiRegiContainer = styled.div`
  display: flex;
  justify-content: right;
  padding-right: 30px;
`;

const SubNavbar = styled.div`
  background-color: yellow;
`;

const SubNavTitleConainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const SubNavTitle = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 8 px;
  display: flex;
  justify-content: center;
`;

const NavBar = () => {
  //linkto linkeket majd ujra jell írni
  const { userInfo } = useContext(UserContext);
  console.log(userInfo + "userinfo data honnét jön?");

  const userName = userInfo?.userName;

  return (
    <div>
      <TitleContainer>
        <TitleInnerContainer>
          <AppTitle to="/">My ToDo App</AppTitle>
        </TitleInnerContainer>
        <LogiRegiContainer>
          <LoginAndRegi />
        </LogiRegiContainer>
      </TitleContainer>

      {userName && (
        <SubNavbar>
          <SubNavTitleConainer>
            <div></div>
            <SubNavTitle to="/login">My todo List(s)</SubNavTitle>
            <SubNavTitle to="/create">Create new todo List</SubNavTitle>
          </SubNavTitleConainer>
          <div></div>
        </SubNavbar>
      )}
      {!userName && <></>}
    </div>
  );
};

export default NavBar;
