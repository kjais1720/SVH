const forms = $('form');
var removeActiveForm;
var removeActiveButton
var addActive;

forms.each((i,e)=>{
    if(e.className.slice(-6,)==='active'){
        removeActiveSection = e.className.slice(-6,);
    }
})


function changeActive(category){
    
    $('.'+removeActiveSection).removeClass('active')
    $('#'+removeActiveSection).removeClass('active')
    $('.hero h1').text($('.'+category).text())

    removeActiveSection=category

    $('#'+category).addClass('active')
    $('.'+category).addClass('active')
}

$('.panel-toggle').click(()=>{
    $('aside').toggleClass('active')
})


ScrollOut({
    threshold:0.4
});