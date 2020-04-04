import React from 'react';
import ServicesTable from './ServicesTable';

const Services = () => {
    return (
        <div className='tc pt6'>
                    <div>
            Ми надаємо широкий спектр будівельних послуг...
        </div>
        <div>
            Якщо вас цікавить ремонт цього приміщення, ви можете обрати один з запропонованих пакетів:
        </div>
        <ServicesTable />

        </div>
    );
}

export default Services;