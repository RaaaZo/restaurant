import React from 'react'
import { useState } from 'react'
import styled, { css } from 'styled-components'
import * as Yup from 'yup'
import { Button } from 'components/atoms/Button'
import { Header } from 'components/atoms/Header'
import { HeroImage } from 'components/atoms/HeroImage'
import { PagesWrapper } from 'components/atoms/PagesWrapper'
import FormCell from 'components/molecules/FormCell'
import { Form, Formik, ErrorMessage } from 'formik'

import registerHero from 'assets/img/hero_register-min.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { login, registerUser } from 'ducks/actions/userActions'
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import LoadingSpinner from 'components/utils/LoadingSpinner'

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Conajmniej 2 znaki')
    .max(30, 'Maksymalnie 30 znaków')
    .required('Wymagane'),
  password: Yup.string()
    .min(6, 'Hasło musi się składać z conajmniej 6 znaków')
    .max(16, 'Hasło nie może zawierać więcej niż 16 znaków')
    .required('Wymagane'),
  confirmPassword: Yup.string()
    .min(6, 'Hasło musi się składać z conajmniej 6 znaków')
    .max(16, 'Hasło nie może zawierać więcej niż 16 znaków')
    .required('Wymagane'),
  email: Yup.string()
    .email('Niepoprawny adres email')
    .required('Wymagane'),
})

const LoginSchema = Yup.object().shape({
  email: Yup.string().required('Wymagane'),
  password: Yup.string().required('Wymagane'),
})

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 40px;
`

const StyledHeader = styled(Header)`
  margin-top: 40px;

  ${({ link }) =>
    link &&
    css`
      cursor: pointer;
      transition: color 0.4s ease-in-out;

      &:hover {
        color: ${({ theme }) => theme.accentsLight};
      }
    `}
`

const StyledButton = styled(Button)`
  margin-top: 20px;
`

const StyledSpan = styled.span`
  display: block;
  color: ${({ theme }) => theme.accentsLight};
  transition: color 0.4s ease-in-out;

  ${StyledHeader}:hover & {
    color: ${({ theme }) => theme.navigationDark};
  }
`

const ErrorMessageWrapper = styled.div`
  color: red;
`

const AuthenticationPage = () => {
  const [hasAccount, setHasAccount] = useState(false)
  const [loginData, setLoginData] = useState()
  const [registerData, setRegisterData] = useState()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const { push } = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    if (registerData) {
      dispatch(
        registerUser(
          registerData.username,
          registerData.email,
          registerData.password,
          registerData.confirmPassword
        )
      )
      push('/')
    }
  }, [registerData, push, dispatch])

  useEffect(() => {
    if (loginData) {
      dispatch(login(loginData.email, loginData.password))
    }
  }, [loginData, dispatch])

  useEffect(() => {
    if (!error) {
      push('/')
    }
  }, [push, error])

  return (
    <PagesWrapper>
      <HeroImage
        src={registerHero}
        alt='Authentication hero at the top of the page'
      />
      {hasAccount ? (
        <>
          <StyledHeader>Zaloguj się!</StyledHeader>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={(values, { resetForm }) => {
              setLoginData(values)

              resetForm()
            }}
            validationSchema={LoginSchema}
          >
            {({ resetForm }) => {
              return (
                <Form>
                  <FormWrapper>
                    <FormCell id='email' name='E-mail' type='string' />
                    <ErrorMessageWrapper>
                      <ErrorMessage name='email' />
                    </ErrorMessageWrapper>

                    <FormCell id='password' name='Hasło' type='password' />
                    <ErrorMessageWrapper>
                      <ErrorMessage name='password' />
                    </ErrorMessageWrapper>

                    {loading && <LoadingSpinner />}
                    {error && <p>{error}</p>}

                    <StyledButton type='submit'>Zaloguj się</StyledButton>

                    <StyledHeader
                      link={true}
                      onClick={() => {
                        setHasAccount((prevState) => !prevState)
                        resetForm()
                      }}
                    >
                      Nie masz konta?
                      <StyledSpan>Zarejestruj się!</StyledSpan>
                    </StyledHeader>
                  </FormWrapper>
                </Form>
              )
            }}
          </Formik>
        </>
      ) : (
        <>
          <StyledHeader>Zarejestruj się!</StyledHeader>
          <Formik
            initialValues={{
              username: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            onSubmit={(values, { resetForm }) => {
              setRegisterData(values)
              resetForm()
            }}
            validationSchema={SignupSchema}
          >
            {({ resetForm }) => {
              return (
                <Form>
                  <FormWrapper>
                    <FormCell
                      id='username'
                      name='Nazwa użytkownika'
                      type='text'
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
                      name='Powtórz hasło'
                      type='password'
                    />
                    <ErrorMessageWrapper>
                      <ErrorMessage name='confirmPassword' />
                    </ErrorMessageWrapper>

                    <StyledButton type='submit'>Zarejestruj się</StyledButton>

                    <StyledHeader
                      link={true}
                      onClick={() => {
                        setHasAccount((prevState) => !prevState)
                        resetForm()
                      }}
                    >
                      Masz konto?
                      <StyledSpan>Zaloguj się!</StyledSpan>
                    </StyledHeader>
                  </FormWrapper>
                </Form>
              )
            }}
          </Formik>
        </>
      )}
    </PagesWrapper>
  )
}

export default AuthenticationPage
