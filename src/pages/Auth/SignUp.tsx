import React from 'react'
import styled from "styled-components"


const SIgnUp = () => {
  return (
    <div><Container>
        <Main>
            <Title>Login Form</Title>
            <Pages>
                <SignUp>SIgn Up</SignUp>
                <SignIn>Sign In</SignIn>
            </Pages>
          <InputHolder>
          <InputTitle> Email Address</InputTitle>
          <Input placeholder = "Email"
          // {...SignUp("EmailAddress")}
          />
          </InputHolder>
            <Forgot></Forgot>
            <Button></Button>
            <Already></Already>
        </Main>
        </Container></div>
  )
}

export default SIgnUp

const Already= styled.div``

const Button = styled.div``

const Forgot = styled.div``

const Input = styled.input`
background-color: yellow;
border: 0;
outline: none;
width: 95%;
height: 95%;
padding-left: 10px;
`

const InputTitle = styled.div`
background-color: yellow;
margin: 0 10px;
position: absolute;
top:-10px;
left: 0;
font-size: 12px;
`

const InputHolder = styled.div``

const SignIn = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 50%;
border-radius: 10px;

`

const SignUp = styled.div`
height: 100%;
width: 50%;
background-color: #5a5ac0;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
`

const Pages = styled.div`
height: 40px;
width: 300px;
border: 1px solid black;
border-radius: 10px;
display: flex;

`

const Title = styled.div`
font-size: 30px;
font-weight: bold;
`

const Main = styled.div`
width: 500px;
height: 90%;
background-color: pink;
border-radius: 20px;
display: flex;
justify-content: center;
align-items: center; 
flex-direction: column;
`

const Container = styled.div`
width: 100%;
height: 40vh;
display: flex;
justify-content: center;
align-items: center;
`