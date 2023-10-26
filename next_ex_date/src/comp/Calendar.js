import { Calendar } from 'react-date-range';
import { Component } from 'react';
class CalendarComponent extends Component {
    constructor(props) {     
        super(props); // React.Component의 생성자 메소드를 먼저 실행     
        this.state = { // 이 컴포넌트의 state 설정       
          date: "" // date 초기값    
        };   
      };   
      handleSelect = (_date) => {     
        console.log(_date); // native Date object     
        this.setState();   
      }   
      render(){     
        return (       
          <div>         
            <Calendar/>
            <div></div>       
          </div>     
        )   
      } 
} 
export default CalendarComponent; 