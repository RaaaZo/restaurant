import Axios from 'axios'
import {
  ADD_DISH_TO_CART_FAILURE,
  ADD_DISH_TO_CART_REQUEST,
  ADD_DISH_TO_CART_SUCCESS,
  ADD_ORDER_FAILURE,
  ADD_ORDER_REQUEST,
  ADD_ORDER_SUCCESS,
  ADD_SHIPPING_ADDRESS_AND_PAYMENT_METHOD,
  CLEAR_ADD_DISH_SUCCESS,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  REMOVE_DISH_FROM_CART,
} from 'ducks/constants/orderConstants'

export const addDishToCart = (dishId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADD_DISH_TO_CART_REQUEST,
    })

    const { data } = await Axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/dishes/${dishId}`
    )

    const { data: dish } = data

    dispatch({
      type: ADD_DISH_TO_CART_SUCCESS,
      payload: {
        item: {
          id: dish._id,
          name: dish.name,
          image: dish.image,
          description: dish.description,
          price: dish.price,
          qty: 1,
        },
        success: data.success,
      },
    })

    dispatch({
      type: CLEAR_ADD_DISH_SUCCESS,
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
  } catch (error) {
    dispatch({
      type: ADD_DISH_TO_CART_FAILURE,
      payload: error,
    })
  }
}

export const removeDishFromCart = (dishId) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_DISH_FROM_CART,
    payload: dishId,
  })

  localStorage.removeItem(
    'cartItems',
    JSON.stringify(getState().cart.cartItems)
  )
}

export const addShippingAddressAndPaymentMethod = (
  shippingAddress,
  paymentMethod
) => {
  localStorage.setItem('shippingAddress', JSON.stringify(shippingAddress))
  localStorage.setItem('paymentMethod', JSON.stringify(paymentMethod))

  return {
    type: ADD_SHIPPING_ADDRESS_AND_PAYMENT_METHOD,
    payload: {
      shippingAddress,
      paymentMethod,
    },
  }
}

export const addOrder = (
  orderItems,
  shippingAddress,
  paymentMethod,
  userId
) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADD_ORDER_REQUEST,
    })

    const { data } = await Axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/orders`,
      {
        orderItems,
        shippingAddress,
        paymentMethod,
        userId,
      }
    )

    dispatch({
      type: ADD_ORDER_SUCCESS,
      payload: data,
    })

    const { cart } = getState()
    cart.cartItems = []

    localStorage.removeItem('cartItems')
  } catch (error) {
    dispatch({
      type: ADD_ORDER_FAILURE,
      payload: error,
    })
  }
}

export const getOrderById = (orderId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_ORDER_REQUEST,
    })

    const { data } = await Axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/orders/${orderId}`
    )

    dispatch({
      type: GET_ORDER_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: GET_ORDER_SUCCESS,
      payload: error.response,
    })
  }
}
