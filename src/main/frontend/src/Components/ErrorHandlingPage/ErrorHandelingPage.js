import {useState} from "react";
import {API_URL} from "../config";

function ErrorHandlingPage() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmitName = async () => {
        const response = await fetch(`${API_URL}/submit-name`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name})
        });
        const status = response.status;
        const text = await response.text();
        if (status === 400) {
            window.alert(text);
        } else {
            setMessage(text);
        }
    }

    return (
        <div style={{margin:'10px'}}>
            <h1>Error Handling Page</h1>
            <p>Enter your first name:</p>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={handleSubmitName}>Submit</button>
            <p>{message}</p>
        </div>
    );
}

export default ErrorHandlingPage;