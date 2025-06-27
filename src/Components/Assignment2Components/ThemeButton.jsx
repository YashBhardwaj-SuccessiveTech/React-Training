'use client'

import React from 'react'

const ThemeButton = ({theme, onClick}) => {
  return (
    <div>
        <button
        theme={theme}
        onClick={onClick}

        >Theme</button>
    </div>
  )
}

export default ThemeButton