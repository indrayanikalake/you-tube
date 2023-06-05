import React, { useState } from 'react'
import GoalForm from './GoalForm';
import './newgoal.css'

const NewGoal = () => {
    const [updatedGoals, setUpdateGoals]=useState([]);
    const saveExpenseHandler=(enteredData)=>{
        const enteredValue=enteredData.text;
        console.log(enteredValue);
     
       setUpdateGoals((prevGoals)=>{
        return [enteredValue,...prevGoals];
       })
  }
  console.log(updatedGoals);
  return (
    <div>
      <GoalForm  onSave={saveExpenseHandler}/>
      {updatedGoals &&(
        <div >
          {updatedGoals.map((goal)=>{
            return <p className='goal' 
            key={goal.id}
            id={goal.id}
            >{goal}</p>
          })}
        </div>
      )

      }

      </div>
  )
}
export default NewGoal;