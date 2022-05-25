import React from 'react';
import './App.css';
import First from './First'

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
            Some data:
            <First someList={list.map(el => el.toLowerCase())} />
        </div>
    );
}
