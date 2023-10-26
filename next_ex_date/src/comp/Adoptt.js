
import React, { useEffect, useState } from 'react'
import axios from 'axios';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getMonth, getYear, getDate,addYears } from 'date-fns';
import { ko } from "date-fns/locale";

function Adoptt(){
  const [data, setData] = useState([]); //data
  const [selectedDate, setSelectedDate] = useState(null); //달력
  const [selectedDate2, setSelectedDate2] = useState(null); //달력
  const [upkind, setUpkind] = useState(''); // 종 선택 값을 상태로 관리

  const handleDateChange = (date) => {
    setSelectedDate(date);

    if (date) {
      setSelectedDate2((prevDate2) => {
        // 만약 prevDate2가 selectedDate보다 이전 날짜라면 selectedDate로 업데이트
        if (prevDate2 && prevDate2 < date) {
          return date;
        }
        return prevDate2;
      });
    }
  };
  const handleDateChange2 = (date2) => {
    setSelectedDate2(date2);
  };

  const handleUpkindChange = (event) => {
    const selectedUpkind = event.target.value;
    setUpkind(selectedUpkind);

    const apiUrl = 'http://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic'
    const apiUrl2 = 'http://apis.data.go.kr/1543061/abandonmentPublicSrvc/sido'

    const params = {
      bgnde: '',
      endde: '',
      pageNo: 1,
      numOfRows: 5,
      orgdownNm:'',
      upkind: selectedUpkind,
      org_cd:'',
      serviceKey: 'TZfsVHVWd9fA3Rqbp2a6xaGgeoqpLx0eWKAWs5Cfh2oNP38l5bl5c0yfwr1cMcJRbDxDgC7EbSI8GaCgLoZMaQ==',
    };

    axios.get(apiUrl,{params})
      .then(response => {
        const convert = require('xml-js');
        // XML 데이터를 JSON으로 변환
        const jsonData = convert.xml2json(response.data, { compact: true, spaces: 4 });
        // jsonData를 JavaScript 객체로 변환
        const parsedData = JSON.parse(jsonData);
        

        // 데이터를 상태 변수에 저장
        setData(parsedData.response.body.items.item);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
    });

}

  

  return (
    <article className='adoptpage'>
      <div className='search'>
        <div className='select'>
          <div className='select1'>
            <DatePicker
              locale={ko} //한국어설정
              placeholderText='유기날짜'
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="yyyy.MM.dd"
              minDate={new Date()} // minDate 이전 날짜 선택 불가
              popperPlacement='auto' //가운데 오게
              renderCustomHeader={({
                date,
                changeYear,
                changeMonth,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
              }) => (
                <div
                  style={{
                    margin: 10,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className="btn_month btn_month-prev"
                    onClick={decreaseMonth}
                    disabled={prevMonthButtonDisabled}
                  >
                    <img src="/chevron_left_FILL0_wght400_GRAD0_opsz24.png" />
                  </div>
                  <div className="month-day">
                    {getYear(date)}.{getMonth(date)+1}
                  </div>

                  <div
                    className="btn_month btn_month-next"
                    onClick={increaseMonth}
                    disabled={nextMonthButtonDisabled}
                  >
                    <img src="/chevron_right_FILL0_wght400_GRAD0_opsz24.png" />
                  </div>
                </div>
              )}
            >
            </DatePicker>
            <DatePicker
              locale={ko} //한국어설정
              placeholderText='종료날짜'
              selected={selectedDate2}
              onChange={handleDateChange2}
              dateFormat="yyyy.MM.dd"
              minDate={selectedDate} // minDate 이전 날짜 선택 불가
              popperPlacement='auto' //가운데 오게
              renderCustomHeader={({
                date,
                changeYear,
                changeMonth,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
              }) => (
                <div
                  style={{
                    margin: 10,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className="btn_month btn_month-prev"
                    onClick={decreaseMonth}
                    disabled={prevMonthButtonDisabled}
                  >
                    <img src="/chevron_left_FILL0_wght400_GRAD0_opsz24.png" />
                  </div>
                  <div className="month-day">
                    {getYear(date)}.{getMonth(date)+1}
                  </div>

                  <div
                    className="btn_month btn_month-next"
                    onClick={increaseMonth}
                    disabled={nextMonthButtonDisabled}
                  >
                    <img src="/chevron_right_FILL0_wght400_GRAD0_opsz24.png" />
                  </div>
                </div>
              )}
            >
            </DatePicker>
          </div>
          <div className='select2'>
            <select>
              <option>시,군 선택</option>
              <option value="6110000">서울특별시</option>
              <option value="6260000">부산광역시</option>
              <option value="6270000">대구광역시</option>
              <option value="6280000">인천광역시</option>
              <option value="6290000">광주광역시</option>
            </select>
            <select onChange={handleUpkindChange}>
              <option value="">종 선택</option>
              <option value="417000">강아지</option>
              <option value="422400">고양이</option>
            </select>
          </div>
        </div>
        <input type='submit' value='검색'/>
      </div>
      <div className='adoptlist'>
      {data.map((item, index) => (
        <div className='adopt' key={index}>
          <div><img src={item.popfile._text}/></div>
          <div>
            <h2><span>코드</span>{item.desertionNo._text}</h2>
            <p><span>품종: </span>{item.kindCd._text}</p>
            <p><span>나이 : </span>{item.age._text}</p>
            <p><span>보호소 : </span>{item.careNm._text}</p>
            <p><span>상태 : </span>{item.processState._text}</p>
          </div>
        </div>
        ))}
      </div>
      <div className='pagenum'>
        <button>&lt;</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>&gt;</button>
      </div>
    </article>
  )
}

//https://yelee.tistory.com/90
//https://yohanpro.com/posts/react/react-datepicker

export default Adoptt