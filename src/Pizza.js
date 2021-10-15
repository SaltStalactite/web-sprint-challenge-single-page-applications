import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const Pizza = (props) => {
    return (
        <>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/pizza'>Order</Link>
            </nav>
            <h2>Lambda Eats</h2>
        </>
    )
}

export default Pizza