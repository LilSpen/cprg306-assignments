"use client";

import React, { useState } from 'react';
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemData from './items.json';

export default function ItemListPage() {
    const [items, setItems] = useState(itemData);
    const [selectedItemName, setSelectedItemName] = useState(""); 
    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]); 
    };

    const handleItemSelect = (item) => {
        const cleanItemName = item.name
            .split(',')[0]
            .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '') 
            .trim(); 
        setSelectedItemName(cleanItemName);
    };

    return(
        <main
            style={{
                backgroundColor: "#172544", 
                paddingTop: 25,
                paddingLeft: 15
            }}
        >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div >
                    <NewItem onAddItem={handleAddItem} />
                    <h3 style={{ fontSize: 30, fontWeight: "bold", color: "white", paddingLeft: 10 }}>Shopping List</h3>
                    <div style={styles.div1}>
                    <ItemList items={items} onItemSelect={handleItemSelect} /> 
                    <MealIdeas ingredient={selectedItemName} /> {}
                    </div>
                </div>
            </div>
        </main>
    );
    
}
const styles = {
    div1: {
        display: "flex",
        flexDirection: "row",
    } 
};
