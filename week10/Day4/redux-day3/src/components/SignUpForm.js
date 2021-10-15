import React, {useMemo} from 'react';
import "./SignUpStyles.css";
import {useDispatch} from 'react-redux';
import debounce from "lodash.debounce";

export default function SignUpForm() {
    const dispatch = useDispatch();
    const debouncedChangeHandler = useMemo(() => {return debounce(dispatch, 1500);},[dispatch]);

    return (
        <div>
            <form action="" className="SignUpForm">
                <input onChange={(e)=>
                    debouncedChangeHandler({
                    type: "SIGNUPFORM_FIRSTNAME", 
                    payload: e.target.value,})}
                    type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input type="submit"/>
            </form>
        </div>
    )
}
