import {DataContext} from '../MyContext';
import {useContext} from 'react'


function List() {
    const {data,setData} = useContext(DataContext);

  return (
    <article>
        <h2>List</h2>
        <ul>
        {
            data.map((item)=>(
                <li key={item.id}>
                    {item.name}({item.email})<br/>
                    {item.txt}({Date(item.id)})
                </li>
            ))
        }
        </ul>  
    </article>
  )
}

export default List