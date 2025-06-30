// 10.Develop a language switcher application using the useContext hook.
// Create a context to manage the current language (e.g., English or Spanish).
// Provide buttons to switch between languages.
// Use the useContext hook to access the current language value.
// Display different language versions of the application's content.

"use client"

import LanguageSwitcher from '@/Components/Assignment2Components/LanguageSwitcher';
import React, { createContext, useState } from 'react'


const LanguageContext = createContext();

export default function page(){
  const [language, setLanguage] = useState("english");
  return(
    <LanguageContext.Provider value={{language, setLanguage}}>
      <div>
        <LanguageSwitcher/>
      </div>
    </LanguageContext.Provider>
  )

}

export {LanguageContext}
