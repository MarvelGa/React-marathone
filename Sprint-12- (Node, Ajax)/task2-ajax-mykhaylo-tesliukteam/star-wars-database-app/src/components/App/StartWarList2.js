import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styles from './Star.module.css';
import {get} from "../../services/sw-service";

export default function StartWarList({peopleId}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        get({peopleId})
            .then(res => {
                console.log(res);
                setData(res);
            })
    }, [setData])

    console.log(data);
    return (

        <div id='container'>
            <br></br>
            <div id='picture'>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${peopleId}.jpg`}
                     alt="https://starwars-visualguide.com/assets/img/placeholder.jpg" width="400" height="400"/>
            </div>
            <div id='data'>
                <h1>{data.name}</h1>
                <ul key={peopleId}>
                    <li>{`Gender: ${data.gender}`}</li>
                    <li>{`Gender: ${data.birth_year}`}</li>
                    <li>{`Gender: ${data.eye_color}`}</li>
                </ul>
            </div>
        </div>
    )

}

