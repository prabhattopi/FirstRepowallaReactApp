import React from 'react'
import {Todo} from "./Todo";


export const Todos = (props) => {
    let myStyle={
        minHeight:"70vh"
    }
  return (
    <div className='container' style={myStyle}>
        <h3 className='text-center my-3'>
            Todos List
        </h3>
        {props.todos.length===0?"No Todos To Display":
        props.todos.map((el)=>{
            
            return <Todo todo={el} key={el.sno} onDelete={props.onDelete}/>
            //props.todo.sno because unikey key
         
         
            
          

        })
        }
  
    </div>
  )
}
