import React from 'react';
import { Button } from 'reactstrap';

//functional component
// JS function that accepts props and returns something
export default function Punchline({ punch, getAnotherClicked, showResult }) {
  if (showResult) {
    return (
      <div>
        <h5>{punch} HA! HA! HA!</h5>
        <Button color="secondary" onClick={getAnotherClicked}>Show Another</Button>
      </div>
    )
  } else {
    return null;
  }
}