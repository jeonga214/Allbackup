
// 내용 추가 => prepend(앞),append(뒤)
$('body').prepend('<header></header>');
$('header').load('./inc.html nav', menu);

function menu(){
    localStorage.num && $('header nav a').eq(localStorage.num).css('color','yellow');

    $('header nav a').on('click',function(e){
        e.preventDefault();
        localStorage.setItem('num',$(this).index());
        location.href = $(this).attr('href');
    })
}