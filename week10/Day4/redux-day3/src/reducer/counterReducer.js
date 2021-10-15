const initialState = {
    counter: 0
}

const Counter = (state=initialState,action) => {
    switch(action.type) {
        case "INCREMENT_COUNTER":
            return state + 1;
        default:
            return state;
    }
};

export default Counter;