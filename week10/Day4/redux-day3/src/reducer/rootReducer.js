import { combineReducers } from "redux";
import Counter from "./counterReducer";
import SignUpFormData from "./signUpReducer";
import Matchups from "./matchUpsReducer";
import CurrentLiveMatch from "./currentLiveMatchReducer";
import NewsArticles from "./newArticlesReducer";

// const initialState = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     matchups: [],
//     currentLiveMatch: {},
//     newsArticles: [],
//     previousMatchVideos: [],
//     userData: [],
// }

const rootReducer = combineReducers({
    SignUpFormData,
    Counter,
    Matchups,
    CurrentLiveMatch,
    NewsArticles,


    // switch (action.type) {
    //     case "SIGNUPFORM_FIRSTNAME":
    //         return {...state, firstname: action.payload}
    //     case "SIGNUPFORM_LASTNAME":
    //         return {...state, lastname: action.payload}
    //     case "SIGNUPFORM_EMAIL":
    //         return {...state, email: action.payload}
    //     case "SIGNUPFORM_PASSWORD":
    //         return {...state, password: action.payload}
    // }
});
export default rootReducer