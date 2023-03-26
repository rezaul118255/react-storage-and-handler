// Local storage to store data just one item

// const addtoLs = (_id) => {
//     const quantity = localStorage.getItem(_id)
//     if (quantity) {
//         console.log("already exit")
//         const newQuantity = parseInt(quantity) + 1;
//         localStorage.setItem(_id, newQuantity)

//     }
//     else {
//         console.log("new item")
//         localStorage.setItem(_id, 1)
//     }



// }
// export { addtoLs }




// Store multiple data in an Object with local storage 
const addtoLs = (_id) => {
    let shoppingCart = {};
    //  get the shopping cart from local storage 
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {

        shoppingCart = JSON.parse(storedCart);
    }



    // add quantity

    const quantity = shoppingCart[_id]
    console.log(quantity)
    if (quantity) {

        const newQuantity = quantity + 1;
        shoppingCart[_id] = newQuantity;
    }
    else {
        shoppingCart[_id] = 1;

    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));




}
// remove multiple  data in an object From  localStorage
const removeFromDb = _id => {
    // console.log('remove ', _id)
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart)
        if (_id in shoppingCart) {
            delete shoppingCart[_id]
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

        }
    }

}
// delete al data from local storage
const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart')
}
export { addtoLs, removeFromDb, deleteShoppingCart }