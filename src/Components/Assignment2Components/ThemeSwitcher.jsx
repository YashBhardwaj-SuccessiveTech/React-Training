import { ThemeContext } from '@/app/Assignment-2/Question9/page'
import React, { useContext } from 'react'

function ThemeSwitcher() {
    const {theme, setTheme} = useContext(ThemeContext);

    function handleTheme(){
        if(theme === "dark"){
            setTheme("light")
        }else{
            setTheme("dark")
        }
    }

  return (
    <div>
        <button onClick={handleTheme}>Change Theme</button>
    </div>
  )
}

export default ThemeSwitcher
