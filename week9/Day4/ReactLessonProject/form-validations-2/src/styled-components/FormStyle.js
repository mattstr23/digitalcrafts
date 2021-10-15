import styled from 'styled-components'

export const LoginForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
background-image: linear-gradient(#714288,#400082,#3a0077);
height: 25rem;
width: 18rem;
margin: 10px;
border-radius: 0.5rem;
`
export const UserInputs = styled.input`
height: 2.2rem;
width: 80%;
border: none;
border-radius: 1rem;
margin: .5rem;
::placeholder {
    padding-left: 2rem;
}
`

export const FormHeader = styled.h1`
color: white;
font-size: 1.1rem;
margin-top: 3rem;
margin-bottom: .1rem;
`
export const SubBut = styled.button`
color: white;
font-size: 1.2rem;
width: 80%;
border: none;
border-radius: 1rem;
height: 2.2rem;
background-image: linear-gradient(to right, #ff8585,#ff9776,#ff8585,#fcff82);
`
export const Remember = styled.label`
color: grey;
font-size: .9rem;

`
export const CheckDiv = styled.div `
align-self: flex-start;
margin-left: 2rem;
padding: .4rem;
justify-content: center;

`
export const CheckBox = styled.input `
background-color: #606470;
`