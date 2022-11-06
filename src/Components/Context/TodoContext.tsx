import { Children, createContext, useContext, useState } from 'react';
import { Todo } from '../Content/List';

import { v4 as uuidv4 } from "uuid"

interface Props {
    children: React.ReactNode;
}

const TodoContext = createContext<any>(null);

export const TodoContextProvider: React.FC<Props> = ({ children }) => {

    const [todos, setTodos] = useState([
        {
            id: 'shu1u2123',
            text: 'osman',
            completed: false
        }
    ])


    const addToList = (todo: string) => {
        setTodos([...todos, { id: uuidv4(), text: todo, completed: false }]);
    }

    const values = {
        todos,
        addToList
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



