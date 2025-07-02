"use client"
import { LanguageContext } from '@/app/Assignment-2/Question10/page'
import React, { useContext } from 'react'

function LanguageSwitcher() {
    const {language, setLanguage} = useContext(LanguageContext);

  return (
    <main>
        <h1>{language === "english" ? "Hello" : "Hola"}</h1>
        <button
          onClick={()=>{
            if(language === "english"){
                setLanguage("spanish");
            }
          }}
        >
            Translate to Spanish
        </button>
        <button
          onClick={()=>{
            if(language=="spanish"){
                setLanguage("english");
            }
          }}
        >
            Translate to English
        </button>
    </main>
  )
}

export default LanguageSwitcher