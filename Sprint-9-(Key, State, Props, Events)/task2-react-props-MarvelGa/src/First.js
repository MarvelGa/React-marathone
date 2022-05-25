import React from 'react';
import './App.css';


export default function First({someList}) {
    return (
        <div>
            {someList[0]}
        </div>
    );
}