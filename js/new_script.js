$(".block__text").hide();


$(document).ready(function(){

    $('.header__burger').click(function (event) {
        $('.header__burger, .header__menu').toggleClass('active'); //^ При нажатии добавляется класс Active при повторном нажатии убирается
        $('body').toggleClass('lock');
    });



    $('.block__title').click(function (event) {
        const blockWrapper = event.target.closest('.block__body'); //* обращаемся к родителю
        blockText = blockWrapper.querySelector('.block__text'); //* обращаемся к дочернему элементу родителя с пустым дата атрибутом
        $(blockText).toggle(1000);
    });

});
