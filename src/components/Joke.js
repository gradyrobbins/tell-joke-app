import React, { Component } from 'react';
import Punchline from './Punchline';
import APICalls from './APICalls';
import JokeSetup from './JokeSetup';



class Joke extends Component {
   state = {
         jokeLoaded: false,
         jokeResult: {},
         showResult: false,
         error: null
      }

   showClicked = () => {
      console.log("clicked on show")
      this.setState({
         showResult: true
      });
   }

   getAnotherClicked = () => {
      console.log("getAnotherClicked");
      this.setState({
         jokeLoaded: false,
         jokeResult: {},
         showResult: false,
         error: null
      }, this.loadAnother);
      //ensure state is updated before calling a new joke
   }

   loadAnother = () => {
      APICalls.getJoke()
         .then((joke) => {
            this.setState({
               jokeLoaded: true,
               jokeResult: joke,
         })
      })
   }
   componentDidMount = () => {
      //lifecycle hook
      console.log("componentDidMount");
      APICalls.getJoke()
      .then((joke) => {
         this.setState({
            jokeLoaded: true,
            jokeResult: joke,
         })
      })
   }




   // flow notes
   // component load and should show "loading"
   // then call to get joke
   // handle the error also
   // when joke shows up, display JokeSetup with tellme button
   // click on tellme, tellme should go away and
   // punchline should show along with "get new joke"

   //render called each time state changes
   render () {
      console.log("render!");
      const { error, jokeLoaded, jokeResult, showResult } = this.state;
      if (error) {
         return (
            <div>
               <div>Error: {error.message}</div>
               <button onClick={this.getAnotherClicked}>Try Again</button>
            </div>
         );
      } else if (!jokeLoaded) {
         return <div>Loading...</div>;
      } else {
         return (
            <div className="box-container">
               <JokeSetup jokeLoaded={jokeLoaded}
                  jokeSetup={jokeResult.setup}
                  jokeType={jokeResult.type}
                  showResult={showResult}
                  showClicked={this.showClicked}/>
               <Punchline
                  showResult={showResult}
                  punch={jokeResult.punchline}
                  getAnotherClicked={this.getAnotherClicked} />
            </div>
         )
      }
   };
}

export default Joke;
