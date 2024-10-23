import ItemList from "./item-list";
import React from 'react';

export default function ItemListPage() {
    return(
        <main
        style={{
            backgroundColor: "#172544", 
            //minHeight: "100vh", 
            paddingTop: 25,
            paddingLeft: 15
            }}
            >
            <div>
            <h3 style={{fontSize: 30, fontWeight: "bold", color: "white", paddingLeft: 10}} >Shopping List</h3>
            <ItemList />
            </div>
        </main>
    );
}
