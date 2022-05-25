import './App.css';
import React, {useState, useEffect} from "react";

export default function App() {
    const [appData, setData] = useState("");

    useEffect(() => {
        setData(localStorage.getItem('appData'));
    }, []);

    return (
        <div>
            React Marathon, appData: <input size='5' defaultValue={appData}></input>
        </div>
    );
}
