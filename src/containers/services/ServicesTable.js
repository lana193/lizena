import React from 'react';

const ServicesTable = () => {
    return (
        <div class="pa4">
            <div class="overflow-auto">
                <table class="f6 w-100 mw8 center" cellspacing="0">
                    <thead>
                        <tr class="stripe-dark">
                            <th class="fw6 tl pa3 bg-white">Послуга</th>
                            <th class="fw6 tl pa3 bg-white">Одиниця вимірювання</th>
                            <th class="fw6 tl pa3 bg-white">Ціна</th>
                        </tr>
                    </thead>
                    <tbody class="lh-copy">
                        <tr class="stripe-dark">
                            <td class="pa3">Фарбування</td>
                            <td class="pa3">м2</td>
                            <td class="pa3">0 грн.</td>
                        </tr>
                        <tr class="stripe-dark">
                            <td class="pa3">Покладка плитки</td>
                            <td class="pa3">м2</td>
                            <td class="pa3">0 грн.</td>
                        </tr>
                        <tr class="stripe-dark">
                            <td class="pa3">Демонтаж</td>
                            <td class="pa3">м2</td>
                            <td class="pa3">0 грн.</td>
                        </tr>
                        <tr class="stripe-dark">
                            <td class="pa3">Робота з деревом</td>
                            <td class="pa3">м.п.</td>
                            <td class="pa3">0 грн.</td>
                        </tr>
                        <tr class="stripe-dark">
                            <td class="pa3">Штукатурка</td>
                            <td class="pa3">м2</td>
                            <td class="pa3">0 грн.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ServicesTable;