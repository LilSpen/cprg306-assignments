export default function Item({itemObj}) {
    
    let {name, quantity, category} = itemObj



    return(
        <li>Name : {name}</li>,
        <li>Quantity: {quantity}</li>,
        <li>Category: {category}</li>
        
    );
}