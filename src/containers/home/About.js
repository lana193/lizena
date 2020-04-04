import React from 'react';
import styled from 'styled-components';

import { H2, P } from '../../theme/StyledElements';

const AboutContainer = styled.div`
    padding: 1em 4em 1em 4em;

    @media only screen and (max-width: 767.98px) {
{
    padding: 1em 2em 1em 2em;
        }

`;

const About = () => {
    return (
    <AboutContainer>
        <H2>Про компанію</H2>
        <P> ТУТ БУДЕ ІНФОРМАЦІЯ ПРО ВАШУ КОМПАНІЮ. Наприклад: Ми успішно працюємо на ремонтно-будівельному ринку України починаючи з 2018 року. За нашими плечима проєкти для ...</P>
        <P> Або Ми молода компанія, яка займається широким спектром будівельних робіт ... </P>
    </AboutContainer>
    );
}

export default About;