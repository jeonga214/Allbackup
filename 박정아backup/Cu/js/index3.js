
const elSSubNav = document.querySelectorAll('.content_index .whole_nav a'),
    elSSuCon = document.querySelectorAll('.content_index .whole_content>div');

    const elSSubNav2 = document.querySelector('.detail_content .top_nav');
    const elTopNav2 = document.querySelectorAll('.top_nav2 >a');

    console.log(elTopNav2,'sdfsfsdf')

    let product = [
        {keyword:'전체,도시락,샌드위치/햄버거,주먹밥/김밥'},
        {keyword:'전체,튀김류,베이커리,즉석커피'},
        {keyword:'전체,스낵/비스켓,빵/디저트,껌/초콜릿/캔디'},
        {keyword:'전체,아이스크림'},
        {keyword:'전체,가공식사,안주류,식재료'},
        {keyword:'전체,음료,아이스드링크,유제품'},
        {keyword:'전체,취미/레저,의약외품,신변잡화,생활잡화'},
    ]
 

    let numm = 0, num2=0, num3=0;

    elSSubNav.forEach(function(but,key){
        //leftnav 초록 초기
        elSSubNav[0].classList.add('act');
        //topnav 생성 초기
        elSSubNav2.innerHTML ='';
        let arrKey2 = product[0].keyword.split(',');
        arrKey2.forEach(function(v){
            elSSubNav2.innerHTML +=`<a>${v}</a>`;
        })
        topMenu();


        but.onclick = function(){
            //leftnav클릭시 초록
            elSSubNav[numm].classList.remove('act');
            this.classList.add('act');
            numm = key;
            num2 = 0; num3=0;

            //topnav생성
            elSSubNav2.innerHTML ='';
            let arrKey = product[numm].keyword.split(',');
            arrKey.forEach(function(v){
                elSSubNav2.innerHTML +=`<a>${v}</a>`;
            })

            topMenu();
        }
    })


    function topMenu(){
         //topnav클릭시 검정
         const elTopNav = document.querySelectorAll('.top_nav >a');
         elTopNav.forEach(function(v,k){
             elTopNav[0].classList.add('active');
             elTopNav2[0].classList.add('active');
             v.onclick = function(){
                 elTopNav[num2].classList.remove('active');
                 this.classList.add('active');

                 console.log('sdfsdfsdfsd')

                 num2 = k;
                 elTopNav2.forEach(function(v,k){
                     if(k==0){elTopNav2[0].classList.add('active');}
                     else{v.classList.remove('active');}
                     num3 = 0;
                 });
                 
             }
         });
    }

        
    //-------------------------------------------고정bottomnav 검정
    
   
    elTopNav2.forEach(function(v,k){
        v.onclick = function(){
            elTopNav2[num3].classList.remove('active');
            this.classList.add('active');
            num3 = k;
        }
    });




//-------------------------------------------


const elResult = document.querySelectorAll('.search_money input'),
elInput = document.querySelectorAll('.search_radio input');

elInput.forEach(function(v,k){
    v.onclick = function(){

        elResult[0].value = v.value.split(",")[0];
        elResult[1].value = v.value.split(",")[1];

    }
});

//-------------------------------------------


$.ajax({
    url:"./data.json",
    success:function(data){
        let a = '';
        $.each(data.items,function(key,value){
            a += `<div class="miss">
                    <div class="d-2-1">
                        <a href="#">
                            <img src="${value.detail}" alt="도시락">
                            <div>
                                <p>${value.name}</p>
                                <strong>${value.price}</strong><span>원</span>
                            </div>
                            <div class="tag">
                                <img src="${value.tag}" alt="">
                            </div>
                        </a>
                    </div>
                </div>`;
        })
        $('.d').html(a);

    },
    error:function(){}
});

//-------------------------------------------고정topnav 검정




//-------------------------------------------

function test() {
    var obj = document.getElementsByName('i');
    var obj2 = document.getElementsByName('ii');
    for (var a = 0; a < obj.length; a++) {
        obj[a].checked = false;
    }
    for (var b = 0; b < obj2.length; b++) {
        obj2[b].value = null;
    }
}


//-------------------------------------------

