import logo from '../logo.svg';

function Image() {
  return (
    <>
        * src폴더안에 이미지 출력
        <img src ={logo} alt=""/>
        <br/><br/>

        * public폴더안에 이미지 출력
        <img src ="./logo512.png" alt=""/>
    </>
  )
}

export default Image