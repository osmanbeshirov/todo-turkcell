import { Children, createContext, useState } from 'react';


interface Props {
    children: React.ReactNode;
}

const TodoContext = createContext<any>(null);

export const TodoContextProvider: React.FC<Props> = ({ children }) => {

    const [todo, setTodo] = useState('')


    const addToList = (todo: string) => {
        setTodo(todo);
    }

    const values = {
        todo,
        addToList
    }

    return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
}

export default TodoContext;



