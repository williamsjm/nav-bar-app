import React from "react";
import { NavContainer, LogoText, NavList } from "./NavBar.styles";
import LanguageButton from "../LanguageButton/LanguageButton";

const NavBar: React.FC = () => {
  return (
    <NavContainer>
      <LogoText>N5</LogoText>
      <NavList>
        <li>
          <a href="/rick-and-morty">Rick and Morty</a>
        </li>
        <li>
          <a href="/harry-potter">Harry Potter</a>
        </li>
      </NavList>
      <LanguageButton />
    </NavContainer>
  );
};

export default NavBar;
