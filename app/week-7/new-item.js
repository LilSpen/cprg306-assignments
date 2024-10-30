import React from 'react';
import { useState } from 'react';

 export default function NewItem({onAddItem}) {

const [name, setName] = useState("");
const [quantity, setQuantity] = useState(1);
const [category, setCategory] = useState("produce");

const handleNameChange = (event) => setName(event.target.value);
const handleQuantityChange = (event) => setQuantity(event.target.value);
const handleCategoryChange = (event) => setCategory(event.target.value);

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

const handleSubmit = (event) => {
    event.preventDefault();


    const item = {
        id: generateId(),
        name: name,
        quantity: quantity,
        category: category,
        
    }
    
    
    onAddItem(item);
    setName("");
    setQuantity(1);
    setCategory("");
    }

    const generateId = () => Math.random().toString(36).substring(2);




const styles = {
        pageContainer: {
            backgroundColor: "#172544",
            //: "100vh",
            display: "flex",
            alignItems: "center",
            //justifyContent: "center",
        },
        formContainer: {
            backgroundColor: "cyan",
            maxWidth: "600px",
            padding: 25,
            borderRadius: 10,
        },
        input: {
            width: "100%",
            paddingLeft: 5,
            borderRadius: 6,
            border: "1px solid gray",
            marginBottom: "1",
        },
        input1: {
            width: "75%",
            paddingLeft: 5,
            borderRadius: 6,
            border: "1px solid gray",
            marginBottom: "1",
        },
        select: {
            width: "100%",
            padding: 7,
            borderRadius: 10,
            border: "1px solid gray",
            marginBottom: 10,
        },
        label: {
            display: "block",
            fontWeight: "500",
            marginTop: 15,
            color: "black",
        },
        submitButton: {
            backgroundColor: "pink",
            color: "black",
            padding: 10,
            borderRadius: 8,
            border: "1px solid gray",
        },
        button: {
            marginLeft: "5px",
            padding: "10px",
            backgroundColor: "pink", 
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
    };

    return (
        <div style={styles.pageContainer}>
            <form
                onSubmit={handleSubmit}
                style={styles.formContainer}>
           
                <div>
                    <label style={styles.label}>Item:</label>
                    <input
                        style={styles.input}
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Item name"/> 
                </div>
                <div>
                    <label style={styles.label}>Quantity:</label>
                    <input
                        style={styles.input1}
                        value={quantity}
                        onChange={handleQuantityChange}
                        min="1"
                        placeholder="Enter quantity"/>
                    <button type="button" style={quantity === 20 ? styles.disabledButton : styles.button} onClick={increment}>
                    +
                    </button>
                    <button type="button"style={quantity === 1 ? styles.disabledButton : styles.button} onClick={decrement}>
                    -
                    </button>
                </div>
                <div>
                    <label style={styles.label}>Category:</label>
                    <select
                        style={styles.select}
                        value={category}
                        onChange={handleCategoryChange}>
                    
                        <option value="" disabled>Category</option>
                        <option value="produce" selected="">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="flex justify-end">
                    <button
                        style={styles.submitButton}
                        type="submit">
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}