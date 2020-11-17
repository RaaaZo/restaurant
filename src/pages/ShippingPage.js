import React, { useEffect } from 'react'
import styled from 'styled-components'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { Button } from 'components/atoms/Button'
import { Header } from 'components/atoms/Header'
import { PagesWrapper } from 'components/atoms/PagesWrapper'
import FormCell from 'components/molecules/FormCell'
import { Label } from 'components/atoms/Label'
import { addShippingAddressAndPaymentMethod } from 'ducks/actions/orderActions'
import * as Yup from 'yup'
import HeroImageComponent from 'components/molecules/HeroImageComponent'

const shippingSchema = Yup.object().shape({
  address: Yup.string()
    .required('Wymagane')
    .max(30, 'Zbyt długi adres'),
  city: Yup.string()
    .required('Wymagane')
    .max(20, 'Zbyt długa nazwa miasta'),
  postalCode: Yup.string()
    .required('Wymagane')
    .max(10, 'Zbyt długi kod pocztowy'),
  payment: Yup.string().required('Wymagane'),
})

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 40px;
`

const StyledHeader = styled(Header)`
  margin: 30px;
`

const StyledButton = styled(Button)`
  margin-top: 20px;
`

const StyledRadioButton = styled(Label)`
  cursor: pointer;
  margin: 10px;
`

const StyledRadioField = styled(Field)`
  margin: 10px;
`

const ErrorMessageWrapper = styled.div`
  color: red;
  font-weight: bold;
`

const ShippingPage = () => {
  const { push } = useHistory()
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.userLogin)
  const { shippingAddress } = useSelector((state) => state.cart)

  useEffect(() => {
    if (!userInfo) {
      push('/login')
    }
  })

  const submitButtonHandler = (shippingAddress, paymentMethod) => {
    dispatch(addShippingAddressAndPaymentMethod(shippingAddress, paymentMethod))
  }

  return (
    <PagesWrapper>
      <HeroImageComponent
        image='https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        alternative='Contact hero image at the top of the page'
      />

      <Header>Dane Adresowe</Header>

      <Formik
        initialValues={{
          address: shippingAddress.address || '',
          city: shippingAddress.city || '',
          postalCode: shippingAddress.postalCode || '',
          payment: 'PayPal',
        }}
        onSubmit={(values, { resetForm }) => {
          const { address, city, postalCode, payment } = values
          submitButtonHandler({ address, city, postalCode }, payment)
          resetForm()
          push('/summary')
        }}
        validationSchema={shippingSchema}
      >
        {({ resetForm }) => {
          return (
            <Form>
              <FormWrapper>
                <FormCell id='address' name='Adres' type='string' />
                <ErrorMessageWrapper>
                  <ErrorMessage name='address' />
                </ErrorMessageWrapper>

                <FormCell id='city' name='Miasto' type='string' />
                <ErrorMessageWrapper>
                  <ErrorMessage name='city' />
                </ErrorMessageWrapper>

                <FormCell id='postalCode' name='Kod Pocztowy' type='string' />
                <ErrorMessageWrapper>
                  <ErrorMessage name='postalCode' />
                </ErrorMessageWrapper>

                <StyledHeader>Metoda Płatności</StyledHeader>

                <StyledRadioButton>
                  <StyledRadioField
                    type='radio'
                    name='payment'
                    value='PayPal'
                  />
                  PayPal
                </StyledRadioButton>

                <StyledRadioButton>
                  <StyledRadioField
                    type='radio'
                    name='payment'
                    value='CreditCard'
                  />
                  Karta Kredytowa
                </StyledRadioButton>

                <StyledButton type='submit'>Dalej</StyledButton>
              </FormWrapper>
            </Form>
          )
        }}
      </Formik>
    </PagesWrapper>
  )
}

export default ShippingPage
