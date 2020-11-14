import Axios from 'axios'
import {
  ADD_DISH_TO_CART_FAILURE,
  ADD_DISH_TO_CART_REQUEST,
  ADD_DISH_TO_CART_SUCCESS,
  CLEAR_ADD_DISH_SUCCESS,
  REMOVE_DISH_FROM_CART,
} from 'ducks/constants/orderConstants'

export const addDishToCart = (dishId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADD_DISH_TO_CART_REQUEST,
    })

    const { data } = await Axios.get(
      `http://localhost:5000/api/dishes/${dishId}`
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
