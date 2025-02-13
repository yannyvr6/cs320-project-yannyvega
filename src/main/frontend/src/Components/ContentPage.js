import { useState, useEffect } from "react";
import { API_URL } from "../config";

function ContentPage() {
    const [content, setContent] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await fetch(`${API_URL}/get-content`);
                if (!response.ok) throw new Error('Failed to fetch content');
                const data = await response.json();
                setContent(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchContent();
    }, []);

    return (
        <div>
            <h1>Content</h1>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {content.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default ContentPage;
