"use client";

import { useState } from "react";
import ManagedForm from "./managed-form";

export default function ContactForm() {
   
    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => {
        if (showForm) {
            setShowForm(false);
        } else {
            setShowForm(true);
        }
    }

    return(
        <main className="p-5">
            <h1 className="text-3x1 text-center">Contact Us!</h1>
            {showForm && (<ManagedForm/>)}
            <div>
                <button onClick={toggleForm}>Contact Form</button>
            </div>
        </main>
    );
    
}