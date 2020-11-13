import { PagesWrapper } from 'components/atoms/PagesWrapper'
import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const ShippingPage = () => {
  const { push } = useHistory()
  const { username } = useSelector((state) => state.userLogin)

  useEffect(() => {
    if (!username) {
      push('/auth')
    }
  })

  return (
    <PagesWrapper>
      <div>Shipping Form</div>
    </PagesWrapper>
  )
}

export default ShippingPage
