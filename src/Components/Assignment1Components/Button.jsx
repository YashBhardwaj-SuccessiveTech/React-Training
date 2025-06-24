// 6.Create a functional component named Button that accepts props for text and color.
// Style the button using inline styles or CSS classes based on the color prop.
// Import and render the Button component in the App component with different text and color props.

import React from "react";

export default function Button(props) {
  let color = props.color;
  let text = props.text;
  return (
    <div>
      <button style={{ backgroundColor: color }}> {text} </button>
    </div>
  );
}
