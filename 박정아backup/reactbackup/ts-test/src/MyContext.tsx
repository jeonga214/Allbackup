import {ReactNode, createContext, useState} from 'react'
import sports from './data.json'
import {ts_sports} from './types';


export const TestContext = createContext<any>(null);

type Props = {
  children : React.ReactNode
}

const MyContext = ({children}:Props) => {

  const [data, setData] = useState(sports);

  return (
    <TestContext.Provider value={{data}}>
      {children}
    </TestContext.Provider>
  )
}

export default MyContext