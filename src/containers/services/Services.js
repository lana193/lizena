import React from 'react';
import { H3, P2 } from '../../theme/StyledElements';

import styled from 'styled-components';

const accentColor = 'rgb(60,179,113)';
const textColor = '#2d3b48';
const planPadding = "1em";
const titleBackground = '#f3f3f3';
const titleSize = '1.45em';
const priceSize = '1.35em';
const featureSize = '1em';

const ServicesWrapper = styled.div`
    display: block;
    // min-height: 800px;
    padding: 5% 0 10% 0;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    margin: 0;

    .service-info {
        padding: 0 6em;
        text-align: left;

        @media only screen and (max-width: 767.98px) {
            padding: 0 1em;
        }

    }

    .repair-wrapper {
        background-color: #1abc9c;
        margin: 0 auto;
        padding: 3em;
        width: 70%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: center;
        column-gap: 10px;
        row-gap: 15px;
        justify-items: center;

        @media only screen and (max-width: 767.98px) {
            padding: 2em 0;
            grid-template-columns: 1fr;
            width: 100%;
        }

        .repair {
            background: white;
            width: 20em;
            height: 100%;
            box-sizing: border-box;
            text-align: center;
    
            .repair-header {
                background-color: ${titleBackground};
                padding: ${planPadding};
            

                h4 {
                    font-size: ${titleSize};
                    text-transform: uppercase;
                    color: ${accentColor};
                    font-weight: 700;
                }   
            }
    
            .repair-body {
                padding: ${planPadding};
                color: ${textColor};
                box-sizing: border-box;

                .price {
                    font-size: ${priceSize};
                    padding: ${planPadding} 0;
                    font-weight: 600;
                    margin-top: 0;
                    display: inline-block;
                    width: 80%;

                    p {
                        font-size: ${priceSize};
                        display: inline-block;
                        margin: 0;

                        span {
                            font-size: calc(${priceSize}*0.75);
                            display: inline-block;
                        }
                    }
                }

              .desc {
                    padding-bottom: ${planPadding};
                    border-bottom: 2px solid ${titleBackground};
                    margin: 0 auto;
                    width: 90%;
                    
                    em {
                        font-size: ${featureSize};
                        font-weight: 500;
                    }
                }
                
                .features {
                    font-size: ${featureSize};
                    list-style: none;
                    // list-style-position: inside;
                    padding-left: 0;

                    li { 
                        padding: calc(${planPadding} / 2);
                    }

                    li::before {
                        content: '•';
                        color: ${accentColor};
                        display: inline-block; 
                        width: 1.5em;
                        margin-left: -1em
                    }
                }
            }

        }
     
    }

`;

const Services = () => {
    return (
        <ServicesWrapper>
            <H3>Спетр послуг</H3>
            <div className='service-info'>
                <P2>Компанія Лізена надає широкий спектр будівельних послуг, серед них весь перелік внутрішніх ремонтних робіт, робота з фасадом, встановлення сантехніки та проведення електрики. У нас Ви можете замовити, як дрібні будівельні роботи, так і ремонт "з нуля".</P2>
                <P2>За необхідності ми допоможемо Вам з проектуванням, а наші дизайнери розроблять для Вас макет приміщення, з врахуванням Ваших побажань</P2>
                
            </div>
            <H3>Ремонтні послуги</H3>
                <P2>Якщо Вас цікавить ремонт приміщення, Ви можете обрати один з запропонованих пакетів:</P2>
            <div className='repair-wrapper'>
                <div className='repair'>
                    <div className='repair-header'>
                        <h4>Економ</h4>
                    </div>
                    <div className='repair-body'>
                        <div className='price'>
                            <p>2600 грн<span>/м<sup>2</sup></span></p>
                        </div>
                        <p className='desc'><em>Ремонт за доступними цінами</em></p>
                        <ul className='features'>
                            <li>Шпаклювання стелі і стін для візуального вирівнювання</li>
                            <li>Фарбування стелі та стін </li>
                            <li>Монтаж ламінату на підлогу </li>
                            <li>Наклеювання багетів та монтаж плінтусів</li>
                            <li>Покладка плитки в санвузлах, на кухні, в коридорі та на балконі</li>
                        </ul>
                    </div>
                </div>
                <div className='repair'>
                    <div className='repair-header'>
                        <h4>Стандарт</h4>
                    </div>
                    <div className='repair-body'>
                        <div className='price'>
                            <p>3000 грн<span>/м<sup>2</sup></span></p>
                        </div>
                        <p className='desc'><em>Ремонт за доступними цінами</em></p>
                        <ul className='features'>
                            <li>Шпаклювання стелі і стін для візуального вирівнювання</li>
                            <li>Фарбування стелі та стін </li>
                            <li>Монтаж паркетної дошки на підлогу </li>
                            <li>Наклеювання багетів та монтаж плінтусів</li>
                            <li>Покладка плитки в санвузлах, на кухні, в коридорі та на балконі</li>
                        </ul>
                    </div>
                </div>
                <div className='repair'>
                    <div className='repair-header'>
                        <h4>Преміум</h4>
                    </div>
                    <div className='repair-body'>
                        <div className='price'>
                            <p>3600 грн<span>/м<sup>2</sup></span></p>
                        </div>
                        <p className='desc'><em>Ремонт з дотриманням найвищих стандартів</em></p>
                        <ul className='features'>
                            <li>Перепланування</li>
                            <li>Вирівнювання стін та стелі</li>
                            <li>Фарбування стелі та стін</li>
                            <li>Покладка паркету на підлогу</li>
                            <li>Покладка плитки в санвузлах, на кухні, в коридорі та на балконі</li>
                            <li>Підігрів підлоги</li>
                        </ul>
                    </div>
                </div>
            </div>
            <H3>Будівництво під ключ</H3>
        </ServicesWrapper>
    );
}

export default Services;