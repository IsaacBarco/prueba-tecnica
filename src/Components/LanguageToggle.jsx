import React from 'react';

const LanguageToggle = ({ toggleLanguage, currentLanguage }) => (
    <button className="languageButton" onClick={toggleLanguage}>
<<<<<<< HEAD
        {currentLanguage === "es" ? "Cambiar a Inglés" : "Switch to Spanish"}
=======
        {currentLanguage === "es" ? "EN" : "ES"}
>>>>>>> 5b32fe6 (Updating repo)
    </button>
);

export default LanguageToggle;
