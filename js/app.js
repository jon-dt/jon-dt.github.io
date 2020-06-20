window.addEventListener('load', function(){
    new Glider(document.querySelector('.box-gallery'),{
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '#glider-dots-gallery',
        arrows:{
            prev: '#glider-prev-gallery',
            next: '#glider-next-gallery'
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
    new Glider(document.querySelector('.box-testimonials'),{
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: '#glider-dots-testimonials',
      arrows:{
          prev: '#glider-prev-testimonials',
          next: '#glider-next-testimonials'
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
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          }
        ]
  });
});