import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import { CountReducer } from "./Redux/Counter/counter.reducer";
import { todoReducer } from "./Redux/Todo/todo.reducer";




const createComposer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose
// export const store = legacy_createStore(reducer , createComposer() )
// Above For single component

const rootReducer = combineReducers({
  counter : CountReducer,
   todos : todoReducer
})
// combineReducers for multiple Reducers

const logger = (state)=>(next)=>(action)=>{
  if(typeof action === "function"){
    return action(state.dispatch,state.getState)

  }
  return next(action)
}

export const store = legacy_createStore( rootReducer , applyMiddleware(logger) )

// passing reducer and also adding middleware it will get called before reducer 
// whenever we do anything with reducer then first middleware will be called and will 
// return actiion
