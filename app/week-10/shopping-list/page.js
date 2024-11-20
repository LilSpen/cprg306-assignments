"use client";

import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function ItemListPage() {
  const { user, firebaseSignOut } = useUserAuth();
  const [items, setItems] = useState([]); 
  const [selectedItemName, setSelectedItemName] = useState("");

  async function loadItems() {
    try {
      if (user) {
        const userItems = await getItems(user.uid);
        setItems(userItems);
      }
    } catch (error) {
      console.error("Error loading items:", error);
    }
  }

 
  useEffect(() => {
    loadItems();
  }, [user]);

  
  async function handleAddItem(newItem) {
    try {
      const newItemId = await addItem(user.uid, newItem); 
      setItems((prevItems) => [...prevItems, { id: newItemId, ...newItem }]); 
    } catch (error) {
      console.error("Error adding item:", error);
    }
  }


  const handleItemSelect = (item) => {
    const cleanItemName = item.name
      .split(",")[0]
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, "")
      .trim();
    setSelectedItemName(cleanItemName);
  };

 
  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }


  if (!user) {
    return (
      <main>
        <header>
          <h1>Shopping List</h1>
        </header>
        <p>You must be logged in to view this page.</p>
        <Link href="/week-10/" className="text-blue-500">
          Click here to return to the sign-in page.
        </Link>
      </main>
    );
  }

  return (
    <main
      style={{
        backgroundColor: "#172544",
        paddingTop: 25,
        paddingLeft: 15,
        minHeight: "100vh", 
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <NewItem onAddItem={handleAddItem} />
          <h3
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "white",
              paddingLeft: 10,
            }}
          >
            Shopping List
          </h3>
          <div style={styles.div1}>
            <ItemList items={items} onItemSelect={handleItemSelect} />
            <MealIdeas ingredient={selectedItemName} />
          </div>
          <button
            type="button"
            onClick={handleSignOut}
            className="text-lg bg-red-600 text-white rounded px-2 py-1 mt-4"
          >
            Sign Out
          </button>
        </div>
      </div>
    </main>
  );
}

const styles = {
  div1: {
    display: "flex",
    flexDirection: "row",
  },
};
