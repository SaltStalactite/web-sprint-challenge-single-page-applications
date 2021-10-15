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
        </>
    )
}
