import { useMemo } from 'react'

export const useTotalPrice = (reduxStore) => {
  const cartFullPrice = useMemo(
    () => reduxStore?.reduce((acc, item) => acc + item?.price * item?.qty, 0),
    [reduxStore]
  )
  return cartFullPrice
}
