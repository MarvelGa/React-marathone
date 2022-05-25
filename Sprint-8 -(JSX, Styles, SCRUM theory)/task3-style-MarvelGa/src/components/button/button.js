import React from 'react';

const styleSet ={
    color : 'rgb(18, 255, 18)',
    backgroundColor: 'transparent',
    border : 0,
    fontFamily: 'Courier',
    fontSize:'33pt'
}

export default function Button(){
    return <button style={styleSet} data-testid="element-button">Wake up Neo...</button>;
}