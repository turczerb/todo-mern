import { Link } from "react-router-dom"; //tudjunk másik oldalra jump
import LoginAndRegi from "./LoginAndReg";
import styled from "styled-components"; //css

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

const SubNavTitleConainer = styled.div``;

const SubNavTitle = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 8 px;
`;

const NavBar = () => {
  //linkto linkeket majd ujra jell írni

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

      <SubNavbar>
        <SubNavTitleConainer>
          <SubNavTitle to="/login">My todo List</SubNavTitle>
          <SubNavTitle to="/create">New todo List</SubNavTitle>
        </SubNavTitleConainer>
      </SubNavbar>
    </div>
  );
};

export default NavBar;
