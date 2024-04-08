import styled from "styled-components"; //css
import { Link } from "react-router-dom"; //tudjunk másik oldalra jump

const LinkTitle = styled(Link)`
  background-color: green;
`;

const LoginAndRegi = () => {
  return (
    <div>
      <LinkTitle to="/login"> Login /Logout</LinkTitle>
      <LinkTitle to="/registration"> Regi</LinkTitle>
      <div>Username</div>
    </div>
  );
};

export default LoginAndRegi;
