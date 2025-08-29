import React from 'react'
import check_icon from '../assets/Check.png'
import uncheck_icon from '../assets/Uncheck.png'
import delete_icon from '../assets/TrashCan.png'

const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2 bg-gray-200 rounded-xl h-8 ml-5 -mt-1'>
        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer -ml-7.5'>
            <img className='w-7' src={isComplete ? check_icon : uncheck_icon} alt=''/>
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}`}>{text}</p>

        </div>
        <img onClick={()=>{deleteTodo(id)}}src={delete_icon} className='w-7 cursor-pointer'/>

    </div>
  )
}

export default TodoItems