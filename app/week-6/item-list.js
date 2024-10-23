"use client";
import { useState } from "react";
import ItemComponent from "./item";
import itemsData from "./items.json";
import React from 'react';

export default function ItemList() {
  const [items, setItems] = useState(itemsData);
  const [selectedButton, setSelectedButton] = useState(null); 

  const sortByName = () => {
    const sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
    setItems(sortedItems);
    setSelectedButton("name");
  };

  const sortByCategory = () => {
    const sortedItems = [...items].sort((a, b) => a.category.localeCompare(b.category));
    setItems(sortedItems);
    setSelectedButton("category");
  };

  return (
    <main>
      
      <div style={styles.div1}>
      <h2 style={styles.heading}>Sort by:</h2>
        <button
          style={{
            ...styles.button,
            backgroundColor: selectedButton === "name" ? "orange" : "#FF8C00",
          }}
          onClick={sortByName}
        >
          Name
        </button>
        <button
          style={{
            ...styles.button,
            backgroundColor: selectedButton === "category" ? "orange" : "#FF8C00",
          }}
          onClick={sortByCategory}
        >
          Category
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <ItemComponent itemObj={item} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

const styles = {
  div1: {
    display: "flex", 
    marginBottom: 35,
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  button: {
    padding: "10px 20px",
    color: "white",
    cursor: "pointer",
    marginLeft: 50,
    
  },
  heading: {
    fontSize: "20px",
    color: "white",
  },
};
