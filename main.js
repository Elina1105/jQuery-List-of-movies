 //Кліп по кнопці "Показати"
 $(function() {
    var $h2 = $('h2');
    $('ul').hide();
    $h2.append('<a> Показати</a>');
    $h2.on('click', function() {
    $h2.next()
    .fadeIn(500)
    .children('.film')
    $h2.find('a').fadeOut();
    });
    });

//Випливаючий список 
$(function() {
    $('h2').hide().slideDown();
    var $li = $('li');
    $li.hide().each(function(index) {
    $(this).delay(500 * index).fadeIn(500);
    });
    });



//Видалення назви фільму при кліці
$(function() {
    $('li').on('click', function() {
    $(this).animate({
    opacity: 0.0,
    paddingLeft: '+=80'
    }, 500, function() {
    $(this).remove();
    });
  });
});

//Додаємо Новий фільм, вводимо в input назву фільму.
$(function() {
    var $newItemButton = $('#newItemButton');
    var $newItemForm = $('#newItemForm');
    var $textInput = $('input:text');
    $newItemButton.show();
    $newItemForm.hide();
    $('#showForm').on('click', function(){
    $newItemButton.hide();
    $newItemForm.show();
    });
    $newItemForm.on('submit', function(e){
    e.preventDefault();
    var newText = $('input:text').val();
    $('li:last').after('<li>' + newText + '</li>');
    $newItemForm.hide();
    $newItemButton.show();
    $textInput.val('');
    $('li:last').addClass('film');
    $('li:last').on('click', function() {
        $(this).animate({
        opacity: 0.0,
        paddingLeft: '+=80'
        }, 500, function() {
        $(this).remove();
      });
    });
		$('li:last').on('mousemove', function() { 
			$(this).addClass('fastival').removeClass('color');
	});  
});
//Зміна кольору при наведенні мишкою на назву фільму
$('li.film').on('mousemove', function() { 
    $(this).addClass('fastival').removeClass('color');
    });
});
    //Зміна кольорів при кліку на кнопку "Змінити колір списку"
$(function(){
    var $newButtonColor=$('#newButtonColor');
    $newButtonColor.on('click', function() {
        $('li.film').addClass('color').removeClass('festival');
        });
    });



