'use client'
import { useReducer, useState } from "react";


const reducer = (state:any, action:any) => {
    switch (action.type) {
        case "INCREMENT":
          return { ...state, count: state.count +  1};
    
        case 'DECREMENT': 
          return { ...state, count: state.count - 1}

        case 'TOGGLE_HIDDEN': 
          return { ...state, hidden: !state.hidden}

        default: 
          return state;
    } 
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0, hidden: false });
    return(
        <div className="flex justify-around py-4">
            <button className="bg-red-500 px-4 py-2 text-lg text-white rounded-md" onClick={
                () => {
                    dispatch({type: "INCREMENT"})
                }
            }>Increment</button>
            <h1>Count: {state.count}</h1>
            <button className="bg-red-500 px-4 py-2 text-lg text-white rounded-md" onClick={
                () => {
                    dispatch({type: "DECREMENT"})
                }
            }>Decrement</button>
            <button className="bg-red-500 px-4 py-2 text-lg text-white rounded-md" onClick={
                () => {
                    dispatch ({type: "TOGGLE_HIDDEN"})
                }
            }>Hide</button>
            {state.hidden ? <h1>Hidden</h1> : <h1>Not Hidden</h1>}
        </div>
    )
}

export default UseReducer;