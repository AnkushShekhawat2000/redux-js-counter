import store from "./redux/store.js";
import {increase, decrease, reset} from "./redux/actions/counterActions.js"


// store => getState(), dispatch()

//getState()  will help to access the current from the state

console.log("initial Value", store.getState());

 const disp = store.dispatch(increase()) // actions details as object
 console.log("dispatch", disp );

// store.dispatch({type: INCREASE})


console.log("initial Value", store.getState());
store.dispatch(increase()) // actions details as object


// store.dispatch({type: INCREASE})
console.log("initial Value", store.getState());
store.dispatch(increase(100)) // actions details as object
console.log("initial Value", store.getState());

const dis = store.dispatch(decrease()) // actions details as object
// store.dispatch({type: INCREASE})
console.log("initial Value", store.getState());