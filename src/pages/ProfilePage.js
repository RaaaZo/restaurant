import React, { useState } from 'react'
import { PagesWrapper } from 'components/atoms/PagesWrapper'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button } from 'components/atoms/Button'
import {
  fetchUserDetails,
  logout,
  updateUserDetails,
} from 'ducks/actions/userActions'
import styled from 'styled-components'
import { ErrorMessage, Form, Formik } from 'formik'
import FormCell from 'components/molecules/FormCell'
import { Header } from 'components/atoms/Header'
import LoadingSpinner from 'components/utils/LoadingSpinner'
import { Paragraph } from 'components/atoms/Paragraph'
import * as Yup from 'yup'
import { OrderHistoryButton } from 'components/atoms/OrderHistoryButton'
import HeroImageComponent from 'components/molecules/HeroImageComponent'

const UpdateSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Conajmniej 2 znaki')
    .max(30, 'Maksymalnie 30 znaków')
    .required('Wymagane'),
  password: Yup.string().required('Wymagane'),
  confirmPassword: Yup.string().required('Wymagane'),
  email: Yup.string()
    .email('Niepoprawny adres email')
    .required('Wymagane'),
})

const ItemsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 40px;
`

const ErrorMessageWrapper = styled.div`
  color: red;
  font-weight: bold;
`

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.accentsLight};
`

const StyledParagraph = styled(Paragraph)`
  margin: 30px;
  max-width: 1024px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`

const StyledButton = styled(Button)`
  display: block;
  margin: 20px auto;
`

const ProfileAndHistoryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
`

const HistoryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MaxWidthWrapper = styled.div`
  max-width: 1360px;
`

const ProfilePage = () => {
  const [message, setMessage] = useState(null)
  const { push, go } = useHistory()
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)

  const userDetails = useSelector((state) => state.userDetails)
  const { userInfo, loading } = userDetails

  // display only 6 orders on page. If more slice first one if not return userInfo.orders
  let slicedUserOrders
  if (!loading && userInfo.orders.length >= 6) {
    slicedUserOrders = userInfo.orders.slice(1)
  } else {
    slicedUserOrders = userInfo.orders
  }

  const userDetailsUpdate = useSelector((state) => state.userDetailsUpdate)
  const { success, error: updateError } = userDetailsUpdate

  useEffect(() => {
    dispatch(fetchUserDetails())
  }, [dispatch])

  const isUserInfo = userLogin.userInfo

  // if not logged user push to login page
  useEffect(() => {
    if (!isUserInfo) {
      push('/login')
    }
  }, [push, isUserInfo])

  useEffect(() => {
    if (success) go(0)
  }, [success, go])

  const handleLogoutButton = () => {
    dispatch(logout())
    push('/')
  }

  return (
    <>
      <PagesWrapper>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <HeroImageComponent
              image='https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              alternative='Profile page hero image of food at the top'
            />

            <MaxWidthWrapper>
              <Header mainHeader>
                Profil <StyledSpan>{userInfo.username}</StyledSpan>
              </Header>

              <ProfileAndHistoryWrapper>
                <ItemsWrapper>
                  <Formik
                    initialValues={{
                      username: userInfo.username,
                      email: userInfo.email,
                      password: '',
                      confirmPassword: '',
                    }}
                    validationSchema={UpdateSchema}
                    onSubmit={(values, { resetForm, setErrors }) => {
                      const {
                        username,
                        email,
                        password,
                        confirmPassword,
                      } = values

                      if (password !== confirmPassword) {
                        setMessage('Hasła nie pasują')
                      } else {
                        dispatch(
                          updateUserDetails({
                            id: userInfo._id,
                            username,
                            email,
                            password,
                          })
                        )
                      }

                      resetForm()
                      setErrors()
                    }}
                  >
                    {({ resetForm }) => {
                      return (
                        <Form>
                          <FormWrapper>
                            <FormCell
                              id='username'
                              name='Nazwa użytkownika'
                              type='string'
                            />
                            <ErrorMessageWrapper>
                              <ErrorMessage name='username' />
                            </ErrorMessageWrapper>

                            <FormCell id='email' name='E-mail' type='email' />
                            <ErrorMessageWrapper>
                              <ErrorMessage name='email' />
                            </ErrorMessageWrapper>

                            <FormCell
                              id='password'
                              name='Hasło'
                              type='password'
                            />
                            <ErrorMessageWrapper>
                              <ErrorMessage name='password' />
                            </ErrorMessageWrapper>

                            <FormCell
                              id='confirmPassword'
                              name='Potwierdź Hasło'
                              type='password'
                            />

                            <ErrorMessageWrapper>
                              <ErrorMessage name='confirmPassword' />
                            </ErrorMessageWrapper>

                            {updateError && (
                              <ErrorMessageWrapper>
                                {updateError}
                              </ErrorMessageWrapper>
                            )}
                            {message && (
                              <ErrorMessageWrapper>
                                {message}
                              </ErrorMessageWrapper>
                            )}

                            <StyledButton type='submit'>
                              Zaktualizuj profil
                            </StyledButton>
                          </FormWrapper>
                        </Form>
                      )
                    }}
                  </Formik>
                </ItemsWrapper>

                <HistoryWrapper>
                  <Header>Historia zamówień</Header>
                  {!loading && userInfo ? (
                    slicedUserOrders.map((item, index) => (
                      <OrderHistoryButton
                        onClick={() => push(`/profile/order/${item._id}`)}
                        key={index}
                      >
                        Zamówienie {index + 1}
                      </OrderHistoryButton>
                    ))
                  ) : (
                    <StyledParagraph bold>
                      Nie masz żadnych zamówień
                    </StyledParagraph>
                  )}
                </HistoryWrapper>
              </ProfileAndHistoryWrapper>

              <Header>Lorem, ipsum dolor.</Header>
              <StyledParagraph>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Numquam unde quos quod rerum architecto animi.
              </StyledParagraph>
              <StyledButton onClick={handleLogoutButton}>
                Wyloguj się
              </StyledButton>
            </MaxWidthWrapper>
          </>
        )}
      </PagesWrapper>
    </>
  )
}

export default ProfilePage
