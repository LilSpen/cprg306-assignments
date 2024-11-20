"use client";
import { useState, useEffect } from "react";
import ItemComponent from "./item";
import React from 'react';

export default function ItemList({ items, onItemSelect }) {
  const [selectedButton, setSelectedButton] = useState(null);
  const [displayedItems, setDisplayedItems] = useState(items);
  const [hoveredItemId, setHoveredItemId] = useState(null); // Track hovered item

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
            <li
              key={item.id}
              onClick={() => onItemSelect(item)}
              onMouseEnter={() => setHoveredItemId(item.id)} 
              onMouseLeave={() => setHoveredItemId(null)}
              style={{
                cursor: 'pointer',
              }}
            >
              <ItemComponent 
                itemObj={item} 
                isHovered={hoveredItemId === item.id} // Pass hover state to ItemComponent
              />
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
