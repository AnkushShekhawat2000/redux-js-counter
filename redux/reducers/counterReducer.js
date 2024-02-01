import {INCREASE, DECREASE, RESET} from "../actions/actionTypes.js"

const initialState = {count:0};

const counterReducer = (state = initialState, action) =>{
    
    switch(action.type){
        case INCREASE:
            return {...state, count: state.count + action.value}
         
        case DECREASE:
            return {...state, count: state.count - 1}
          
        case RESET:
            return {...state, count:0}  
            
        default:
            return state    
    }            
    
}


export default counterReducer

