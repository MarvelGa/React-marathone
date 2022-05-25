import React from 'react';
import './App.css';

let key = 0;
const list = [
    "Animals",
    "Anime",
    "Anti-Malware",
    "Art Design",
    "Books",
    "Business",
    "Calendar",
    "Cloud Storage",
    "File Sharing",
    "Animals",
    "Continuous Integration",
    "Cryptocurrency"
]

export default function App() {
    return (
        <div>
            Some List:
            <ul>
                {list.map(elem => (
                    <li key={key++}>{elem}</li>
                ))}
            </ul>
        </div>
    );
}
