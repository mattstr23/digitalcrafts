import React, {useState} from "react"
import { LoginForm, MainDiv } from "../styled-components/FormStyle";

export default function Form() {
    const [formData, setFormData] = useState({});

    return (
        <MainDiv>
            <LoginForm>
                <h1>Form</h1>
                <input onChange={(e)=>setFormData({...formData,[e.target.name]: e.target.value})}type="text" placeholder="UserName" name="username" value={formData?.username}/>
                <input onChange={(e)=>setFormData({...formData,[e.target.name]: e.target.value})}type="text" placeholder="email" name="email" value={formData?.email}/>
                <input onChange={(e)=>setFormData({...formData,[e.target.name]: e.target.value})}type="password" placeholder="password" name="password" value={formData?.password}/>
                <div>
                    <button>REGISTER</button>
                    <button>SIGN IN</button>
                </div>
            </LoginForm>

            
        </MainDiv>
    );
}