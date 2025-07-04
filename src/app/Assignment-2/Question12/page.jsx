// 12.Create a simple voting application using the useReducer hook.
// Set up a reducer to manage the votes for different options.
// Create buttons representing voting options.
// Use the useReducer hook to access the votes state and dispatch actions.
// Allow users to vote for their preferred options.
// Display the current vote count for each option.

import VotingApp from '@/Components/Assignment2Components/VotingApp'
import React from 'react'

function page() {
  return (
    <div>
        <p>Create a simple voting application using the useReducer hook.
            Set up a reducer to manage the votes for different options.
            Create buttons representing voting options.
            Use the useReducer hook to access the votes state and dispatch actions.
            Allow users to vote for their preferred options.
            Display the current vote count for each option.</p>
            <VotingApp/>
    </div>
    
    
  )
}
 
export default page