import React, { useState, useEffect } from "react";
import './App.css'
import axios from "axios";
import { Route } from "react-router-dom";
import HomePage from './HomePage'
import Pizza from "./Pizza";
import * as yup from 'yup'
import schema from './FormSchema'

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
  const [formErrors, setFormErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

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

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value)
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

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className='App'>
      <Route path='/pizza'>
        <Pizza
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          errors={formErrors}
          disabled={disabled}
          orders={orders}
        />
      </Route>
      <Route exact path='/'>
        <HomePage />
      </Route>
    </div>
  );
};
export default App;
