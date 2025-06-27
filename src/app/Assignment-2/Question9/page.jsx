// 9.Create a theme switcher application using the useContext hook.
// Create a context to manage the current theme (e.g., light or dark).
// Provide a button to toggle between the two themes.
// Use the useContext hook to access the theme value and update it.
// Apply different styles and colors to components based on the selected theme.

'use client'
import ThemeButton from "@/Components/Assignment2Components/ThemeButton";
import { ThemeContext } from "@/context/Theme";
import React, { useContext } from "react";

function page() {
  const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <div>
      <ThemeButton theme={theme} onClick={toggleTheme}/>
    </div>
  );
}

export default page;
