import React from "react";
import { useTranslation } from "react-i18next";
import { StyledButton } from "./LanguageButton.styles";

const LanguageButton: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
    window.dispatchEvent(new CustomEvent("set-language", { detail: newLang }));
  };

  return (
    <StyledButton onClick={toggleLanguage}>
      {i18n.language === "en" ? "ES" : "EN"}
    </StyledButton>
  );
};

export default LanguageButton;
