import React, { useState, useEffect } from "react";
import './App.css'
import axios from "axios";
import { Route } from "react-router-dom";
import HomePage from './HomePage'
import Pizza from "./Pizza";

const initialValues = {
  orderName: '',
  size: '',
  pepperoni: false,
  mushrooms: false,
  sausage: false,
  pineapple: false,
  special: ''
}

const initialErrors = {
  orderName: '',
  size: '',
}

const ordersArray = []
const initialDisabled = true

const App = () => {

  const [orders, setOrders] = useState(ordersArray)
  const [formValues, setFormValues] = useState(initialValues)

  const postOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        setOrders([res.data, ...orders])
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
        setFormValues(initialValues)
      })
  }

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues, [name]: value
    })
  }

  const formSubmit = () => {
    const newOrder = {
      orderName: formValues.orderName,
      size: formValues.size,
      special: formValues.special,
      toppings: ['pepperoni', 'mushrooms', 'sausage', 'pineapple'].filter(topping => !!formValues[topping])
    }
    postOrder(newOrder)
  }

  return (
    <div className='App'>
      <Route path='/pizza'>
        <Pizza />
      </Route>
      <Route exact path='/'>
        <HomePage />
      </Route>
    </div>
  );
};
export default App;
