"use client";
import { useState } from "react";

export default function ManagedForm() {

    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [contactType, setContactType] = useState("");
    const [message, setMessage] = useState("");

    const handleFullNameChange = (event) => {
        console.dir(event);
        //setFullName();
    }

    
    const handlePhoneChange = (event) => setPhone(event.target.value);
    const handleEmailChange = (event) => setEmail(event.target.value);
    const handleBirthdateChange = (event) => setBirthdate(event.target.value);
    const handleContactTypeChange = (event) => setContactType(event.target.value);
    const handleMessageChange = (event) => setMessage(event.target.value);
    
    const handleSubmit = (event) => {
        event.preventDefault();
    

        let contactData = {
            fName: fullName,
            telnum: phone,
            mail: email,
            birthday: birthdate,
            type: contactType,
            msg: message
        }
        
        alert(` 
            Name: ${contactData.fName} |
            Phone: ${contactData.telnum} |
            Email: ${contactData.mail} |
            Birthday: ${contactData.birthday} |
            Contact Type: ${contactData.type} |
            Message: ${contactData.msg} 
            `);
        
        setFullName("");
        setPhone("");
        setEmail("");
        setBirthdate("");
        setContactType("");
        setMessage("");

        }
    return(
        <form onSubmit={handleSubmit}>
            <div>
            <label className="inline-block w-40">Full Name:</label>
            <input className="bg-slate-300  px-2 py-1 rounded border border-gray-500 focus:bg-blue-100 " type="text" onChange={handleFullNameChange}/>
            </div>
            <div>
                <label className="inline-block w-40">Phone Number:</label>
                <input className="bg-slate-300  px-2 py-1 rounded border border-gray-500 focus:bg-blue-100" type="tel" onChange={handleFullNameChange}/>
            </div>
            <div>
                <label className="inline-block w-40">Email:</label>
                <input className="bg-slate-300  px-2 py-1 rounded border border-gray-500 focus:bg-blue-100" type="email" onChange={handleEmailChange}/>
            </div>
            <div>
                <label className="inline-block w-40">Birthdate:</label>
                <input className="bg-slate-300  px-2 py-1 rounded border border-gray-500 focus:bg-blue-100" type="date" onChange={handleBirthdateChange}/>
            </div>
            
            <div>
                <label className="inline-block w-40">Contact Type: </label>
                <select onChange={handleContactTypeChange}>
                    <option selected value="">Please select a contact type</option>
                    <option value="personal">Personal</option>
                    <option value="business">Business</option>
                </select>
            </div>
            <div>
                <label className="inline-block w-40">Message: </label>
                <textarea></textarea>
                <button>Submit</button>
            </div>
        </form>
    );
}


{/* <div>
            <div>
                <h2>Contact type</h2>
                <input type="radio" name="contact_type" id="ct_personal" value="personal"/>
                <label for="ct_personal">Personal</label>
                </div>
                <div>
                <input type="radio" name="contact_type" id="ct_business" value="business"/>
                <label for="ct_business">Business</label>
                </div>
            </div>
             
            <div>
                <label>Contact Type</label>
                <select>
                    <option value = "Personal">Personal</option>
                    <option value = "business">Business</option>
                </select>
            </div> */}