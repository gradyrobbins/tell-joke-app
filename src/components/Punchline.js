import React from 'react';
import { Button } from 'reactstrap';

//functional component
// JS function that accepts props and returns something
export default function Punchline (props){
      if (props.showResult){
         return (
            <div>
               <h5>{props.punch} HA! HA! HA!</h5>
               <Button color="secondary" onClick={props.getAnotherClicked}>Show Another</Button>
            </div>
         )
      }else{
         return null;
      }
}