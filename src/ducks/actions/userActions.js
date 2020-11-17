import Axios from 'axios'
import {
  USER_DETAILS_FAILURE,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  UPDATE_USER_DETAILS_REQUEST,
  UPDATE_USER_DETAILS_SUCCESS,
  UPDATE_USER_DETAILS_FAILURE,
} from 'ducks/constants/userConstants'

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })

    // destructure response.data
    const { data } = await Axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/users/login`,
      {
        email,
        password,
      }
    )

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILURE,
      payload: error.response.data.message,
    })
  }
}

export const logout = () => async (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({ type: USER_LOGOUT })
}

export const registerUser = (
  username,
  email,
  password,
  confirmPassword
) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    })

    const { data } = await Axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/users`,
      {
        username,
        email,
        password,
        confirmPassword,
      }
    )

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    })

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAILURE,
      payload: error.response.data.message,
    })
  }
}

export const fetchUserDetails = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    })

    const { userDetailsUpdate } = getState()

    if (userDetailsUpdate.error) {
      userDetailsUpdate.error = null
    }

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await Axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/users`,
      config
    )

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAILURE,
      payload: error.response?.data.message,
    })
  }
}

export const updateUserDetails = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: UPDATE_USER_DETAILS_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await Axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/api/users`,
      user,
      config
    )

    dispatch({
      type: UPDATE_USER_DETAILS_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Błąd autoryzacji') {
      dispatch(logout())
    }
    dispatch({
      type: UPDATE_USER_DETAILS_FAILURE,
      payload: message,
    })
  }
}
