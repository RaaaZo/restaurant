import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

export const useSuccessToast = () => {
  const cart = useSelector((state) => state.cart)
  const { success } = cart

  const successToast = () => toast.success('Dodano do koszyka!')

  useEffect(() => {
    if (success) {
      successToast()
    }
  }, [success])
}
