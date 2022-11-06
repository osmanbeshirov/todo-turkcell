import React, { useContext } from 'react'
import { useFormik } from 'formik';
import { Values } from './validation';
import validations from './validation';
import TodoContext, { useTodo } from '../../Context/TodoContext';

import { v4 as uuidv4 } from "uuid"



const Form = () => {
    const { addToList } = useTodo();

    const { handleChange, handleSubmit, handleBlur,
        values, isSubmitting, errors, touched } = useFormik<Values>({
            initialValues: {
                todo: ''
            },
            validationSchema: validations
            ,
            onSubmit: (values, bag) => {
                const newTodo = { id: uuidv4(), text: values.todo, completed: false }
                addToList(newTodo)
                // console.log(values.todo);

                bag.resetForm();
            }
        })

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} className='new-todo'
                name='todo'
                placeholder='What we needs to be done?'
                autoFocus type="text"
                onBlur={handleBlur}
                value={values.todo}
                disabled={isSubmitting}
            />
            {/* {touched.todo && errors.todo && <p>{errors.todo}</p>} */}
        </form>
    )
}

export default Form