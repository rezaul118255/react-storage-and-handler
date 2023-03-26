import React from 'react';
import Cosmetic from './Cosmetic/Cosmetic';

// import { add } from '../utilites/Calculate';
// import add from '../utilites/Calculate';


const Cosmetics = () => {
    const cosmetic = [
        {
            "_id": "641deae2f4ce04169fb170b7",
            "balance": "$1,587.74",
            "picture": "http://placehold.it/32x32",
            "name": "Tammy Hernandez"
        },
        {
            "_id": "641deae2a0d4ecac68171753",
            "balance": "$2,097.86",
            "picture": "http://placehold.it/32x32",
            "name": "Lois Ratliff"
        },
        {
            "_id": "641deae2e34152c66a62c92b",
            "balance": "$2,163.08",
            "picture": "http://placehold.it/32x32",
            "name": "Maggie Swanson"
        },
        {
            "_id": "641deae2229f0621c320782a",
            "balance": "$2,598.72",
            "picture": "http://placehold.it/32x32",
            "name": "Avis Madden"
        },
        {
            "_id": "641deae2e4916180de75ad53",
            "balance": "$2,563.94",
            "picture": "http://placehold.it/32x32",
            "name": "Moss Mcgowan"
        },
        {
            "_id": "641deae24441015178ed651b",
            "balance": "$1,478.98",
            "picture": "http://placehold.it/32x32",
            "name": "Paul Finch"
        },
        {
            "_id": "641deae2abde8aca108a2075",
            "balance": "$1,974.93",
            "picture": "http://placehold.it/32x32",
            "name": "Gena Mccray"
        },
        {
            "_id": "641deae28319549b3719ea77",
            "balance": "$1,535.41",
            "picture": "http://placehold.it/32x32",
            "name": "Huff Ballard"
        }
    ]


    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            {
                cosmetic.map(cosmetic => <Cosmetic cosmetic={cosmetic}></Cosmetic>)
            }


        </div>
    );
};

export default Cosmetics;