import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "#35FF38" : "#4CB07"};
  color: ${props => props.primary ? "#04CB07" : "#35FF38"};

  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  flex-direction: row-reverse;

  align-items:center;
  font-size: 0.5em;
  margin:0.3em;
  padding: 0.25em 1em;
  border: 2px solid #04CB07;
  border-radius: 50px;
`;

const Buttons = (props) =>{
    return (
        <div className="Button">
            <Button onClick={props.click} primary>{props.time}</Button>
        </div>
    )
} 

export default Buttons;