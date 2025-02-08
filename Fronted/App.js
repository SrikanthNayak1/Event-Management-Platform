import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        socket.on("message", (msg) => {
            console.log(msg);
            setMessage(msg);
        });
    }, []);

    return (
        <div>
            <h1>Event Management Platform</h1>
            <p>{message}</p>
        </div>
    );
}

export default App;
