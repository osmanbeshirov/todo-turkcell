import React, { useState } from 'react';
import { Todo } from '.';
import { useTodo } from '../../Context/TodoContext';


interface IPropsList {
    todo: Todo
}

const ListItem: React.FC<IPropsList> = ({ todo }) => {

    const { todos, setTodos, addToList, toggleTodo, removeTodo } = useTodo()



    const handleChecked = (id: string) => {
        // const cloned_todos = [...todos]
        // const cloned = cloned_todos.find((item: Todo) => item.id === todo.id);

        // cloned.completed = !cloned.completed;

        // setTodos(cloned_todos)

        toggleTodo(id)

    }

   

    return (
        <li className={`${todo.completed ? 'completed' : null}`}>
            <div className='view'>
                <input className='toggle' onChange={() => handleChecked(todo.id)} type="checkbox" checked={todo.completed} />
                <label>{todo.text}</label>
                <button className='destroy' onClick={() => removeTodo(todo.id)}></button>
            </div>
        </li>
    )
}

export default ListItem