import ItemList from "./item-list";
import Item from "./item";
import ItemComponent from "./item";
import React from 'react';

export default function ItemListPage() {
    return(
        <main
        style={{
            backgroundColor: "#172544", 
            //minHeight: "100vh", 
            paddingTop: "100px",
            }}
            >
            <div>
            <h3 style={{fontSize: 30, fontWeight: "bold", color: "white", paddingLeft: 10}} >Shopping List</h3>
            <ItemList />
            </div>
        </main>
    );
}
