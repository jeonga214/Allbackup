
 $.ajax({
    url:"./data.xml",
    beforeSend:function(){console.log('로딩중....')},
    complete:function(){console.log('로딩끝내기')},
    success:function(data){

        console.log('데이터받았습니다.');

        let detail,thumb,name,tag;
        $(data).find('item').each(function(key,ele){
            detail = $(ele).find('detail').text();
            thumb = $(ele).find('thumb').text();
            name = $(ele).find('name').text();

            tag = `<div class="thumb">
                        <a href="${detail}" class="image">
                        <img src="${thumb}" alt="" />
                        </a>
                        <h2>${name}</h2>
                    </div>`;

        $('#main').append(tag);

        $('.thumb').on('click',function(e){
            e.preventDefault();
            $('.poptrox-overlay').show();

            let detail  = $(this).find('>a').attr('href');
            let name = $(this).find('h2').text();

            $('.pic img').attr('src',detail);
            $('.caption').text(name);

        });


        $('.closer').on('click',function(e){
            e.preventDefault();
            $('.poptrox-overlay').hide();
        })

        })  
        
    },
    error:function(){}
 });
