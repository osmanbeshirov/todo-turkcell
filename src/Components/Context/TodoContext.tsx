import { Children, createContext, useContext, useState } from 'react';


interface Props {
    children: React.ReactNode;
}

const TodoContext = createContext<any>(null);

export const TodoContextProvider: React.FC<Props> = ({ children }) => {

    const [todos, setTodos] = useState([{
        id: 1,
        text: 'Learn Osman',
        completed: true
    }])


    const addToList = (todo: string) => {
        // setTodos(todo);
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



