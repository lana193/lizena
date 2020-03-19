import React from 'react';
import background from './background.jpg';
import './Home.css';

const sectionStyle = {
    width: "100%",
    height: '500px',
    backgroundImage: `url(${background})`,
    padding: '5%'
  };

const Home = () => {
    return (
        <div>
            <div style={sectionStyle}>
            {/* <img className='' src={background} alt='Background' /> */}
            <h1 className='f2 f1-l lh-title mt0 mb4 mb5-ns white'>Будівельно-ремонтна компанія ЛІЗЕНА</h1>
            <a className="background f6 link dim ba ph3 pv2 mb2 dib dark-green bg-white" href="#0">Замовити безкоштовну консультацію</a>
        </div>
        <h2 className='tc'>Про нас</h2>
        <p> ТУТ БУДЕ ІНФОРМАЦІЯ ПРО ВАШУ КОМПАНІЮ. Наприклад: Ми успішно працюємо на ремонтно-будівельному ринку України починаючи з 2018 року. За нашими плечима проєкти для ...</p>
        <p> Або Ми молода компанія, яка займається широким спектром будівельних робіт ... </p>
        <h2 className='tc'>Чому варто обрати нас?</h2>
        <p> тут будуть перелічені перелічені переваги вашої компанія, а також різні плюшки, щоб залучити клієнта. Все це буде гарно оформлено, з картинками, виділеннями і т.д. </p>
        </div>
    )
}

export default Home;