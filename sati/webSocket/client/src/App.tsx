import React from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:8080");

socket.on("connect", () => {
    console.log("socket started", socket.id);
});

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>hello</h1>
                <input></input>
                <button>check</button>
            </header>
        </div>
    );
}

export default App;
