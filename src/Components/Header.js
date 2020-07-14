import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  @media all and (min-width: 320px) and (max-width: 500px) {
    height: 180px;
  }
`;

const List = styled.ul`
  display: flex;
  @media all and (min-width: 320px) and (max-width: 500px) {
    width: 100%;
    display: block;
  }
`;

const Logo = styled.li`
  font-size: 2rem;
  width: 100px;
  margin-left: 2rem;
  margin-right: 5rem;
  font-weight: bold;
  color: red;
  @media all and (min-width: 320px) and (max-width: 500px) {
    width: 100%;
    text-align: center;
    margin-left: 0;
  }
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid
    ${(props) => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
  @media all and (min-width: 320px) and (max-width: 500px) {
    width: 100%;
  }
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Logo current={pathname === "/"}>
        <SLink to="/">YEFLIX</SLink>
      </Logo>
      <Item current={pathname === "/"}>
        <SLink to="/">영화</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">방송</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">검색</SLink>
      </Item>
    </List>
  </Header>
));
