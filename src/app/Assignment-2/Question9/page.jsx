// 9.Create a theme switcher application using the useContext hook.
// Create a context to manage the current theme (e.g., light or dark).
// Provide a button to toggle between the two themes.
// Use the useContext hook to access the theme value and update it.
// Apply different styles and colors to components based on the selected theme.
"use client"

import ThemeSwitcher from '@/Components/Assignment2Components/ThemeSwitcher';
import React, { createContext, useState } from 'react'

const ThemeContext = createContext();

export default function App() {
    const [ theme, setTheme ] = useState("light");

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        <div style={{backgroundColor:theme==="light"? "white":"black", padding:"200px", flex:"centre", alignItems:"centre"}}>
            <ThemeSwitcher/>
        </div>
    </ThemeContext.Provider>
  )
}

export {ThemeContext};

