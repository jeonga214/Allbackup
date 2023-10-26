import {DataContext} from '../Attendance'
import {useContext} from 'react'


function AttendWrite({isButtonActive}) {
    const {data,setData} = useContext(DataContext);
    let insert = (e) =>{
        e.preventDefault();
        let v = e.target;
        let d = {
            name:v.name.value
        }
        
        setData([...data,d]);
    }

  return (
    <article className={isButtonActive ? 'add active' : 'add'}>
        <h2>참여자등록</h2>
        <form onSubmit={insert}>
            <input type='text' name='name' placeholder='이름 ?'/>
            <input type='submit' value='저장하기' className='submit'/>
        </form>
    </article>
  )
}

export default AttendWrite