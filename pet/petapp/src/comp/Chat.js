
import axios from 'axios';
import { useEffect, useState } from 'react';
import delet from '../img/more.svg';

function popup() {
  const pop = document.querySelector('.pop');
  const write_whole = document.querySelector('.whole');

  pop.classList.add('active');
  write_whole.classList.add('active');

}

function List({ data, setData }) {
  const remove = (id) => {

    axios.delete(`${process.env.REACT_APP_SERVER}/abc/${id}`)
      .then(res => {
        // 서버로부터 삭제된 데이터 목록을 받아옴
        const updatedData = res.data;

        // 업데이트된 데이터의 id 값 조정
        // 삭제된 id 이상의 id 값들을 -1씩 조정
        for (let i = 0; i < updatedData.length; i++) {
          if (updatedData[i].id >= id) {
            updatedData[i].id--;
          }
        }

        setData(updatedData);
      });
  }

  const popupdel = (e) => {
    // 모든 이미지의 .delpopdata 요소에서 active 클래스를 제거
    const allPopdel = document.querySelectorAll('.delpopdata.active');
    allPopdel.forEach((popdel) => {
      popdel.classList.remove('active');
    });

    // 클릭한 img 요소의 형제 요소인 .delpopdata에 active 클래스를 토글
    const popdel = e.currentTarget.nextElementSibling;
    popdel.classList.toggle('active');
  }

  return(
    <>
      {
       data.map(obj=>(
        <li key={obj.id} className='listt'>
          <div className='listcon'>
            <h2>{obj.title}</h2>
            <hr/>
            <p>{obj.msg}</p>
          </div>
          <div className='deltese'>
            <img src={delet} onClick={popupdel}/>
            <div className='delpopdata'>
              <p onClick={()=>{remove(obj.id)}}>삭제</p>
              <br></br>
              <p>수정</p>
            </div>
          </div>
        </li>
       )) 
      }
    </>
  );
}

function Write({setData}){

  const insert = (e) =>{
    e.preventDefault();
    let ani = e.target.ani.value;

    let msg = e.target.msg.value;
    let title = e.target.title.value;
    axios.post(`${process.env.REACT_APP_SERVER}/insert`,{
      msg,title,ani
    }).then(res=>{
      e.target.msg.value = '';
      e.target.title.value = '';
      setData(res.data)
    })
  }

  function popdown(){
    const pop = document.querySelector('.pop');
    const write_whole = document.querySelector('.whole');
    pop.classList.remove('active');
    write_whole.classList.remove('active');
  }

  return(
    <div>
      <div className='write_title'>글쓰기</div>
      <form onSubmit={insert}>
        <fieldset className='anisel'>
          <label>
            <input type='radio' name='ani' value='강아지'/>강아지
          </label>
          <label>
            <input type='radio' name='ani' value='고양이'/>고양이
          </label>
        </fieldset>
        <fieldset className='con'>
          <input type='text' name='title' />
          <input type='text' name='msg' />
          <input type='submit' value='게시글 올리기' onClick={popdown}/>
        </fieldset>
      </form>
    </div>
  );
}

function Chat() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); // 필터링된 데이터 상태 추가

  const getData = () => {
    axios.get(`${process.env.REACT_APP_SERVER}/abc?id=100`)
      .then(res => {
        setData(res.data);
        setFilteredData(res.data); // 데이터를 받아올 때 필터링된 데이터 초기화
      });
  }

  useEffect(() => {
    getData();

    const spanclickevent = document.querySelectorAll('.animal span');
    spanclickevent[0].classList.add('active');
  }, []);



  // "전체", "강아지", "고양이" 값을 누르면 
  const handleClick = (aniValue) => {
    const spanclickevent = document.querySelectorAll('.animal span');
    
    if (aniValue === "전체") {
      setFilteredData(data); // 전체를 누르면 
    } else {
      const filtered = data.filter((item) => item.ani === aniValue);
      setFilteredData(filtered); // 다른 값을 누르면 
    }

    // 모든 span 요소에서 'active' 클래스 제거
  spanclickevent.forEach((span) => {
    span.classList.remove('active');
  });

  // 클릭한 span 요소에 'active' 클래스 추가
  spanclickevent.forEach((span) => {
    if (span.innerText === aniValue) {
      span.classList.add('active');
    }
  });

  };

  return (
    <article className='writepage'>
      <div className='writecon'>
        <h2>커뮤니티({filteredData.length})</h2>
        <div className='animal'>
          {["전체", "강아지", "고양이"].map((aniValue, index) => (
            <span key={index} onClick={() => handleClick(aniValue)}>
              {aniValue}
            </span>
          ))}
        </div>
        <div className='whole'></div>
        <ul>
          <List data={filteredData} setData={setData} />
        </ul>
      </div>
      <div className='writepop' onClick={popup}>
        글쓰기버튼
      </div>
      <div className='pop'>
        <Write setData={setData} />
      </div>
    </article>
  );
}

export default Chat;