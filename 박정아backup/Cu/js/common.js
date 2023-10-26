
// 내용 추가 => prepend(앞),append(뒤)
$('body').prepend('<header></header>');
$('header').load('./inc.html .a-1, .a-2', menu);
$('body').append('<footer></footer>');
$('footer').load('./inc.html .j-1');


function menu(){
    const elFix = document.querySelector('header .a-2'),
    elMain = document.querySelector('main'),
    elIntro = document.querySelector('.intro_2'),
    elIndex = document.querySelector('.content_index');

       window.addEventListener('scroll',function(){
           if(window.pageYOffset > 36){
               elFix.classList.add('active');
                elMain.classList.add('active');
           }else{
               elFix.classList.remove('active');
               elMain.classList.remove('active');
           }

           if(window.pageYOffset > 310){
                elIntro.classList.add('active');
                elIndex.classList.add('active');
            }else{
                elIntro.classList.remove('active');
                elIndex.classList.remove('active');
            }
   
       })

       
    const elLang = document.querySelector('.a-2 .lang > a'),
    elHidden = document.querySelector('.a-2 .lang .hidden_menu'),
    elHidden2 = document.querySelector('.hidden_menu > a');

    console.log(elHidden2);

    elLang.onclick = function(){
        elHidden.classList.add('active');
    }
    elHidden2.onclick = function(){
        elHidden.classList.remove('active');
    }



    const elMenuLang = document.querySelector('.menu_lang>a'),
    elMenuLangCon = document.querySelector('.menu_lang ul'),
    elCountry = document.querySelectorAll('.menu_lang ul a');

    elMenuLang.onclick = function(){
        elMenuLangCon.classList.toggle('active');
        elCountry[0].classList.add('active');
    }

}




const elIndex2_1 = document.querySelectorAll('.intro_1 .a-2 a');

elIndex2_1[2].onclick =function(){
    var userInput = prompt('현재 페이지의 주소입니다. Ctrl+C를 눌러 클립보드로 복사하세요',"https://cu.bgfretail.com/brand_info/story.do?category=brand_info&sf=N#");
    alert(
        userInput
    );
}



const elIntro2 = document.querySelectorAll('.intro_2 li'),
elCon2 = document.querySelectorAll('.content_index div');

let num = 0;
elIntro2.forEach(function(button,k){

    elIntro2[0].classList.add('active');
    elCon2[0].classList.add('active');

    button.onclick = function(){

        elIntro2[num].classList.remove('active');
        this.classList.add('active');

        elCon2[num].classList.remove('active');
        elCon2[k].classList.add('active');

        num = k;

    }
})


