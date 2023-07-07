// Overview.js

import React, { useState } from "react";


const Overview = (props) => {
  const { tasks, deleteTask, editTask, onEdit} = props;

//   function clicked(task){
//     console.log(task);

//   }



  return (
    <ul>
      {tasks.map((task) => {
        return <li key={task.id}>
            {
                task.edit ? (
                    <span>
                        <input type = "text" className = "editing"></input>
                        <button onClick={()=>{onEdit(task, document.querySelector(".editing").value)}}>Re</button>
                    </span>
                  ) : (
                    <span>
                        {String(task.num) + " "+ String(task.text)} 
                        <button onClick = {()=>deleteTask(task)}>delete</button>
                        <button onClick={()=>editTask(task)}>Edit</button>
                    </span>
                    
                  )
            }
            </li>;
      })}
    </ul>
  );
};

export default Overview;