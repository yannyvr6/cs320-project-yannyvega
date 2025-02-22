//main/home page plus the app or main component file

import {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import {API_URL} from "./config";
import './App.css';


function App() {
    const [message, setMessage] = useState( ''); //will hold the message from the backend

    //useEffect is a React method that will run after this page is loaded
    // it will fetch the message from the backend
    useEffect(() => {
        const fetchMessage = async () => {
            const response = await fetch(`${API_URL}/hello/personalized`, {
                method: 'POST', //POST request
            });
            const text = await response.text(); //waits for the response and the converts it to text
            setMessage(text); //sets the message with the text from the response
        };
        fetchMessage();
    }, []);


    return (
        <div>
            <h1>Build Your Digital Library</h1>
            <Link to="/booksuggestions">
                <img src={'https://babluboy.github.io/bookworm/images/BookwormLibraryView.png'} alt="Library" />
            </Link>
            <p>Digital library with URLs &nbsp; • &nbsp; PDF or Epub. Your choice! &nbsp; • &nbsp; Look up the books you
                love and in your wishlist. &nbsp; • &nbsp; Look up new option per genre.</p>
        <Link to="/Page2">
            <button>View Book Request </button>
        </Link>

        </div>
    );

}


export default App;
