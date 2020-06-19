window.addEventListener('load', function(){
    new Glider(document.querySelector('.images'),{
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.glider-dots',
        arrows:{
            prev: '.glider-prev',
            next: '.glider-next'
        },
        responsive: [
            {
              // screens greater than >= 768px
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            }
          ]
    });
});