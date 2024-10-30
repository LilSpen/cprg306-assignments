"use client";

import React, { useState } from 'react';
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemData from './items.json';

export default function ItemListPage() {

    const [items, setItems] = useState(itemData);
    
    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]); 
    };

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
                    <NewItem onAddItem={handleAddItem}/>
                </div>
            <div>
            <h3 style={{fontSize: 30, fontWeight: "bold", color: "white", paddingLeft: 10}} >Shopping List</h3>
            <ItemList items={items}/>
            </div>
        </main>
    );
}
