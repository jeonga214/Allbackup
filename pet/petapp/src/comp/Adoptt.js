import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import { Link, useParams } from 'react-router-dom';

function Adoptt() {
  const [data, setData] = useState([]); // data
  const [pageNum, setPageNum] = useState(1);
  const [totalCount, setTotalCount] = useState(0); // 전체 아이템 수
  const itemsPerPage = 5; // 페이지당 아이템 수
  const totalPages = Math.ceil(totalCount / itemsPerPage); // 전체 페이지 수

  //console.log(data);

  function adoptsearch(e) {
    e?.preventDefault();
    let s1 = document.querySelector('[name=s1]').value;
    let s2 = document.querySelector('[name=s2]').value;
    let s3 = document.querySelector('[name=s3]').value;

    if(e?.target){
      setPageNum(1)
    }

    const apiUrl = 'http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic'

    const params = {
      pageNo: pageNum,
      numOfRows: itemsPerPage,
      upkind: s3,
      upr_cd: s2,
      state: s1,
      serviceKey: 'TZfsVHVWd9fA3Rqbp2a6xaGgeoqpLx0eWKAWs5Cfh2oNP38l5bl5c0yfwr1cMcJRbDxDgC7EbSI8GaCgLoZMaQ==',
    };

    axios.get(apiUrl, { params })
      .then(response => {
        const convert = require('xml-js');
        // XML 데이터를 JSON으로 변환
        const jsonData = convert.xml2json(response.data, { compact: true, spaces: 4 });
        // jsonData를 JavaScript 객체로 변환
        const parsedData = JSON.parse(jsonData);

        // 데이터를 상태 변수에 저장
        setData(parsedData.response.body.items.item);
        setTotalCount(parsedData.response.body.totalCount._text); // 전체 아이템 수 업데이트
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  useEffect(() => {
    adoptsearch();
  }, [pageNum])

  const renderPageButtons = () => {
    const buttons = [];

    if (data && data.length > 0) {
      // 데이터가 있는 경우에만 페이지 버튼 생성 로직 추가
      const currentPageGroup = Math.ceil(pageNum / 5);
      const startPage = (currentPageGroup - 1) * 5 + 1;
      const endPage = Math.min(currentPageGroup * 5, totalPages);
    
      if (currentPageGroup > 1) {
        buttons.push(
          <button key="prev" onClick={() => setPageNum((currentPageGroup - 2) * 5 + 5)}>
            &lt;
          </button>
        );
      }
    
      for (let page = startPage; page <= endPage; page++) {
        buttons.push(
          <button
            key={page}
            onClick={() => setPageNum(page)}
            disabled={page === pageNum}
          >
            {page}
          </button>
        );
      }
    
      if (currentPageGroup < Math.ceil(totalPages / 5)) {
        buttons.push(
          <button key="next" onClick={() => setPageNum(currentPageGroup * 5 + 1)}>
            &gt;
          </button>
        );
      }
    }


    return buttons;
  };


  return (
    <article className='adoptpage'>
      <div className='search'>
        <div className='select'>
          <div className='select2'>
            <form onSubmit={adoptsearch}>
              <select name='s1' defaultValue="protect">
                <option value="">상태</option>
                <option value="notice">공고중</option>
                <option value="protect">보호중</option>
              </select>
              <select name='s2' defaultValue="6110000">
                <option value="">시,도 선택</option>
                <option value="6110000">서울특별시</option>
                <option value="6260000">부산광역시</option>
                <option value="6270000">대구광역시</option>
                <option value="6280000">인천광역시</option>
                <option value="6290000">광주광역시</option>
                <option value="5690000">세종특별자치시</option>
                <option value="6300000">대전광역시</option>
                <option value="6310000">울산광역시</option>
                <option value="6410000">경기도</option>
                <option value="6530000">강원특별자치도</option>
                <option value="6430000">충청북도</option>
                <option value="6440000">충청남도</option>
                <option value="6450000">전라북도</option>
                <option value="6460000">전라남도</option>
                <option value="6470000">경상북도</option>
                <option value="6480000">경상남도</option>
                <option value="6500000">제주특별자치도</option>
              </select>
              <select name='s3' defaultValue="417000">
                <option value="">종 선택</option>
                <option value="417000">강아지</option>
                <option value="422400">고양이</option>
                <option value="429900">기타</option>
              </select>
              <button>적용</button>
            </form>
          </div>
        </div>
      </div>
      <div className='adoptlist'>
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <Link to={`/adopt/${item.desertionNo._text}`} state={{item}}>
              <div className='adopt' key={index}>
                <div><img src={item.popfile._text} /></div>
                <div>
                  <h2><span>코드</span>{item.desertionNo._text}</h2>
                  <p><span>품종 : </span>{item.kindCd._text}</p>
                  <p><span>나이 : </span>{item.age._text}</p>
                  <p><span>보호소 : </span>{item.careNm._text}</p>
                  <p><span>기간 : </span>{item.noticeSdt._text} ~ {item.noticeEdt._text}</p>
                  <p><span>상태 : </span>{item.processState._text}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div>결과가 없습니다.</div>
        )}
      </div>
      <div className='pagenum'>
        {renderPageButtons()}
      </div>
    </article>
  )
}

export default Adoptt;
