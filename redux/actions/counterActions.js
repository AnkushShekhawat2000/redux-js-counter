import {INCREASE, DECREASE, RESET} from "./actionTypes.js"

// actions are objects

// action  creater are functions that return objects

 export const increase = (value=1) =>{
    return {
        type: INCREASE,
        value:value
    }
}

export const decrease = () =>{
    return {
        type: DECREASE
    }
}

export const reset = () =>{
    return {
        type: RESET
    }
}

// export {increment, decrement, reset}