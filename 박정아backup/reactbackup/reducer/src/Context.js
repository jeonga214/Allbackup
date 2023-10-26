import { createContext, useReducer, useState } from 'react'
const MyContect = createContext();

const reducer = (state, action) => {
    switch(action.type){
        case 'insert' : return [...state, action.data];
        case 'delete' : return state.filter( obj => obj.id != action.id);
        default : return state;
    };
}

function Context({children}) {
    const [data,dispatch] = useReducer(reducer, []);

  return (
    <MyContect.Provider value={{data,dispatch}}>
        {children}
    </MyContect.Provider>
  )
}

export {MyContect,Context}