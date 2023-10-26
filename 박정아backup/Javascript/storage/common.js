
const elNav = document.querySelectorAll('nav a');

let pageNum = localStorage.pageNum;
if(pageNum) elNav[pageNum].style.color = 'yellow'; 

console.log(
   JSON.parse(localStorage.obj)
   //JSON.stringify(objStr);
)


elNav.forEach(function(menu,key){
    menu.onclick = function(e){
        e.preventDefault();
        localStorage.pageNum = key;

        let objStr = {num:key, name:this.innerText};
        localStorage.obj = JSON.stringify(objStr);

        location.href = this.href;
    }
})


switch(pageNum){
    case '0': console.log( main() ); break;
    case '1': console.log( about() ); break;
    case '2': console.log( board() ); break;
    default : /* 케이스에 해당되지않는다면 디폴트를 실행 */;
}
function main(){ return 'main'}
function about(){ return 'about'}
function board(){ return 'board'}





/* 
    localStorage.키 = 값(문자,숫자,객체,배열);
    localStorage.키

    JSON.parse(객체형식의 문자)   문자 -> 객체로 변형
    JSON.stringify(객체);        객체 -> 문자로 변형

    switch(값){  
        case:값 : 실행문; break;
        default: 값이 없을 경우 실행문;
    }
*/