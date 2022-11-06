import React from 'react';
import { Todo } from '.';


interface IPropsList {
    todo: Todo
}

const ListItem: React.FC<IPropsList> = ({ todo }) => {


    return (

        <li  className={`${todo.completed ? 'completed' : null}`}>
            <div className='view'>
                <input className='toggle' type="checkbox" checked={todo.completed} />
                <label>{todo.text}</label>
                <button className='destroy'></button>
            </div>
        </li>
    )
}

export default ListItem