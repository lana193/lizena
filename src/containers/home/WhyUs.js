import React from 'react'; 
import styled from 'styled-components';

import { MoneyIcon, QoulityIcon, TimeIcon, TargetIcon } from '../../icons/Icons';
import { H2, H5, P } from '../../theme/StyledElements';

const WhyUsContainer = styled.div`
    padding: 3em 1em 3em 1em;

    .benefits-container {
        display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1em;

    .benefit-wrapper {
        text-align: center;
        margin: 1rem 2rem 3rem 2rem;

        .benefit-desc {
            width: 300px;
            padding: 1rem;
            font-family: 'Didact Gothic', sans-serif;
            font-size: 18px;
            color: rgba(71, 71, 71, 0.7);
        }
    }

    }

`;

const WhyUs = () => {
    return (
        <WhyUsContainer>
            <H2>Чому варто обрати нас?</H2>
            <div className='benefits-container'>
            <div className='benefit-wrapper'>
                <TimeIcon />
                <H5>Доступність</H5>
                <div className='benefit-desc'>Ми дбаємо про ваш час та гроші. Обираючи нас, Ви зможете вчасно отримати виконану роботу за доступними цінами</div>
            </div>
            <div className='benefit-wrapper'>
                <QoulityIcon/>
                <H5>Якість</H5>
                <div className='benefit-desc'>Наша команда з відповідальністю ставиться до кожного проєкту, виконує роботу якісно та забезпечує наших клієнтів надійним житлом на довгі роки</div>
            </div>
            <div className='benefit-wrapper'>
                <TargetIcon />
                <H5>Індивідуальний підхід</H5>
                <div className='benefit-desc'>Компанія Лізена сприється на індивудульні потреби кожного клієнта</div>
            </div>

            </div>

        </WhyUsContainer>
    );
}

export default WhyUs;