import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Reservation() {

    const aaaa = useLocation();
    console.log(aaaa.state.data);
    console.log(aaaa.state.data.place_name);

    // 검진 시간
    const [selectedTime, setSelectedTime] = useState([]);

    console.log(selectedTime);
    // 검진 시간 선택 핸들러
    const handleTimeSelection = (time) => {
        setSelectedTime(time);
    };

    //달력
    const [value, onChange] = useState(new Date());

  return (
    <div className='reservationpage'>
        <h1>예약하기</h1>
        <form className='rescon'>
            <div>
                <div className='stepwrite'>
                    <h2>1. 예약날짜선택</h2>
                    <p>예약하실 날짜를 선택해주세요.
                    </p>
                </div>
                <div className='cal'>
                    <Calendar
                        onChange={onChange}
                        value={value}
                    />
                </div>
            </div>

            <div>
                <div className='stepwrite'>
                    <h2>2. 검진시간선택</h2>
                    <p>검진하실 시간을 선택해주세요.
                        <br/>
                        ※ 항목 이외 시간은 전화문의 {aaaa.state.data.phone}
                    </p>
                </div>
                <div className='timeselect'>
                    <span
                    onClick={() => handleTimeSelection("10:00")}
                    className={selectedTime === "10:00" ? "active" : ""}
                    >
                    10:00
                    </span>
                    <span
                    onClick={() => handleTimeSelection("10:30")}
                    className={selectedTime === "10:30" ? "active" : ""}
                    >
                    10:30
                    </span>
                    <span
                    onClick={() => handleTimeSelection("11:00")}
                    className={selectedTime === "11:00" ? "active" : ""}
                    >
                    11:00
                    </span>
                    <span
                    onClick={() => handleTimeSelection("11:30")}
                    className={selectedTime === "11:30" ? "active" : ""}
                    >
                    11:30
                    </span>
                    <span
                    onClick={() => handleTimeSelection("12:00")}
                    className={selectedTime === "12:00" ? "active" : ""}
                    >
                    12:00
                    </span>
                    <span
                    onClick={() => handleTimeSelection("12:30")}
                    className={selectedTime === "12:30" ? "active" : ""}
                    >
                    12:30
                    </span>
                    <span
                    onClick={() => handleTimeSelection("13:00")}
                    className={selectedTime === "13:00" ? "active" : ""}
                    >
                    13:00
                    </span>
                    <span
                    onClick={() => handleTimeSelection("13:30")}
                    className={selectedTime === "13:30" ? "active" : ""}
                    >
                    13:30
                    </span>
                    <span
                    onClick={() => handleTimeSelection("14:00")}
                    className={selectedTime === "14:00" ? "active" : ""}
                    >
                    14:00
                    </span>
                    <span
                    onClick={() => handleTimeSelection("14:30")}
                    className={selectedTime === "14:30" ? "active" : ""}
                    >
                    14:30
                    </span>
                    <span
                    onClick={() => handleTimeSelection("15:00")}
                    className={selectedTime === "15:00" ? "active" : ""}
                    >
                    15:00
                    </span>
                    <span
                    onClick={() => handleTimeSelection("15:30")}
                    className={selectedTime === "15:30" ? "active" : ""}
                    >
                    15:30
                    </span>
                    <span
                    onClick={() => handleTimeSelection("16:00")}
                    className={selectedTime === "16:00" ? "active" : ""}
                    >
                    16:00
                    </span>
                    <span
                    onClick={() => handleTimeSelection("16:30")}
                    className={selectedTime === "16:30" ? "active" : ""}
                    >
                    16:30
                    </span>
                    <span
                    onClick={() => handleTimeSelection("17:00")}
                    className={selectedTime === "17:00" ? "active" : ""}
                    >
                    17:00
                    </span>
                </div>
            </div>

            <div>
                <div className='stepwrite'>
                    <h2>3. 검진항목선택</h2>
                    <p>검진하실 내용을 선택해주세요.
                        <br/>
                        ※ 항목선택과 관계없이 상담 후 시술 진행됩니다.
                    </p>
                </div>
                <ul className='arti'>
                    <li>
                        <input type='checkbox'/>스케일링
                    </li>
                    <li>
                        <input type='checkbox'/>건강검진
                    </li>
                    <li>
                        <input type='checkbox'/>중성화수술
                    </li>
                    <li>
                        <input type='checkbox'/>심장사상충검사
                    </li>
                    <li>
                        <input type='checkbox'/>기타
                    </li>
                </ul>
            </div>

        </form>
    </div>
  )
}

export default Reservation