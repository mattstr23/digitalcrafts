import {useState} from "react"

function Form() {
    const [signupForm, setSignupForm] = useState({});
    console.log(signupForm)
    return (
        <div>
            <h1>Forms</h1>
            <form action="">
                <input type="text" onChange={(e)=>setSignupForm({...signupForm, [e.target.name]: e.target.value})} name="firstName" placeholder="First Name" />
                <input type="text" onChange={(e)=>setSignupForm({...signupForm, [e.target.name]: e.target.value})} name="lastName" placeholder="Last Name" />
                <input type="text" onChange={(e)=>setSignupForm({...signupForm, [e.target.name]: e.target.value})} name="email" placeholder="Email" />
                <input type="button" value="Submit" />
            </form>
        </div>
    )
}
export default Form;