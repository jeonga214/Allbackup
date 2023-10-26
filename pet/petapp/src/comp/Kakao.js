import React, { useEffect, useState } from 'react';
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import * as S from './Kakao.style';
//import leftAngle from '../../assets/icon/angle-small-left.svg';
import rightAngle from '../img/chat.svg';
import Modall from './Modal';

const { kakao } = window;

const KEYWORD_LIST = [
  { id: 1, value: '동물병원'},
  { id: 2, value: '동물약국'},
];

const theme = {
    colors: {
      primary: '#85afde', // 원하는 primary 색상을 여기에 지정
      warning: '#bde3f0', // 원하는 warning 색상을 여기에 지정
      white: '#eee294', // 원하는 white 색상을 여기에 지정
    },
  };

function Kakao () {

  // 기본 위치 상태
  const [state, setState] = useState({
    center: {
      lat: null,
      lng: null,
    },
    errMsg: null,
    isLoading: true,
  });

  // 카카오 맵에 접근해 지도 상태 조작하는 상태 변수
  const [map, setMap] = useState(null);
  // 검색에 사용될 키워드를 관리하는 상태 변수
  const [keyword, setKeyword] = useState('동물병원');
  // 검색 결과를 담는 상태 변수
  const [search, setSearch] = useState([]);
  // 검색 결과의 페이지네이션 정보를 관리하는 상태 변수
  const [pagination, setPagination] = useState(null);
  // 현재 페이지 번호를 관리하는 상태 변수
  // 페이지네이션 기능과 연동해 어떤 페이지를 보고 있는지 나타냄
  const [currentPage, setCurrentPage] = useState(1);
  // 현재 열려있는 마커의 ID를 관리하는 상태 변수
  const [openMarkerId, setOpenMarkerId] = useState(null);
  // 사이드바의 열림/닫힘 상태를 관리하는 상태 변수
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // 모바일 환경에서 사용될 모달의 열림/닫힘 상태를 관리하는 상태 변수
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 현재 사용자 위치 받아오기 (geolocation)
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            isLoading: false,
          }));
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        },
      );
    } else {
      setState((prev) => ({
        ...prev,
        errMsg: 'geolocation을 사용할수 없어요..',
        isLoading: false,
      }));
    }
  }, []);

  // 카테고리 검색으로 주변 위치 검색하기
  const searchPlaces = (page) => {
    // Places 서비스 객체 생성
    const ps = new kakao.maps.services.Places();
    // 검색 옵션 설정
    const options = {
      location: new kakao.maps.LatLng(state.center.lat, state.center.lng),
      radius: 3000,
      sort: kakao.maps.services.SortBy.DISTANCE,
      page, // 현재 페이지 번호 추가
    };

    // Places 서비스의 keywordSearch 메소드 호출
    ps.keywordSearch(
      keyword,
      (data, status, pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          console.log(data);
          displayPlaces(data); // 검색된 장소를 지도에 표시하는 함수 호출 추가
          setPagination(pagination); // 페이지네이션 정보 업데이트 추가
        } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
          setIsSidebarOpen(true); // 사이드바 열기 추가
          setSearch(data);
        } else if (status === kakao.maps.services.Status.ERROR) {
          console.error('검색에 실패하였습니다.');
        }
      },
      options,
    );
  };


  const displayPlaces = (data) => {
    const bounds = new kakao.maps.LatLngBounds();
    data.forEach((item) => bounds.extend(new kakao.maps.LatLng(item.y, item.x)));
    bounds.extend(new kakao.maps.LatLng(state.center.lat, state.center.lng));
    map.setBounds(bounds);
    setSearch(data);
  };

  // 마커의 위치로 지도의 중심 좌표 이동하기
  const moveLatLng = (data) => {
    const newLatLng = new kakao.maps.LatLng(data.y, data.x);
    map.panTo(newLatLng);
  };

  // 클릭한 마커로 중심 좌표 이동 및 검색 수행 함수
  useEffect(() => {
    if (!map) return;
    setOpenMarkerId(null);
    searchPlaces(currentPage);
  }, [map, keyword, currentPage]);

  // 마커 클릭 시 CustomOverlayMap를 열고 닫는 함수
  useEffect(() => {
    if (!map) return;
    const clickListener = () => {
      setOpenMarkerId(null);
    };
    kakao.maps.event.addListener(map, 'click', clickListener);

    return () => {
      kakao.maps.event.removeListener(map, 'click', clickListener);
    };
  }, [map]);

  // 카카오톡 공유 init 설정
  useEffect(() => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init('9090c2064fcc57dc757ac8e1393cdcf4');
      }
    }
  }, []);

  if (state.isLoading) return <div>Loading...</div>;
  
  return (
    <ThemeProvider theme={theme}>
    <>
      <S.MapContainer>
        {/* 지도 컴포넌트 */}
        <Map
          center={state.center}
          style={{ width: '100%', height: '852px', borderRadius: '25px'}}
          level={5}
          onCreate={setMap} // 지도가 생성될 때 setMap 함수를 호출해 지도 객체 업데이트 추가
        >
          {/* 현재 위치 마커 표시 */}
          <MapMarker
            position={state.center}
            image={{
              src: 'https://cdn-icons-png.flaticon.com/128/7124/7124723.png',
              size: {
                width: 50,
                height: 50,
              },
            }}
          />
          {/* 검색된 장소 마커 표시 */}
          {search.map((data) => (
            <React.Fragment key={data.id}>
              <MapMarker
                key={data.id}
                position={{ lat: data.y, lng: data.x }}
                image={{
                  src: 'https://cdn-icons-png.flaticon.com/128/2098/2098567.png',
                  size: {
                    width: 35,
                    height: 35,
                  },
                }}
                onClick={() => {
                  if (data.id === openMarkerId) {
                    setOpenMarkerId(null);
                  } else {
                    setOpenMarkerId(data.id);
                    moveLatLng(data);
                  }
                }}
              />
              {/* 해당 마커에 커스텀 오버레이 표시 */}
              {openMarkerId === data.id && (
                <CustomOverlayMap yAnchor={2.1} position={{ lat: data.y, lng: data.x }} clickable>
                  <S.Overlay>
                    <S.Arrow />
                    <S.PlaceName>{data.place_name}</S.PlaceName>
                    {/* 상세 정보로 연결되는 링크 */}
                    <S.DetailLink href={data.place_url} target='_blank'>
                      <img src={rightAngle} alt='오른쪽 화살표' />
                    </S.DetailLink>
                  </S.Overlay>
                </CustomOverlayMap>
              )}
            </React.Fragment>
          ))}
        </Map>
        {/* 검색 버튼들 */}
        <S.SearchBtns>
          {KEYWORD_LIST.map((item) => (
            <S.KeywordBtn
              key={item.id}
              type='button'
              selected={item.value === keyword}
              onClick={() => setKeyword(item.value)}
            >
              {item.value}
            </S.KeywordBtn>
          ))}
        </S.SearchBtns>
          <S.Modal>
            <S.ModalBtn onClick={() => setIsModalOpen((prev) => !prev)} />
            <Modall
              search={search}
              openMarkerId={openMarkerId}
              setOpenMarkerId={setOpenMarkerId}
              isModalOpen={isModalOpen}
              moveLatLng={moveLatLng}
              pagination={pagination}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </S.Modal>
      </S.MapContainer>
    </>

    </ThemeProvider>
  );
};

export default Kakao;

const SearchBtns = styled.div`
  position: absolute;
  top: 50px;
  right: 50%;
  transform: translateX(50%);
  z-index: 10;
  display: flex;
  gap: 10px;
  background-color: #dadada;
  padding:10px;
  border-radius :30px;

  button {
    width: 110px;
    padding: 15px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 30px;
    border:none;
    font-size: 1.2em;
    color: ${({ theme }) => theme.colors.white};
    font-size:13px;
    font-weight:700;
  }

  button:hover {
    background-color: ${({ theme }) => theme.colors.warning};
  }
`;