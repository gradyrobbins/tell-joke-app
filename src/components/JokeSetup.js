import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import {firstLetterCase} from '../helpers';

export default class JokeSetup extends Component {
   render(){
      const showMeJoke = this.props.jokeLoaded ?
         <span>
            <CardTitle>Joke About {firstLetterCase(this.props.jokeType)}</CardTitle>
            <CardText>{this.props.jokeSetup}</CardText>
         </span>
         :
         <CardTitle>Getting a Joke</CardTitle>;

      // once the tell me button has been clicked, be sure to hide it.
      // don't want to click again
      const showTellMeButton = this.props.showResult ?
         <div> </div>
         : <Button color="info" onClick={this.props.showClicked}>TELL ME</Button>

      // could create components for showMeJoke and showTellMeButton
      return (
         <Card body inverse style={{ backgroundColor: '#85144b', borderColor: '#85144b' }}>
            {showMeJoke}
            {showTellMeButton}
         </Card>
      )
   }
}