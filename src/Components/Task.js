import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";

function Task({id,text, day, onDelete}) {


  return (
    <>
        <div className = 'flex justify-around text-xl text-slate-600 bg-amber-300 font-medium p-4 mx-60 mb-2'>
           <p className= 'flex-1'>{text}</p>
           <input className = 'h-6 w-6 mt-1 mr-10' type = 'checkbox' />
           <p className = 'mx-10'>{day}</p>
           <button onClick={() => onDelete(id)}><AiOutlineDelete  className='h-7 w-7'/></button>
        </div>
    </>
  )
}

export default Task