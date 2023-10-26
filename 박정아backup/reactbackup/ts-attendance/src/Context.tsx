import {createContext, useState, useReducer} from 'react';
export const MyContext = createContext<any>(null);

//type aa ={
//  children:React.ReactNode
//}
//const Context:React.Fc<aa> = ({children})=>{}
const Context = ({ children }:{ children: React.ReactNode }) : JSX.Element => {

  const reducer = (state:any, action:any)=>{
    switch(action.type){
      case 'add' : return [...state,action.d];
      case 'del' : return [...action.d];
    }
  }
  const [data,dispatch] = useReducer(reducer,[]);


  return (
    <MyContext.Provider value={{data,dispatch}}>
        {children}
    </MyContext.Provider>
  )
}




export default Context;