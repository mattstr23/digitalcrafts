import SignUpForm from "../components/SignUpForm";

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
};

const SignUpFormData = (state=initialState,action) => {
    switch(action.type){
        default:
            return state;

    }
}
export default SignUpFormData;