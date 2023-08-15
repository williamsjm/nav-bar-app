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
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #d4d4d4;
    }
  }

  .active-link {
    color: #ff4500;
  }
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1400px;
`;
