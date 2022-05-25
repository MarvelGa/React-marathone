import React from 'react';
import styles from './button.module.css';

function Button() {  
  return (
    <button className="active" className= {styles.active}>
      Click Me
    </button>
  )
}

export default Button
