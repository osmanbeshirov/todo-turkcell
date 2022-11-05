import React from 'react';

import { useFormik } from 'formik';
import Form from './Form';



const Header = () => {

    return (

        <header className='header'>
            <h1>todos</h1>

            <Form />
        </header>

    )
}

export default Header