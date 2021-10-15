import styled from 'styled-components'

export const MainDiv = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: 20rem;
background-color: #295f4e;
`

export const UserDiv = styled.div`
display: flex;
text-align: center;
align-items: center;
justify-content: center;
background-color: #295f4e;
padding: 2rem .3rem .3rem .3rem; 
`
export const UserImg = styled.img`
border-radius: 50%;
height: 4.5rem;
width: 4.5rem;
`
export const UserWelcome = styled.p`
color: #93e4c1;
text-align: left;
margin: 0;
`
export const UserName = styled.h4`
color: white;
text-align: left;
margin: 0;
`

export const UserInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 100%;
background-color: #295f4e;
margin-left: .5rem;
`

export const OtherLinks = styled.h2`
background-color: #295f4e;
color: white;
text-align: center;
margin: 0;
padding: 1rem;
&:hover {
    background-color: white;
    color: #295f4e;
}
`