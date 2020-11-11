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

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Conajmniej 2 znaki')
    .max(30, 'Maksymalnie 30 znaków')
    .required('Wymagane'),
  password: Yup.string()
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

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

  return (
    <PagesWrapper>
      <HeroImage src='https://cdn.pixabay.com/photo/2018/08/30/14/46/food-3642376_960_720.jpg' />
      {hasAccount ? (
        <>
          <StyledHeader>Zaloguj się!</StyledHeader>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={async (values, { resetForm }) => {
              await sleep(500)
              console.log(values)
              resetForm()
            }}
            validationSchema={LoginSchema}
          >
            {({ resetForm }) => {
              return (
                <Form>
                  <FormWrapper>
                    <FormCell id='email' name='E-mail' type='email' />
                    <ErrorMessageWrapper>
                      <ErrorMessage name='email' />
                    </ErrorMessageWrapper>

                    <FormCell id='password' name='Hasło' type='password' />
                    <ErrorMessageWrapper>
                      <ErrorMessage name='password' />
                    </ErrorMessageWrapper>
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
              name: '',
              email: '',
              password: '',
            }}
            onSubmit={async (values, { resetForm }) => {
              await sleep(500)
              console.log(values)
              resetForm()
            }}
            validationSchema={SignupSchema}
          >
            {({ resetForm }) => {
              return (
                <Form>
                  <FormWrapper>
                    <FormCell id='name' name='Imię' type='text' />
                    <ErrorMessageWrapper>
                      <ErrorMessage name='name' />
                    </ErrorMessageWrapper>
                    <FormCell id='email' name='E-mail' type='email' />
                    <ErrorMessageWrapper>
                      <ErrorMessage name='email' />
                    </ErrorMessageWrapper>
                    <FormCell id='password' name='Hasło' type='password' />
                    <ErrorMessageWrapper>
                      <ErrorMessage name='password' />
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
                      <StyledSpan> Zaloguj się!</StyledSpan>
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
