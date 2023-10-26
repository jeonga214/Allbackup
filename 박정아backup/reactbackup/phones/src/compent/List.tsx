import {useContext} from 'react'
import {TestContext} from '../MyContext'

type Props = {}

const List = (props: Props) => {
    const {data,setData} = useContext(TestContext);
    
    const handleDelete = (idToRemove:number) => {
      localStorage.removeItem('data');
      
      const updated = data.filter((obj:any) => obj.id !== idToRemove);
      setData(updated);
    }
  return (
    <article className='list'>
        <h2>연락처 {data.length}개</h2>
        <ul>
            {
             data.map( (obj:any)=>(
                <li key={obj.id}>
                  {obj.msg}<span onClick={() => handleDelete(obj.id)}>삭제</span>
                </li>
             ))
            }
        </ul>
    </article>
  )
}

export default List