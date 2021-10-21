////REACT STATE, PROPS, MAPPING///

State is a place that we can store/hold data.
The process of passing state to another component is called props.
Local state is only available to that specific file, global is when its been passed down to another file from a higher level.
We store state in functional components using hooks.

\*\* useState - const[statename, setstatename] = usestate()
Using the setstate, the state will always become whatever you want it to be.
Make components parents and children by importing that function accordingly
RFC is to make a functional component
Parents always pass down data, children almost never pass data up
Passing props is done from the parent container, and passing the state/data/info you want, as the same variable preferably.
To access inside of the child, call props in the functional component.

Mapping is a method of looping to access values/data inside an array.
\*\* var.map((indiv var) => whatever you're wanting mapped out)

/////REDUX//////

Redux Flow
-Action is dispatched
-Middleware intercepts the action(this is perfect for API calls)
-After middleware is done with it, the action matches a reducer
-Reducers will then update state
-This will cause a rerender

-Redux allows us to avoid the standard flow of having to go around all the data points to a certain area, and directly relay data to the specific point.

Setup
-import { createStore, applymiddleware } from redux
-import { Provider } from react-redux
-import logger from redux-logger
-use the provider in the render area, and wrap it around the App
-create a store const and use the createstore(rootreducer, applymiddleware)
