import React, { useContext } from 'react'
import ContentFooter from '../ContentFooter'
import TodoContext, { TodoContextProvider } from '../Context/TodoContext'
import List from './List';

const Content = () => {

    return (
        <>
            <section className='main'>
                <input className='toggle-all' type="checkbox" />
                <label htmlFor="toggle-all">Mark all as complete</label>

                <List  />
            </section>

            <ContentFooter />
        </>

    )
}

export default Content