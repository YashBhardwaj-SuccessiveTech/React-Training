// 14.create a component that displays a list of tasks.
// Each task has a "Complete" button.
// Implement a feature where clicking the "Complete" button marks the task as completed.
// Use the useCallback hook to create dynamic callback functions for each task.
// Ensure that clicking the "Complete" button for one task doesn't trigger unnecessary re-renders for other tasks.
// "use client"

// import React, { useCallback, useState } from 'react'

// const ListTasks= ()=> (React.memo)(()=>{
//     const tasks = ["task1","task2","task3", "task4"];
//     const [taskstatus, setTaskStatus] = useState(false);

//     const updateTaskStatus= useCallback(()=>{
//         if(taskstatus==false){
//             setTaskStatus(true);
//         }else{
//             setTaskStatus(false);
//         }
//     },tasks)

//   return (
//     <div>
//         <ul>
//             {tasks.map((task,index)=>(
//                 <li key={index}>{task}
//                 <button onClick={updateTaskStatus} style={{backgroundColor: taskstatus==true? "green": "red"}}>Complete</button>
//                 </li>
//             ))}
//         </ul>
//     </div>
//   )
// })

// export default ListTasks

"use client"

import React, { useCallback, useState } from 'react';

function ListTasks() {
  const tasks = ["task1", "task2", "task3", "task4"];
  const [status, setStatus] = useState({}); // stores completion status by index

  // dynamic callback using useCallback
  const handleComplete = useCallback((index) => {
    setStatus((prev) => ({
      ...prev,
      [index]: !prev[index] // toggle completed status
    }));
  }, []);

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button
              onClick={() => handleComplete(index)}
              style={{ backgroundColor: status[index] ? "green" : "red", marginLeft: "10px" }}
            >
              {status[index] ? "Completed" : "Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListTasks;
