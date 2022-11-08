import React, { useContext } from 'react';
import { useTodo } from '../../Context/TodoContext';
import ListItem from './ListItem';

export type Todo = {
    id: string,
    text: string,
    completed: boolean
}

let filtered = null;

const List = () => {

    const { todos, filter } = useTodo();

    filtered = todos;

    if (filter !== 'all') {
        filtered = todos.filter((todo: Todo) => filter === 'active' ? todo.completed === false
            : todo.completed === true)
    }

    return (
        <ul className='todo-list'>

            {
                filtered.map((todo: Todo) => (
                    <ListItem key={todo.id} todo={todo} />
                ))
            }

        </ul>
    )
}

export default List