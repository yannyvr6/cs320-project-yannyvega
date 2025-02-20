import { withAuthenticator} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css'
import "./Page2.css"
import {useEffect, useState} from "react";
import { API_URL } from "./config";


function Page2({ signOut, user }) {
    return (
        <div className="page-container">
            <h1>Hello {user.username}</h1>
            <button onClick={signOut}>Sign out</button>
            <ViewRequests /> {/* Render ViewRequests component */}
        </div>
    );
}

export const ViewRequests = () => {
    const [requests, setRequests] = useState([]); // Holds book requests
    const [error, setError] = useState("");

    useEffect(() => {
        fetchRequests();
    }, []);

    const fetchRequests = async () => {
        try {
            const response = await fetch(`${API_URL}/get-requests`);
           console.log(`Response Status`, response.status);
           console.log(`Response Text`, await response.text());

            if (!response.ok) throw new Error("Failed to fetch data");
            const data = await response.json();
            setRequests(data);
        } catch (err) {
            setError(`Error: ${err.message}`);
        }
    };

    return (
        <div>
            <h2>Submitted Book Requests</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <ul>
                {requests.map((req, index) => (
                    <li key={index}>
                        <strong>Title:</strong> {req.title} |
                        <strong> Author:</strong> {req.author} |
                        <strong> Email:</strong> {req.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default withAuthenticator(Page2);

