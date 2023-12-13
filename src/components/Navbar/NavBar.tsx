import React from "react";
import * as singleSpa from "single-spa";
import { Container, NavContainer, LogoText, NavList } from "./NavBar.styles";
import LanguageButton from "../LanguageButton/LanguageButton";

const NavBar: React.FC = () => {
  const isHomePageActive =
    singleSpa.getAppStatus("@williamsjm/home-page") === "MOUNTED";
  const isHarryPotterActive =
    singleSpa.getAppStatus("@williamsjm/harry-potter") === "MOUNTED";
  const isRickAndMortyActive =
    singleSpa.getAppStatus("@williamsjm/rick-and-morty") === "MOUNTED";

  return (
    <NavContainer data-testid="navBar">
      <LogoText>N5</LogoText>
      <NavList>
        <li>
          <a
            href="/home"
            className={isHomePageActive ? "active-link" : ""}
            data-testid="navLink"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/rick-and-morty"
            className={isRickAndMortyActive ? "active-link" : ""}
            data-testid="navLink"
          >
            Rick and Morty
          </a>
        </li>
        <li>
          <a
            href="/harry-potter"
            className={isHarryPotterActive ? "active-link" : ""}
            data-testid="navLink"
          >
            Harry Potter
          </a>
        </li>
      </NavList>
      <LanguageButton />
    </NavContainer>
  );
};

export default NavBar;
