import React from 'react'
import { useTodo } from './Context/TodoContext'

const ContentFooter = () => {
    const { todos, filterTodos } = useTodo();

    return (
        <footer className='footer'>
            <span className='todo-count'>
                <strong>{todos.length} </strong>
                items left
            </span>

            <ul className="filters">
                <li >
                    <a className="selected">All</a>
                </li>
                <li>
                    <a>Active</a>
                </li>
                <li onClick={() => filterTodos()}>
                    <a >Completed</a>
                </li>
            </ul>

            <button className="clear-completed">Clear completed</button>
        </footer>
    )
}

export default ContentFooter