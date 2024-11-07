import React, { useState } from 'react';
import bandsSupport from '../../textContent/bandsSupport.json';

import "./switchText.css"


const SwitchText = () => {
    const [language, setLanguage] = useState('en');
    console.log(language.toLocaleUpperCase ? "UA" : "EN");
    return (
        <div className="switch-text">
            <h3>{bandsSupport[language].header}</h3>
            <p className='text'>
                {bandsSupport[language].text.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                    {line}
                    <br />
                    </React.Fragment>
                ))}
            </p>
            <button 
                className='small-button' 
                onClick={() => setLanguage(language === 'en' ? 'ua' : 'en')}
            >
                {language ? "UA" : "EN"}
            </button>
        </div>
    );
};

export default SwitchText;
