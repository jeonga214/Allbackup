import {createContext, useEffect, useReducer} from 'react'
import axios from 'axios';
export const MyContext = createContext();

const reducer = (state,action)=>{
    switch(action.type){
        case 'post' : return [...state, action.d];
        case 'put' : return state.map(obj=>{
            if(obj.id == action.d.id){
                obj.price = action.d.price;
                obj.msg = action.d.msg;
                obj.date = action.d.date;
            }
            return obj;
        });
        case 'del' : return state.filter(obj=>obj.id != action.d);
        default : return action.d ;
    }
}

function Context({children}) {

    const [data,dispatch] = useReducer(reducer,[]);

    const instance = axios.create({
        baseURL : 'http://localhost:3030/history'
    });

    // const fetchFn = () => {
    //     instance.get('/')
    //     .then(res=>{
    //         dispatch({type:'get', d:res.data})
    //     })
    // }

    const fetchFn = async (type,data) => {
        let res;

        switch(type){
            case 'post' : 
                res = await instance.post('/',data);
                break;
            case 'put' : 
                res = await instance.put(`/${data.id}`,data);
                break;
            case 'del' : 
                res = await instance.delete(`/${data}`);
                res = {data};
                break;
            default : 
                res = await instance.get('/');
        }

        dispatch({type, d:res.data})
    }


    useEffect(()=>{
        fetchFn('get')
    },[])


  return (
    <MyContext.Provider value={{data, fetchFn}}>
        {children}
    </MyContext.Provider>
  )
}

export default Context