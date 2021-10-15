const initialState = {
    userName: "",
    userEmail: "",
    userAddress: "",
    restaurants: "",
    userData: {},

};

export const rootReducer = (state = initialState,action) => {
    switch (action.type){
        case "SET_USERNAME":
            return {...state, userName: "Bob" };
        
        case "SET_RESTAURANTS":
            return {...state, restaurants: action.payload};

        case "SET_EMAIL":
            return {...state, userEmail: "ImAnEmail@mail.com"};
        
        case "SET_ADDRESS":
            return {...state, userAddress: "123 fancy shoe rd"};
        
        case "GET_USER":
            return {...state, userData: action.payload};
    
        default:
            return state;
    }
};