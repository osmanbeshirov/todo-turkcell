import React, { useContext } from 'react';
import { useTodo } from '../../Context/TodoContext';
import ListItem from './ListItem';

export type Todo = {
    id: string,
    text: string,
    completed: boolean
}

const List = () => {

    const { todos } = useTodo();

    return (
        <ul className='todo-list'>

            {
                todos.map((todo: Todo) => (
                    <ListItem key={todo.id} todo={todo} />
                ))
            }

        </ul>
    )
}

export default List