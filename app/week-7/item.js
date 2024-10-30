import React from 'react';

export default function ItemComponent({itemObj}) {
    
    let {name, quantity, category} = itemObj

    return(
        <div style = {{
        backgroundColor: "#3b0764",
        margin: 10,
        width: 300,
        paddingLeft: 10,
        marginBottom: 12
        
        }}>
        <h3 style={{
        fontSize: "20px",
        fontWeight: "bold", 
        color: "white"}}
        >{name}</h3>
        <p style={{color: "white", fontSize: 12}}>Buy {quantity} in {category}</p>
        </div>
    );
}