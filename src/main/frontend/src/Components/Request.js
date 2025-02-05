import React from "react";

function Request() {
    return (
        <div>
            <h1>Request A Book</h1>
            <p>
                If you are still unable to find a book, please follow the steps below and send us the Book title and
                Author name.
                There are many books with the same title but different authors.

                <div className="request-box">
                    <label htmlFor="email">[Optional] Enter Your Email to get Notified about Your Book Request:</label>
                    <input type="email" id="email" placeholder="Your Email.."/>

                    <label htmlFor="book-title">Book Title:</label>
                    <input type="text" id="book-title" placeholder="Book Title.."/>

                    <label htmlFor="author-name">Author Name:</label>
                    <input type="text" id="author-name" placeholder="Author Name.."/>

                    <button type="submit">Submit Request</button>
                </div>

                <br/>
                Important Points:
                <br/>
                Please request one book at a time. We’ll ignore all requests containing multiple titles to do justice to
                all users' requests.
                This way, everyone can enjoy reading their book quickly. Once you have finished reading the first book,
                you can request a second book.
                <br/>
                Your requested book will be published in its request order in our inbox. At the moment, we are receiving
                a very high volume of requests per day, so please be patient. We cannot commit to a timeline for request
                processing; it all depends on the volume of requests. We are a very small team.
                <br/>
                Almost 90% of requested books are posted successfully within a few days. If your book is not posted, it
                means it is either not published yet or the EPUB/PDF version is not available in a readable format.
                <br/>
                Please don’t request books that are not even out yet. Always check the publication date.
                <br/>
                We read each and every request carefully. Please be patient if there is a delay.
            </p>
        </div>
    );
}

export default Request;
