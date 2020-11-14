import {
  ADD_DISH_TO_CART_REQUEST,
  ADD_DISH_TO_CART_SUCCESS,
  ADD_DISH_TO_CART_FAILURE,
  CLEAR_ADD_DISH_SUCCESS,
  REMOVE_DISH_FROM_CART,
} from '../constants/orderConstants'

export const cartReducer = (state = { cartItems: [] }, action) => {
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

    default:
      return state
  }
}
