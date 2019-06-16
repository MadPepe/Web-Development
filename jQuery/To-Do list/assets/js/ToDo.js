$("ul").on('click', 'li', function(){
    $(this).toggleClass("completed")
})

$('ul').on('click', 'span', function(event){
    $(this).parent().fadeOut(function(){
        $(this).remove()
    })
    event.stopPropagation()
})

$("input[type=text]").on('keypress', function(event){
    if(event.which === 13){
        var toDoText = $(this).val()
        $("ul").append('<li><span><i class="far fa-trash-alt"></i></span> '+toDoText+"</li>")
        $(this).val("")
    }
})

$('.fa-plus').on('click', function(){
    $('input[type=text]').fadeToggle()
})