
import Resact, { useEffect, useState } from 'react'

const { kakao } = window;


function Map() {

    useEffect(()=>{
        const markers = [];
        const container = document.getElementById('map');
        const options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };
        const kakaomap = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        // 장소 검색 객체를 생성합니다 
    },[])
  return (
    <article className='mappage'>
        <div id='map'></div>
    </article>
  )
}

export default Map;