"use client";

import React, { useState, useEffect } from 'react';

async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals || []; 
    } catch (error) {
        console.error("Error fetching meal ideas:", error);
        return [];
    }
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const maxRecipes = 10;

    async function loadMealIdeas() {
        const mealData = await fetchMealIdeas(ingredient);
        setMeals(mealData);
    }

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    return (
        <div style={styles.div1}>
            <h1 style={styles.heading}>Meal Ideas</h1>
            {meals.length > 0 ? (
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {meals.slice(0, maxRecipes).map((meal) => (
                        <li
                            key={meal.idMeal}
                            style={styles.div2}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "deepskyblue"}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#3b0764"}
                        >
                            <h3 style={styles.h3}>{meal.strMeal}</h3>
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ color: "white" }}>No meals found</p>
            )}
        </div>
    );
}

const styles = {
    div1: {
        display: "flex",
        flexDirection: "column", 
        marginTop: 100,
        alignItems: "flex-start",
        maxHeight: "700px",
    },
    heading: {
        fontSize: "20px",
        color: "white",
    },
    div2: {
        backgroundColor: "#3b0764",
        width: 300,
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 12,
        color: "white",
        textAlign: "left",
    },
    h3: {   
        color: "white"
    }
};
