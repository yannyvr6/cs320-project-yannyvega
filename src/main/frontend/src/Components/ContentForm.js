import { useState } from "react";
import { API_URL } from "../config";

function ContentForm({ existingContent = null }) {
    const [title, setTitle] = useState(existingContent ? existingContent.title : "");
    const [description, setDescription] = useState(existingContent ? existingContent.description : "");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        if (!title || !description) {
            setError("Title and Description are required.");
            return;
        }

        const method = existingContent ? "PUT" : "POST";
        const url = existingContent
            ? `${API_URL}/update-content/${existingContent.id}`
            : `${API_URL}/add-content`;

        try {
            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title, description })
            });

            const data = await response.json();
            if (response.ok) {
                setMessage(data.message);
            } else {
                setError(data.message);
            }
        } catch (error) {
            setError("Error submitting data.");
        }
    };

    return (
        <div>
            <h1>{existingContent ? "Update Content" : "Add Content"}</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {message && <p style={{ color: 'green' }}>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button type="submit">{existingContent ? "Update" : "Add"}</button>
            </form>
        </div>
    );
}

export default ContentForm;
