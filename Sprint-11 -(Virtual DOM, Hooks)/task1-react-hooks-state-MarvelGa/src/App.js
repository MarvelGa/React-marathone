import './App.css';
import React, {useState} from "react"

export default function App() {
    const [title, setTitle] = useState("React Marathon")

    return <div onClick={() => setTitle(title.toLowerCase())}>{title}</div>;
}

