

function dataChange(pageUrl){
    $('main').removeClass('active');

    setTimeout(()=>{
        $('main').load(pageUrl,function(){
                $('main').addClass('active');
            });
        },1000)
    }

dataChange('./main.html')

$('header a').on('click',function(e){
    e.preventDefault();
    let url = $(this).attr('href');
    history.pushState({num:$(this).index()},'',url);

    dataChange(url);
})

$(window).on('popstate',function(){
    let num = history.state?.num || 0;
    let url = $('header a').eq(num).attr('href');
    dataChange(url)
})