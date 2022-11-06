import React, { useContext } from 'react';
import { useTodo } from '../Context/TodoContext';

const List = () => {
    const { todos, addToList } = useTodo();

    type Todo = {
        id: number,
        text: string,
        completed: boolean
    }


    return (
        <ul className='todo-list'>

            {
                todos.map((todo: Todo) => (
                    <li key={todo.id} className={`${todo.completed ? 'completed' : null}`}>
                        <div className='view'>
                            <input className='toggle' type="checkbox" checked={todo.completed}/>
                            <label>{todo.text}</label>
                            <button className='destroy'></button>
                        </div>
                    </li>
                ))
            }


            {/* 
            <li>
                <div className='view'>
                    <input className='toggle' type="checkbox" />
                    <label>Learn React</label>
                    <button className='destroy'></button>
                </div>
            </li>

            <li>
                <div className='view'>
                    <input className='toggle' type="checkbox" />
                    <label>Have a life!</label>
                    <button className='destroy'></button>
                </div>
            </li> */}
        </ul>
    )
}

export default List