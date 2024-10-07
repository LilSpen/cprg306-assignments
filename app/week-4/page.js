"use client";
import { useState } from "react";

export default function Incrementing() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
        setQuantity(quantity + 1);
      }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <text style={styles.quantity}>{quantity}</text>
        <button style={quantity === 20 ? styles.disabledButton : styles.button} onClick={increment}>
          +
        </button>
        <button style={quantity === 1 ? styles.disabledButton : styles.button} onClick={decrement}>
          -
        </button>
      </div>
    </div>
  );
}


const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
    height: "100vh",
    backgroundColor: "black",
  },
  box: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    padding: "10px",
    alignItems: "center",
  },
  button: {
    marginLeft: "5px",
    padding: "10px",
    backgroundColor: "blue", 
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
  disabledButton: {
    marginLeft: "5px",
    padding: "10px",
    backgroundColor: "gray", 
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
  },
  quantity: {
    marginRight: "30px"
  }
  
};

