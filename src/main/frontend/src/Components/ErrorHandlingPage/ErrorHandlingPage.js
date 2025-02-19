import { useState } from "react";
import { API_URL } from "../config";

//  Validation Functions
export const validateName = (name) => {
    if (!name) return "Name is required.";
    if (name.length < 3) return "Name must be at least 3 characters long.";
    if (name.includes(" ")) return "Name cannot contain spaces.";
    return null;
};

export const validateEmail = (email) => {
    if (!email) return "Email is required.";
    if (!email.includes("@")) return "Email must contain '@'.";
    return null;
};

export const validateRequest = (title, author) => {
    if (!title) return "Title is required.";
    if (!author) return "Author Name is required.";
    return null;
};

function ErrorHandlingPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [message, setMessage] = useState("");

    //  Unified Submit Function
    const handleSubmit = async () => {
        const nameError = validateName(name);
        const emailError = validateEmail(email);
        const requestError = validateRequest(title, author);

        //  Collect Errors
        if (nameError || emailError || requestError) {
            alert(`Errors:\n${nameError || ""}\n${emailError || ""}\n${requestError || ""}`);
            return;
        }

        try {
            const response = await fetch(`${API_URL}/submit-request`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, title, author })
            });

            const text = await response.text();
            if (response.status === 400) {
                alert(text);
            } else {
                setMessage(text);
            }
        } catch (error) {
            alert("An error occurred while submitting. Please try again later.");
        }
    };

    return (
        <div style={{ margin: '10px' }}>
            <h1>Error Handling Page</h1>

            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <label>Email:</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label>Book Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

            <label>Author:</label>
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />

            <button onClick={handleSubmit}>Submit</button>

            <p>{message}</p>
        </div>
    );
}

export default ErrorHandlingPage;
