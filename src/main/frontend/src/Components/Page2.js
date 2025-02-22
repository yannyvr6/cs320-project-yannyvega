import { withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import "./Page2.css";
import { useEffect, useState } from "react";
import { API_URL } from "./config"; // Ensure API_URL is correctly defined

function Page2({ signOut, user }) {
    return (
        <div className="page-container">
            <h1>Hello, {user.username}!</h1>
            <button onClick={signOut}>Sign out</button>
            <ViewRequests /> {/* Display submitted book requests */}
        </div>
    );
}

const ViewRequests = () => {
    const [requests, setRequests] = useState([]); // Holds book requests
    const [error, setError] = useState("");

    useEffect(() => {
        fetchRequests();
    }, []);

    const fetchRequests = async () => {
        try {
            const response = await fetch(`${API_URL}/book-request/get-all`); // Ensure the correct API path
            console.log("Response Status:", response.status);

            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.statusText}`);
            }

            const data = await response.json();
            setRequests(data);
        } catch (err) {
            console.error("Fetch Error:", err);
            setError(`Error: ${err.message}`);
        }
    };

    return (
        <div>
            <h2>Submitted Book Requests</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {requests.length === 0 ? (
                <p>No book requests found.</p>
            ) : (
                <ul>
                    {requests.map((req, index) => (
                        <li key={index}>
                            <strong>Title:</strong> {req.title} |{" "}
                            <strong>Author:</strong> {req.author} |{" "}
                            <strong>Email:</strong> {req.email}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default withAuthenticator(Page2);
