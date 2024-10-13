import React from 'react';

const LanguageToggle = ({ toggleLanguage, currentLanguage }) => (
    <button className="languageButton" onClick={toggleLanguage}>
        {currentLanguage === "es" ? "Cambiar a Inglés" : "Switch to Spanish"}
    </button>
);

export default LanguageToggle;
