import React from 'react';
import '../App.css';

const Row = (props) => <div className='row-container'>
  <label htmlFor={props.label}>{props.label}</label>
  {props.children}
</div>

export default Row