import {
  ADD_DISH_TO_CART_REQUEST,
  ADD_DISH_TO_CART_SUCCESS,
  ADD_DISH_TO_CART_FAILURE,
  CLEAR_ADD_DISH_SUCCESS,
  REMOVE_DISH_FROM_CART,
  ADD_SHIPPING_ADDRESS_AND_PAYMENT_METHOD,
  ADD_ORDER_REQUEST,
  ADD_ORDER_SUCCESS,
  ADD_ORDER_FAILURE,
} from '../constants/orderConstants'

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {}, paymentMethod: '' },
  action
) => {
  switch (action.type) {
    case ADD_DISH_TO_CART_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case ADD_DISH_TO_CART_SUCCESS:
      const item = action.payload.item

      const existedItem = state.cartItems.find((x) => x.id === item.id)

      if (existedItem) {
        existedItem.qty++

        return {
          ...state,
          loading: false,
          cartItems: state.cartItems.map((x) =>
            x.name === existedItem.name ? existedItem : x
          ),
          success: action.payload.success,
        }
      } else {
        return {
          ...state,
          loading: false,
          cartItems: [...state.cartItems, item],
          success: action.payload.success,
        }
      }

    case ADD_DISH_TO_CART_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        cartItems: [],
      }

    case CLEAR_ADD_DISH_SUCCESS:
      return {
        ...state,
        success: false,
      }

    case REMOVE_DISH_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      }

    case ADD_SHIPPING_ADDRESS_AND_PAYMENT_METHOD:
      return {
        ...state,
        shippingAddress: action.payload.shippingAddress,
        paymentMethod: action.payload.paymentMethod,
      }

    default:
      return state
  }
}

export const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case ADD_ORDER_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      }

    case ADD_ORDER_FAILURE:
      return {
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}
