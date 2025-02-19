import React, { useState } from "react";
import { API_URL } from "./config";
import { validateEmail, validateRequest, validateName } from "./ErrorHandlingPage/ErrorHandlingPage";

function Request() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        // Validate inputs
        const emailError = validateEmail(email);
        const nameError = validateName(email);
        const requestError = validateRequest(title, author);


        if (emailError || requestError) {
            setErrorMessage(`${emailError || ""} ${requestError || ""}`);
            return;
        }

        // Send request to API (assuming API_URL is already set)
        try {
            const response = await fetch("http://localhost:8080/submit-request", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, title, author, name})
            });

            if (!response.ok) {
                const errorText = await response.text();
                setErrorMessage(errorText);
            } else {
                    setErrorMessage("Request submitted successfully!");
                    setEmail("");
                    setTitle("");
                    setName("");
                    setAuthor("");
                }
            } catch (error) {
                setErrorMessage("An error occurred while submitting.");
            }}

    return (
        <div>
            <h1>Request A Book</h1>
            <p>
                If you are still unable to find a book, please follow the steps below and send us the Book title and
                Author name.
                There are many books with the same title but different authors.
                Please request one book at a time. We’ll ignore all requests containing multiple titles to do justice to
                all users' requests.
                This way, everyone can enjoy reading their book quickly. Once you have finished reading the first book,
                you can request a second book.
                Your requested book will be published in its request order in our inbox. At the moment, we are receiving
                a very high volume of requests per day, so please be patient. We cannot commit to a timeline for request
                processing; it all depends on the volume of requests. We are a very small team.
                Almost 90% of requested books are posted successfully within a few days. If your book is not posted, it
                means it is either not published yet or the EPUB/PDF version is not available in a readable format.
                Please don’t request books that are not even out yet. Always check the publication date.
                We read each and every request carefully. Please be patient if there is a delay.
                { errorMessage && <p style={{
                    color: "red",
                    fontSize: "16px",
                    fontWeight: "bold",
                    padding: "10px",
                    border: "1px solid red",
                    backgroundColor: "#ffe6e6",
                    borderRadius: "5px",
                    textAlign: "center"
                }}>{ errorMessage }</p> }
            </p>

            <div className="request-box">
                <label htmlFor="name"> Enter Your Name: </label>
                <input type="text"
                       id="name"
                       placeholder="Enter Your name"
                       value={ name }
                       onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="email">Enter Your Email:</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Your Email.."
                    value={ email }
                    onChange={ (e) => setEmail(e.target.value) }
                />

                <label htmlFor="book-title">Book Title:</label>
                <input
                    type="text"
                    id="book-title"
                    placeholder="Book Title.."
                    value={ title }
                    onChange={ (e) => setTitle(e.target.value) }
                />

                <label htmlFor="author-name">Author Name:</label>
                <input
                    type="text"
                    id="author-name"
                    placeholder="Author Name.."
                    value={ author }
                    onChange={ (e) => setAuthor(e.target.value) }
                />

                <button type="submit" onClick={ handleSubmit }>Submit Request</button>
            </div>

        </div>

    )
        ;
}

export default Request;
