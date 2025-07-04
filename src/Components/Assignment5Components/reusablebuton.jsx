"use client"
import { useState } from "react";

const styles = {
  base: {
    padding: '10px 16px',
    border: 'none',
    borderRadius: '4px',
    fontWeight: '600',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  variants: {
    primary: {
      backgroundColor: '#0070f3',
    },
    secondary: {
      backgroundColor: '#6c757d',
    },
    danger: {
      backgroundColor: '#dc3545',
    },
  },
  hoverColors: {
    primary: '#0059c1',
    secondary: '#545b62',
    danger: '#b52a37',
  },
};

export const Button = ({ children, variant = 'primary', onClick, style = {}, ...props }) => {
  const [hovered, setHovered] = useState(false);

  const combinedStyle = {
    ...styles.base,
    ...styles.variants[variant],
    ...(hovered && { backgroundColor: styles.hoverColors[variant] }),
    ...style, // Allow custom styles via props
  };

  return (
    <button
      style={combinedStyle}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      {children}
    </button>
  );
};

// export default Button;