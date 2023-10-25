$(document).ready(function(){

    //навигация (открытие и закрытие панели по клику на меню)

    let links_show = true;
    $('.menu img').click(function(){
        if(links_show){
            $('.head_one .links').show(600);
        }
        else{
            $('.head_one .links').hide(600);
        }
        links_show = !links_show
    });



    // МО покупка тура

    $('.se1 .start').click(function(){
        $('.overlay').show(600);
    })

    $('.overlay .close-popup').click(function(){
        $('.overlay').hide(600);
    })

    // МО форма на покупку тура

    $('.overlay button').click(function(){
        $('.shop').show(600);
    })

    $('.shop .close-popup_shop').click(function(){
        $('.shop').hide(600);
    })


    $('.popup_shop button').click(function(e){
        e.preventDefault();
        if($('.nameShop').val() != ''){
            $('.nameShop').attr('disabled', 'disabled');
        }
        else{
            $('.nameShop').css({
                'background': 'red',
            })
        }
        if($('.firnameShop').val() != ''){
            $('.firnameShop').attr('disabled', 'disabled');
        }
        else{
            $('.firnameShop').css({
                'background': 'red',
            })
        }
        if($('.surnameShop').val() != ''){
            $('.surnameShop').attr('disabled', 'disabled');
        }
        else{
            $('.surnameShop').css({
                'background': 'red',
            })
        }        
        if($('.check-in').val() != ''){
            $('.check-in').attr('disabled', 'disabled');
        }
        else{
            $('.check-in').css({
                'background': 'red',
            })
        }       
        if($('.departure').val() != ''){
            $('.departure').attr('disabled', 'disabled');
        }
        else{
            $('.departure').css({
                'background': 'red',
            })
        }
               
        if($('.comment textarea').val() != ''){
            $('.comment textarea').attr('disabled', 'disabled');
        }
        else{
            $('.comment textarea').css({
                'background': 'red',
            })
        }
    })


    //проверка заполнения формы


    let flag = false;

    $('.send').click(function(e){
        e.preventDefault();
        // первый вариант
        // if($('.name_1').val() !='' && $('.email_1').val() !='' && $('.phone_1').val() !='' && $('textarea').val() !=''){
        //     alert('поля формы успешно заполнены');
        //     $('.name_1').attr('disabled', 'disabled');
        //     $('.email_1').attr('disabled', 'disabled');
        //     $('.phone_1').attr('disabled', 'disabled');
        //     $('textarea').attr('disabled', 'disabled');
        // }
        // else{
        //     alert('не все формы заполнены')
        // }



        // второй вариант

        if($('.name_1').val() =='' || $('.email_1').val() =='' || $('.phone_1').val() =='' || $('textarea').val() ==''){
            alert('не все формы заполнены');
        }
        else{
            alert('поля формы успешно заполнены');
            $('.name_1').attr('disabled', 'disabled');
            $('.email_1').attr('disabled', 'disabled');
            $('.phone_1').attr('disabled', 'disabled');
            $('textarea').attr('disabled', 'disabled');
        }


        

        // $(':radio:checked').each(function(){
        //     if( $(this).is(':checked')){
        //         $('.block2 input').each(function(){
        //             $(this).attr('disabled', 'disabled')
        //         }) 
        //     }
        //     // else{
        //     //     alert('Выберите способ связи')
        //     // }
        // });






        $('.block2 input').each(function(){
            if($(this).is(':checked')){
                $('.block2 input').each(function(){
                    $(this).attr('disabled', 'disabled');
                    flag = true;
            })
            }
            if(!flag){
                alert('no')
            }
        })


        $('select').each(function(){
            if($(this).val() != ''){
                $('select').attr('disabled', 'disabled');
            }
            else{      
                alert('Выберите Topic') 
            }
        })

        
        if ($('.block5 :checkbox').is(':checked')){
            $(':checkbox').attr('disabled', 'disabled');
        }
        else{
            alert('Вы человек???')
        }
    })


    






    $('.point a').click(function(e){
        e.preventDefault();
        if($('.gal_big img').attr('src') != $(this).attr('href')){
            $('.gal_big img').hide().attr('src', $(this).attr('href')).fadeIn(1000).css({
                width: '100%',
                height: '100%',
            })
        }
    });


    $('.point_one a img').mouseup(function (){
        $(this).fadeTo(2000, 0.6);
    });
    $(document).mouseup(function (){
        $('.point_one a img').fadeTo(0, 1);
    })



    $('.point_one a').click(function(e){
        e.preventDefault();
        if($('.gal_big_one img').attr('src') != $(this).attr('href')){
            $('.gal_big_one img').hide().attr('src', $(this).attr('href')).fadeIn(1000).css({
                width: '100%',
                height: '100%',
            })
        }
    });


    $('.point_one a img').mouseup(function (){
        $(this).fadeTo(2000, 0.6);
    });
    $(document).mouseup(function (){
        $('.point_one a img').fadeTo(0, 1);
    })




    $('.point_two a').click(function(e){
        e.preventDefault();
        if($('.gal_big_two img').attr('src') != $(this).attr('href')){
            $('.gal_big_two img').hide().attr('src', $(this).attr('href')).fadeIn(1000).css({
                width: '100%',
                height: '100%',
            })
        }
    });


    $('.point_two a img').mouseup(function (){
        $(this).fadeTo(2000, 0.6);
    });
    $(document).mouseup(function (){
        $('.point_two a img').fadeTo(0, 1);
    })









})