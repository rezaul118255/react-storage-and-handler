import React from 'react';
import { addtoLs, deleteShoppingCart, removeFromDb } from '../../utilites/localStorage/LocalStorage';
import './Cosmetic.css';


const Cosmetic = (Props) => {
    const { name, _id, balance } = Props.cosmetic
    const addtocard = () => {

        addtoLs(_id)


    }
    const removeFromCart = _id => {
        removeFromDb(_id)
    }



    return (
        <div className='style'>
            <h2>Buy this :{name}</h2>
            <p>id:${_id}</p>
            <p>price:{balance}</p>
            <button onClick={() => addtocard(_id)}>Add to card</button>
            <button onClick={() => removeFromCart(_id)}>Remove</button>
            <button onClick={() => deleteShoppingCart(_id)}>all delete</button>


        </div>
    );
};

export default Cosmetic;