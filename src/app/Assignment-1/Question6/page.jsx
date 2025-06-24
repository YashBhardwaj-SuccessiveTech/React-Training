import Button from '@/Components/Assignment1Components/Button'
import React from 'react'

function page() {
    let text="I am a Button";
    let color="Blue";
  return (
    <div>
        <p>Create a functional component named Button that accepts props for text and color.
            Style the button using inline styles or CSS classes based on the color prop.
            Import and render the Button component in the App component with different text and color props.
        </p>

        <br></br>

        <Button text={text} color={color}/>
    </div>
  )
}

export default page

