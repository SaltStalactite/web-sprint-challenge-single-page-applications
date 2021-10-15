import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = (props) => {

    return (
        <>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/pizza'>Order</Link>
            </nav>
            <h1>Lambda Eats</h1>
            <p>Welcome to Lambda Eats!</p>
            <div>
                <Link to="/pizza">
                    <button id='order-pizza'>
                        Order Here!
                    </button>
                </Link>
            </div>
            <div>
                <img src='https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=428&q=80' alt='Pizza' />
            </div>
        </>
    )
}

export default HomePage