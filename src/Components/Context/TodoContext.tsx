import { Children, createContext, useContext, useState } from 'react';
import { Todo } from '../Content/List';

import { v4 as uuidv4 } from "uuid"

interface Props {
    children: React.ReactNode;
}

const TodoContext = createContext<any>(null);

export const TodoContextProvider: React.FC<Props> = ({ children }) => {

    const [filter, setFilter] = useState('all')

    const [todos, setTodos] = useState([
        {
            id: 'shu1u2123',
            text: 'osman',
            completed: false
        }
    ])

    const addToList = (todo: Todo) => {
        setTodos([...todos, todo]);
    }

    const toggleTodo = (id: string) => {
        const cloned_todos = [...todos]
        const cloned = cloned_todos.find((item: Todo) => item.id === id);

        if (cloned !== undefined) {
            cloned.completed = !cloned.completed
        }

        setTodos(cloned_todos)

    }

    const removeTodo = (id: string) => {
        const clone_todos = [...todos];

        const newTodos = clone_todos.filter(todo => todo.id !== id);

        setTodos(newTodos)
    }

    const clearCompleted = (todos: []) => {
        const clearedTodos = todos.filter((todo: Todo) => todo.completed === false);
        setTodos(clearedTodos)
        // console.log(clearedTodos)
    }



    const values = {
        todos,
        addToList,
        setTodos,
        toggleTodo,
        removeTodo,
        filter,
        setFilter,
        clearCompleted
    }

    return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
}

export const useTodo = () => {
    const context = useContext(TodoContext);

    if (context === undefined) {
        throw new Error("useTodo must be with in a TodoProvider");
    }

    return context;
}

export default TodoContext;



