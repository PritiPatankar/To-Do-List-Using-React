"use client"
import React, { useState } from 'react'

const page = () => {

  const [title, settitle] = useState("");
  const [description, setdescription] = useState("")
  const [mainTask, setmainTask] = useState([])

  let renderTask = <h1>No Task Available</h1>;

  if(mainTask.length>0){
    renderTask = mainTask.map((t, i) =>{
      return(
        <li key={i}>
        <div className='p-4 flex justify-between'>
        <div>
          <h5 className='text-2xl font-bold'>{t.title}</h5>
          <h6 className='text-xl'>{t.description}</h6>
        </div>

      
          
        <button onClick={()=>deleteHandler(i)} className='bg-red-400 text-white px-5 py-1 rounded font-bold'>Delete</button>
        </div>
        </li>
      );
    })
  }
  

//previously, i wrote whole rendertask below submithandler due to which i was getting renderaTask not defined error. Which means that i should take care of order. Javascript compiles line by line.

  const submitHandler = (e) =>{
    e.preventDefault();  //to avoid task from reloading
    setmainTask([...mainTask, {title, description}]);
    settitle("");
    setdescription("");
  }

  const deleteHandler = (i) =>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  }

  return (
    <>
    <div>
      <h1 className='bg-slate-900 p-5 font-bold text-center text-cyan-50 text-5xl'>Priti's To-Do List</h1>
    </div>
    <form onSubmit={submitHandler}>
      <input
        placeholder='Enter Task Title Here' type='text' className='text-2xl border-2 border-slate-900 px-4 py-2 m-8'
        value={title} onChange={(e)=>{settitle(e.target.value)}}
      />
      <input
        placeholder='Add Task Description' type='text' className='text-2xl border-2 border-slate-900 px-4 py-2 m-8'
        value={description} onChange={(e)=>{setdescription(e.target.value)}}
      />
      <button  className='bg-slate-900 text-cyan-50 rounded text-2xl px-4 py-3 font-bold m-5'>Add Task</button>
    </form>
    <hr/>
    <div className='p-8 bg-slate-200'><ul>{renderTask}</ul></div>
    </>
  )
}

export default page
