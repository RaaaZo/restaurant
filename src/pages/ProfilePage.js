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

const SignupSchema = Yup.object().shape({
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
`

const StyledButton = styled(Button)`
  margin: 20px auto;
`

const ProfilePage = () => {
  const [message, setMessage] = useState(null)
  const { push, go } = useHistory()
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)

  const userDetails = useSelector((state) => state.userDetails)
  const { loading = true, error, userInfo } = userDetails

  const userDetailsUpdate = useSelector((state) => state.userDetailsUpdate)
  const { success, error: updateError } = userDetailsUpdate

  useEffect(() => {
    dispatch(fetchUserDetails())
  }, [dispatch])

  // if not logged user push to login page
  useEffect(() => {
    if (!userLogin.userInfo) {
      push('/login')
    }
  }, [push])

  useEffect(() => {
    if (success) go(0)
  }, [success])

  const handleLogoutButton = () => {
    dispatch(logout())
    push('/')
  }

  return (
    <PagesWrapper>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Header>
            Profil <StyledSpan>{userInfo.username}</StyledSpan>
          </Header>
          <ItemsWrapper>
            <Formik
              initialValues={{
                username: userInfo.username,
                email: userInfo.email,
                password: '',
                confirmPassword: '',
              }}
              validationSchema={SignupSchema}
              onSubmit={(values, { resetForm }) => {
                const { username, email, password, confirmPassword } = values

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

                      <FormCell id='password' name='Hasło' type='password' />
                      <ErrorMessageWrapper>
                        <ErrorMessage name='password' />
                      </ErrorMessageWrapper>

                      <FormCell
                        id='confirmPassword'
                        name='Potwierdź Hasło'
                        type='password'
                      />
                      {updateError && (
                        <ErrorMessageWrapper>{updateError}</ErrorMessageWrapper>
                      )}

                      <ErrorMessageWrapper>
                        <ErrorMessage name='confirmPassword' />
                      </ErrorMessageWrapper>

                      {message && <h3>{message}</h3>}

                      <StyledButton type='submit'>
                        Zaktualizuj profil
                      </StyledButton>
                    </FormWrapper>
                  </Form>
                )
              }}
            </Formik>
          </ItemsWrapper>

          <Header>Lorem, ipsum dolor.</Header>
          <StyledParagraph>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            unde quos quod rerum architecto animi.
          </StyledParagraph>
          <StyledButton onClick={handleLogoutButton}>Wyloguj się</StyledButton>
        </>
      )}
    </PagesWrapper>
  )
}

export default ProfilePage
