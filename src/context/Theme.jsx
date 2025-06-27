"use client"

import React, { Children, createContext, useState } from 'react'

export const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme : () => {}
});

export function Theme() {
  const [theme, setTheme] = useState('Light');
   const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
   }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {Children}
    </ThemeContext.Provider>
  )
}

