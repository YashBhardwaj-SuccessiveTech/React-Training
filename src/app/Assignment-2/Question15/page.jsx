// 15.Create a functional component named StudentList that displays a list of student names..
// Define an array of student names as a constant within the component.
// Use the useMemo hook to memoize the list of student names.
// Render the list of student names on the screen.
// Include a button that, when clicked, appends a new student name to the list.

import StudentList from '@/Components/Assignment2Components/StudentList'
import React from 'react'

function page() {
  return (
    <div>
        <p>Question-15</p>
        <br/>
        <StudentList/>
    </div>
  )
}

export default page