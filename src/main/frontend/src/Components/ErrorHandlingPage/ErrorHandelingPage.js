import {useState} from "react";
import {API_URL} from "../config";

function ErrorHandlingPage() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const validateName = (name) => {
        if (name.length < 3) return "Name must be at least 3 characters long.";
        if (name.includes(" ")) return "Name cannot contain spaces.";
        if (!name) return "Name is required";
    }

    const validateEmail = (email) => {
        if (!email) return "Email is required";
        if (!email.includes("@")) return "Email must contain '@'.";
    }

    const validateRequest = (title, author) => {
        if (!title) return "Title is required.";
        if (!author) return "Author Name is required.";
        return "";
    };

    const validateMessage = (message) => {
        if (!message) return "Message is required";
        if (!message.includes("@")) return "Message is required";
    }

    const handleSubmitName = async () => {
        const nameError = validateName(name);
        const emailError = validateEmail(email);
        const requestError = validateRequest(title, author);

        if (nameError || emailError || requestError) {
            alert(`Errors:\n${nameError}\n${emailError}\n${requestError}`);
            return;
        }

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

        const handleSubmitRequest = async () => {
            const emailError = validateEmail(email);
            const titleError = !request ? "Title is Required." : "";
            const authorError = !author ? "Author Name is required." : "";

            if (emailError || emailError || requestError) {
                alert(`${ emailError || "" } ${ titleError || "" } ${ authorError || "" }`);
                return;
            }
            const response = await fetch(`${API_URL}/submit-request`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, title, author })
            })
            const status = response.status;
            const text = await response.text();

            if (status === 400) {
                alert(text);
            } else {
                setMessage(text);
            }
        }
    };


    return (
        <div style={ {margin: '10px'} }>
            <h1>Error Handling Page</h1>

            <p>Enter your Name:</p>
            <input type="text"
                   value={ name }
                   onChange={ (e) => setName(e.target.value) }/>

            <p>Enter your Email:</p>
            <input type="text"
                   value={ email }
                   onChange={ (e) => setEmail(e.target.value) }/>

            <p>Enter Book's Title:</p>
            <input type="text"
                   value={ title }
                   onChange={ (e) => setTitle(e.target.value) }/>

            <p>Enter Author's Name:</p>
            <input
                type="text"
                value={ author }
                onChange={ (e) => setAuthor(e.target.value) }/>

            <button onClick={ handleSubmitName }>Submit</button>
            <p>{ message }</p>

        </div>
    );
}

export default ErrorHandlingPage;