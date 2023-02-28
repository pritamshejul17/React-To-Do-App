import React from 'react'
import { useState } from 'react';

function Form({ onAdd }) {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        onAdd({text, day});
        setText('');
        setDay('')
    }

  return (
    <>
        <div className = 'flex justify-center'>
            <form className='text-xl' onSubmit = { onSubmit }>
                <label>To Do's </label>
                <input type = 'text' placeholder='Activity description' value = {text}  onChange={(e) => setText(e.target.value)} className = "m-4 border-2 border-stone-300 p-4"></input>
                <label>Day </label>
                <input type='date' placeholder = '' value = {day} onChange = {(e) => setDay(e.target.value)} className = 'm-4 border-2 border-stone-300 p-4'></input>
                <button type='submit' className = 'm-4 text-white bg-black text-base p-3 rounded-md'>Add Task</button>
            </form>
        </div>
    </>
  )
}

export default Form