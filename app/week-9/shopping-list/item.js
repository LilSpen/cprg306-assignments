import React from 'react';

export default function ItemComponent({itemObj, isHovered}) {
    
    let {name, quantity, category, onSelect} = itemObj

    return(
        <div style = {{
        backgroundColor: isHovered ? "deepskyblue" : "#3b0764", 
        width: 300,
        paddingLeft: 10,
        marginBottom: 12
        
        }}>
        {onSelect}
        <h3 style={{
        fontSize: "20px",
        fontWeight: "bold", 
        color: "white"}}
        >{name}</h3>
        <p style={{color: "white", fontSize: 12}}>Buy {quantity} in {category}</p>
        </div>
    );
}