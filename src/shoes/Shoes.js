import React from 'react';
import { multiplay } from '../utilites/Calculate';

const Shoes = () => {
    const first = 2
    const second = 3
    const Total = multiplay(first, second)
    return (
        <div>
            <h3>Thisis shoes compo </h3>
            <p>Result:{Total}</p>

        </div>
    );
};

export default Shoes;