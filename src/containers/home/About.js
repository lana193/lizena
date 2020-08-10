import React from 'react';
import styled from 'styled-components';

import { H2, P2 } from '../../theme/StyledElements';

const AboutContainer = styled.div`
    padding: 1em 10em 1em 10em;

    @media only screen and (max-width: 767.98px) {
        padding: 1em 2em 1em 2em;
    }
`;

const About = () => {
    return (
    <AboutContainer>
        <H2>Про компанію</H2>
        <P2>Лізена - будівельно-ремонтна компанія, яка займається широким спектром ремонтних послуг, а також  будівництвом готових об’єктів під ключ, що допомагає нашим клієнтам заощадити час та кошти, затрачені на будівництво.</P2>
        <P2>У нас Ви можете замовити як дрібні будівельні робити, так і ремонт з нуля, включно з сантехнічними роботами, проведенням електрики та дизайном приміщення.</P2>
        <P2>В компанії Лізена працюють фахівці з проектування, будівництва, дизайну, які завжди готові проконсультувати, та надати кваліфіковану допомогу.</P2>
        <P2>Ми нещодавно на ринку, однак маємо вже чималий досвід. За плечима компанії, досвід будівництва, більш, ніж 30 котеджів, квартир, також є досвід будівництва державних об’єктів.</P2>
        <P2>В своїй роботі ми орієнтуємося на якість наданих послуг, та дотримання будівельних норм.</P2>
    </AboutContainer>
    );
}

export default About;