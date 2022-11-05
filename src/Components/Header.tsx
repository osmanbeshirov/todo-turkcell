import React from 'react'

const Header = () => {
    return (

        <header className='header'>
            <h1>todos</h1>
            <form >
                <input className='new-todo' placeholder='What we needs to be done?' autoFocus type="text" />
            </form>
        </header>


    )
}

export default Header