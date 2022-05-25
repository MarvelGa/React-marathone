import React from "react";
import styles from './Star.module.css';

export default function NextButtonFun(props) {
    return (
        <>
            <div id='BtnNext'>
                <button id='Btn' onClick={props.changeCounter}>NEXT</button>
            </div>
        </>
    )
}