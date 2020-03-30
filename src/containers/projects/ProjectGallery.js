import React from 'react';
import Swiper from 'react-id-swiper';

import 'swiper/css/swiper.css';
import './ProjectGallery.css';

const imgArray = [
    'https://i0.wp.com/rbt-master.ru/wp-content/uploads/2018/12/remont-i-dizajn-kvartiry-1.jpg?resize=750%2C387&ssl=1', 
    'https://freedesignfile.com/upload/2017/03/Repair-of-Apartments-Stock-Photo-05.jpg',
    'https://i.pinimg.com/originals/1b/c3/7e/1bc37ed586e1cbb5e87505ea2b94f05f.jpg',
    'https://hightechreno.com/wp-content/uploads/2014/10/content_041.jpg',
    'https://chicago.kiev.ua/img/remont/foto_2a_2b/2.jpg?v=1.0',
    'https://chicago.kiev.ua/img/remont/foto_2a_2b/3.jpg?v=1.0'
]

const ProjectGallery = ( ) => {
    const params = {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        spaceBetween: 20,
        slideShadows: true,
        loop: true,
        slidesPerView: 'auto',
        // slidesPerGroup: 3
      }
    return(
        <Swiper {...params}>
            {imgArray.map((item, i) => {
                return (<div key={i} style={{backgroundImage: `url(${item})`}} className="swiper-slide">
                  {/* <img className='slide-img' src={item} alt='Gallery item'/> */}
                </div>)
            }
            )}
           
        </Swiper>
        // <div class="flex items-center justify-center pa4">
        //     <a href="#0" class="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4">
        //         <svg class="w1" data-icon="chevronLeft" viewBox="0 0 32 32" style={{ fill: 'currentcolor' }}>
        //             <title>chevronLeft icon</title>
        //             <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
        //         </svg>
        //         <span class="pl1">Попередня</span>
        //     </a>
        //     <a href="#0" class="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box">
        //         <span class="pr1">Наступна</span>
        //         <svg class="w1" data-icon="chevronRight" viewBox="0 0 32 32" style={{ fill: 'currentcolor' }}>
        //             <title>chevronRight icon</title>
        //             <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
        //         </svg>
        //     </a>
        // </div>
    );
}

export default ProjectGallery;