import React, {useState} from "react"
import { CheckBox, CheckDiv, FormHeader, LoginForm, MainDiv, Remember, SubBut, UserInputs } from "../styled-components/FormStyle";

export default function Form() {
    const [formData, setFormData] = useState({});

    return (
        <MainDiv>
            <LoginForm>
                <FormHeader>Login to Continue!</FormHeader>
                <UserInputs onChange={(e)=>setFormData({...formData,[e.target.name]: e.target.value})}type="text" placeholder="Username" name="username" value={formData?.username}/>
                <UserInputs onChange={(e)=>setFormData({...formData,[e.target.name]: e.target.value})}type="password" placeholder="Password" name="password" value={formData?.password}/>
                <CheckDiv>
                    <CheckBox type="checkbox" id="remember"/>
                    <Remember for="remember"> Remember me</Remember>
                </CheckDiv>
                <SubBut>LOGIN</SubBut>
                
                
            </LoginForm>

            
        </MainDiv>
    );
}