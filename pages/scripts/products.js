
const sectionLinks = $('.section-links');
const sections = $('.product-container');
var removeActiveSection;
var removeActiveButton
var addActive;

sections.each((i,e)=>{
    if(e.className.slice(-6,)==='active'){
        removeActiveSection = e.classList[1]
    }
})


function changeActive(category){
    
    $('.'+removeActiveSection).removeClass('active')
    $('#'+removeActiveSection).removeClass('active')
    $('main .hero h1').text($('#'+category).text())

    removeActiveSection=category

    $('#'+category).addClass('active')
    $('.'+category).addClass('active')
}

$('.panel-toggle').click(()=>{
    $('aside').toggleClass('active')
})
