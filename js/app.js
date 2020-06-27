$(function(){
    $('.slider').slick({
        nextArrow:'<button class="slick-arrow slice-next"><img src="image/next.svg" alt="next"></button>',
        prevArrow:'<button class="slick-arrow slice-prev"><img src="image/prev.svg" alt="prev"></button>',
        fade:true,
        responsive: [           //это для адоптива
            {
              breakpoint: 441,
              settings: {
                arrows:false
              }
            }
        ]    
    });
});


//на чистом JS  скрол  к Якорям
let anchors = document.querySelectorAll('header a[href*="#"]')

for(anchors of anchors){
    if(anchors){
        anchors.addEventListener('click', function(e){
            e.preventDefault()
            anchorId = this.getAttribute('href')
            document.querySelector(anchorId).scrollIntoView({
                behavior:'smooth',block:'start'
            })
        })
    }
}












