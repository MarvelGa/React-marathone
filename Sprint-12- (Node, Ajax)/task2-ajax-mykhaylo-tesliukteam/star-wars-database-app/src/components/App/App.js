import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StartWarList from "./StartWarList2";
import {TopPanelFun} from "./TopPanel";
import NextButton from "./NextButton"

let swicher = 'people';

function App() {

    const [counterData, setCounterData] = useState(1);
    const [data, setData] = useState('');

    function changeCounter() {
        setCounterData(counterData + 1);
    }

    function changeLink(even) {

    }

    return (
        <div>
            <TopPanelFun changeLink={changeLink}/>
            <NextButton changeCounter={changeCounter}/>
            <StartWarList peopleId={counterData}/>
        </div>
    );
}

export default App;


