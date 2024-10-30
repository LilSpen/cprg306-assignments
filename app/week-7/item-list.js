"use client";
import { useState, useEffect } from "react";
import ItemComponent from "./item";
import React from 'react';

export default function ItemList({items}) {

  const [selectedButton, setSelectedButton] = useState(null);
  const [displayedItems, setDisplayedItems] = useState(items);

 
  useEffect(() => {
    
    let itemsCopy = [...items];
    if (selectedButton === "name") {
      itemsCopy.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedButton === "category") {
      itemsCopy.sort((a, b) => a.category.localeCompare(b.category));
    }

    setDisplayedItems(itemsCopy);
  }, [items, selectedButton]); 

  const sortByName = () => {
    setSelectedButton("name");
  };

  const sortByCategory = () => {
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
          {displayedItems.map((item) => (
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
