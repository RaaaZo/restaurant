import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import * as Yup from 'yup'
import { Button } from 'components/atoms/Button'
import { Header } from 'components/atoms/Header'
import { PagesWrapper } from 'components/atoms/PagesWrapper'
import FormCell from 'components/molecules/FormCell'
import { Form, Formik, ErrorMessage } from 'formik'

import registerHero from 'assets/img/hero_register-min.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { login } from 'ducks/actions/userActions'
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import LoadingSpinner from 'components/utils/LoadingSpinner'
import HeroImageComponent from 'components/molecules/HeroImageComponent'

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
  margin-top: 20px;

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
  font-weight: bold;
`

const LoginPage = () => {
  const [loginData, setLoginData] = useState()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const { push } = useHistory()
  const dispatch = useDispatch()

  const userDataChecker = userInfo?.username

  useEffect(() => {
    if (loginData) {
      dispatch(login(loginData.email, loginData.password))
    }
  }, [loginData, dispatch, push])

  useEffect(() => {
    if (userDataChecker) {
      push('/')
    }
  }, [userDataChecker, push])

  return (
    <PagesWrapper>
      <HeroImageComponent
        image={registerHero}
        alternative='Contact hero image at the top of the page'
      />

      <>
        <StyledHeader mainHeader>Zaloguj się!</StyledHeader>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(values, { resetForm, setErrors }) => {
            setLoginData(values)

            resetForm()
            setErrors()
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
                  {error && <ErrorMessageWrapper>{error}</ErrorMessageWrapper>}

                  <StyledButton type='submit'>Zaloguj się</StyledButton>

                  <StyledHeader
                    link={true}
                    onClick={() => {
                      push('/register')
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
    </PagesWrapper>
  )
}

export default LoginPage
