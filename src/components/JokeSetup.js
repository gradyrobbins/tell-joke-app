import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { firstLetterCase } from '../helpers';

export function JokeSetup({ jokeLoaded, showResult, jokeType, setup, showClicked }) {


  // once the tell me button has been clicked, be sure to hide it.
  // don't want to click again

  // could create components for showMeJoke and showTellMeButton

  return (
    <Card body inverse style={{ backgroundColor: '#85144b', borderColor: '#85144b' }}>
      {jokeLoaded ?
        <span>
          <CardTitle>Joke About {firstLetterCase(jokeType)}</CardTitle>
          <CardText>{setup}</CardText>
        </span>
        :
        <CardTitle>Getting a Joke</CardTitle>}
      {showResult ?
        <div> </div>
        : <Button color="info" onClick={showClicked}>TELL ME</Button>
      }
    </Card>
  )
}