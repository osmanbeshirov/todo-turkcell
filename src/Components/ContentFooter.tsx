import React, { useRef } from 'react'
import { useTodo } from './Context/TodoContext'

const ContentFooter = () => {
    const { todos, filterTodos, filter, setFilter } = useTodo();



    return (
        <footer className='footer'>
            <span className='todo-count'>
                <strong>{todos.length} </strong>
                item{todos.length > 1 && 's'} left
            </span>

            <ul className="filters">
                <li >
                    <a href='#/' onClick={() => setFilter('all')}
                        className={filter === 'all' ? 'selected' : ''}>All</a>
                </li>
                <li>
                    <a href='#/' onClick={() => setFilter('active')}
                        className={filter === 'active' ? 'selected' : ''}>Active</a>
                </li>
                <li >
                    <a href='#/' className={filter === 'completed' ? 'selected' : ''}
                        onClick={() => setFilter('completed')} >Completed</a>
                </li>
            </ul>

            <button className="clear-completed">Clear completed</button>
        </footer>
    )
}

export default ContentFooter