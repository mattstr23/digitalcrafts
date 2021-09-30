import React from "react";

export default function SignUp(props) {
    const {userInputs} = props;
    const {setUserInputs} = props;
    const {userDetails} = props;
    const {setUserDetails} = props;
    


    return (
        <div className="signUpCont">
            <h1>Sign Up</h1>
            <form action="">
                <input type="text" onChange={(e) => {setUserInputs({...userInputs,[e.target.name]: e.target.value})}} name="firstName" placeholder="First Name" />
                <input type="text" onChange={(e) => {setUserInputs({...userInputs,[e.target.name]: e.target.value})}} name="lastName" placeholder="Last Name" />
                <input type="date" onChange={(e) => {setUserInputs({...userInputs,[e.target.name]: e.target.value})}} name="date" />
                <input type="text" onChange={(e) => {setUserInputs({...userInputs,[e.target.name]: e.target.value})}} name="address" placeholder="Address" />
                <input type="text" onChange={(e) => {setUserInputs({...userInputs,[e.target.name]: e.target.value})}} name="city" placeholder="City" />
                <input type="text" onChange={(e) => {setUserInputs({...userInputs,[e.target.name]: e.target.value})}} name="state" placeholder="State" />
                <input type="text" onChange={(e) => {setUserInputs({...userInputs,[e.target.name]: e.target.value})}} name="zip" placeholder="Zip Code " />
                <input type="text" onChange={(e) => {setUserInputs({...userInputs,[e.target.name]: e.target.value})}} name="userName" placeholder="User Name" />
                <input type="text" onChange={(e) => {setUserInputs({...userInputs,[e.target.name]: e.target.value})}} name="email" placeholder="Email" />
                <input type="button" onClick={() => {setUserDetails([...userDetails, userInputs])}} value="Sign Up" />
            </form>

        </div>
    )
}