import React from 'react';

export default function ItemComponent({itemObj}) {
    
    let {name, quantity, category} = itemObj

    return(
        <div style = {{
        backgroundColor: "#3b0764",
        margin: 10,
        width: 300,
        paddingLeft: 10
        }}>
        <h3 style={{
        fontSize: "20px",
        fontWeight: "bold", 
        color: "white"}}
        >{name}</h3>
        <p style={{color: "white"}}>Buy {quantity} in {category}</p>
        </div>
    );
}

// return(
//     // <div>
//     //     <h3>{studentObj.studentName}</h3>
//     //     <p>Age: {studentObj.studentAge}</p>      
//     //     <p>{studentObj.address.city} {studentObj.address.province}</p>      
//     // </div>
//     <div>
//         <h3>{studentName}</h3>
//         <p>Age: {studentAge}</p>
//         <p>{city}</p>
//     </div>
// );