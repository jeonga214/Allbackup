
function Css(){
    return(
        <div>
            <h2>CSS</h2>
            * class => jsx문법에서 className<br/>
            * jsx문법에서 스크립트를 적용시키려면 {}기호를 반드시 이용<br/>
            * style=&#123; 스크립트기호 &#125;
            &#123; border:'1px solid white' &#125; <br/>
            * style=&#123; &#123; border:'1px solid white' &#125; &#125;
            <hr/>
            <h2>SCSS</h2>
            * sass install (npm install sass)<br/>
            * js문서안에서 scss파일 호출 (inport './App.scss')<br/>
            * 작성방법은 기존과 동일
        </div>
    );
}

export default Css;