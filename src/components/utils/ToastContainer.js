import React from 'react'
import { ToastContainer as Toastify } from 'react-toastify'

const ToastContainer = () => {
  return (
    <Toastify
      position='bottom-right'
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  )
}
export default ToastContainer
