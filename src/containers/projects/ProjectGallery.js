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
    );
}

export default ProjectGallery;