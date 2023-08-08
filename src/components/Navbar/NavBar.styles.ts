import styled from "styled-components";

export const NavContainer = styled.nav`
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const LogoText = styled.span`
  font-size: 2rem;
  color: white;
  font-weight: bold;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;

  li a {
    color: white;
    text-decoration: none;
  }
`;

export const Container = styled.div`
  
  margin-left: auto;
  margin-right: auto
  max-width: 1400px;
`;
