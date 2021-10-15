import React from 'react'
import { Link } from 'react-router-dom'

const Pizza = (props) => {

    const {
        values,
        submit,
        change,
        errors,
        disabled,
        orders
    } = props


    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const onChange = event => {
        const { name, value, checked, type } = event.target;
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/pizza'>Order</Link>
            </nav>
            <h2>Lambda Eats</h2>
            <form onSubmit={onSubmit} id='pizza-form'>
                <div>
                    <label>Name&nbsp;
                        <input
                            id='name-input'
                            type='text'
                            name='orderName'
                            onChange={onChange}
                            value={values.orderName}
                        />
                    </label>
                </div>
                <label>Pizza Size&nbsp;
                    <select onChange={onChange}
                        id='size-dropdown'
                        type='select'
                        name='size'
                        value={values.size}
                    >
                        <option value=''>-- Select a size --</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                        <option value='extra-large'>Extra Large</option>
                        <option value='super'>Super Size</option>
                    </select>
                </label>
                <div>
                    <h3>Toppings</h3>
                    <label>Pepperoni
                        <input
                            id='pepperoni'
                            type='checkbox'
                            name='pepperoni'
                            onChange={onChange}
                            checked={values.pepperoni}
                        />
                    </label>
                    <label>Mushrooms
                        <input
                            id='mushrooms'
                            type='checkbox'
                            name='mushrooms'
                            onChange={onChange}
                            checked={values.mushrooms}
                        />
                    </label>
                    <label>Sausage
                        <input
                            id='sausage'
                            type='checkbox'
                            name='sausage'
                            onChange={onChange}
                            checked={values.sausage}
                        />
                    </label>
                    <label>Pineapple
                        <input
                            id='pineapple'
                            type='checkbox'
                            name='pineapple'
                            onChange={onChange}
                            checked={values.pineapple}
                        />
                    </label>
                </div>
                <div>
                    <label>Special Instructions&nbsp;
                        <input
                            type='text'
                            id='special-text'
                            name='special'
                            onChange={onChange}
                            value={values.special}
                        />
                    </label>
                </div>
                <div>
                    <div>{errors.orderName}</div>
                    <div>{errors.size}</div>
                </div>
                <button disabled={disabled} id='order-button'>
                    Order
                </button>
            </form>
            {orders.map(order => {
                return <div key={order.id}>
                    <h4>Out for delivery</h4>
                    <h5>{order.orderName}</h5>
                    <h6>Size</h6>
                    <p>{order.size}</p>
                    <div key={order.id}>
                        <h6>Toppings</h6>
                        <p>{order.toppings.map(topping => {
                            return <li>{topping}</li>
                        })}</p>
                    </div>
                    <h6>Special Instructions</h6>
                    <p>{order.special}</p>
                </div>
            })}
            <div>
                <img src='https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80' alt='pizza' />
            </div>
        </>
    )
}

export default Pizza