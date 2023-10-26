
import { useLocation } from 'react-router-dom';

function Detail() {

  const detail2 = useLocation();
  console.log(detail2.state.item)

  return (
    <>
      <div className="detail">
        <p className='aniimg'><img src={detail2.state.item.popfile._text}/></p>
        <p><span>코드: </span>{detail2.state.item.desertionNo._text}</p>
        <p><span>상태: </span>{detail2.state.item.processState._text}</p>
        <p><span>품종: </span>{detail2.state.item.kindCd._text}</p>
        <p><span>나이: </span>{detail2.state.item.age._text}</p>
        <p><span>보호기간: </span>{detail2.state.item.noticeSdt._text} ~ {detail2.state.item.noticeEdt._text}</p>
        <p><span>보호소: </span>{detail2.state.item.careNm._text}</p>
        <p><span>담당자연락처: </span>{detail2.state.item.officetel._text}</p>
      </div>
    </>
  );
}

export default Detail;
