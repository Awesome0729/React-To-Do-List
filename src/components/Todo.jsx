import React, { useEffect, useRef, useState } from 'react'
import Icon from '../assets/ToDoListIcon.png'
import TodoItems from './TodoItems'

const Todo = () => {

    const [todoList, setTodoList]= useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")): []);

    const inputRef = useRef();

    const add = ()=>{
        const inputText = inputRef.current.value.trim();

        if (inputText === ""){
            return null;
        }

        const newTodo= {
            id: Date.now(),
            text: inputText,
            isComplete: false,
        }
        setTodoList((prev)=>[...prev, newTodo]);
        inputRef.current.value = "";
    }
    const deleteTodo = (id)=>{
        setTodoList((prevTodos)=>{
            return prevTodos.filter((todo)=> todo.id !== id)
        })
    }

    const toggle = (id)=>{
        setTodoList((prevTodos)=>{
            return prevTodos.map((todo)=>{
                if(todo.id ===id){
                    return {...todo, isComplete : !todo.isComplete}
                }
                return todo;
            })
        })
    }

    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todoList))
    },[todoList])

    return (
        <div className='bg-white place-self-center w-11/12 max-w-md
        flex flex-col p-7 min-h-[500px] rounded-xl'>

            {/*---------------------Title--------------------*/}
            <div className=' bg-green-800 flex -ml-7 -mr-7 -mt-7 h-25 items-center gap-2 rounded-xl'>
                <img src={Icon} className='ml-20 w-15' ></img>
                <h1 className='text-5xl font-bold text-black'>To Do List</h1>
                
            </div>  
            
            {/*---------------------InputField--------------------*/}
            <div className='flex items-center my-2 bg-gray-300 rounded-full'>
                <input ref={inputRef} type='text' className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate--600' placeholder='Enter your Task'/>
                <button onClick={add} className='border-none  rounded-full bg-blue-500 w-24 h-14  text-white text-large font-medium'> ADD </button>
            </div>
        
            {/*---------------------TodoList--------------------*/}

            <div className='mt-2'>
            {todoList.map((item,index)=>{
                return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo = {deleteTodo} toggle = {toggle} />
            })}
            </div>




        </div>
  )
}

export default Todo