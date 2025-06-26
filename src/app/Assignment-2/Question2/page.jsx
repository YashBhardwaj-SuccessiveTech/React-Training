// 2.Create a functional component called PersonForm.
// Use the useState hook to manage three state variables: firstName, lastName, and age, all initialized to empty strings.
// Render three input fields for the user to enter their first name, last name, and age.
// As the user types, update the respective state variables.
// Display the entered information below the input fields.

import PersonForm from '@/Components/Assignment2Components/PersonForm'
import React from 'react'

function page() {
  return (
    <div>
        <p>Question-2</p>
        <br />
        <p>Create a functional component called PersonForm.
           Use the useState hook to manage three state variables: firstName, lastName, and age, all initialized to empty strings.
           Render three input fields for the user to enter their first name, last name, and age.
           As the user types, update the respective state variables.
           Display the entered information below the input fields.</p>
        <PersonForm/>
    </div>
  )
}

export default page