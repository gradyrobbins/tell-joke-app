import React, { useState, useEffect } from 'react';
import Punchline from './Punchline';
import { getJoke } from './APICalls';
import { JokeSetup } from './JokeSetup';



export function Joke() {
  const [jokeLoaded, setJokeLoaded] = useState(false);
  const [jokeResult, setJokeResult] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState(null);

  // state = {
  //   jokeLoaded: false,
  //   jokeResult: {},
  //   showResult: false,
  //   error: null
  // }

  const showClicked = () => {
    console.log("clicked on show")
    setShowResult(true);
  }

  const getAnotherClicked = () => {
    console.log("getAnotherClicked");
    setJokeLoaded(false);
    setJokeResult({});
    setShowResult(false);
    setError(null)
    loadAnother();
  }

  // this.setState({
  //   jokeLoaded: false,
  //   jokeResult: {},
  //   showResult: false,
  //   error: null
  // }, this.loadAnother);
  //ensure state is updated before calling a new joke

  const loadAnother = () => {
    getJoke()
      .then((joke) => {
        setJokeResult(joke);
        setJokeLoaded(true);
      })
  }

  const showView = () => {
    console.log("jokeLoaded", jokeLoaded)
    if (error) {
      return (
        <div>
          <div>Error: {error.message}</div>
          <button onClick={getAnotherClicked}>Try Again</button>
        </div>
      );
    } else if (!jokeLoaded) {
      return <div>Loading...</div>;
    } else {
      console.log("jokeresult", jokeResult)
      return (
        <div className="box-container">

          <JokeSetup jokeLoaded={jokeLoaded}
            setup={jokeResult.setup}
            jokeType={jokeResult.type}
            showResult={showResult}
            showClicked={showClicked} />
          <Punchline
            showResult={showResult}
            punch={jokeResult.punchline}
            getAnotherClicked={getAnotherClicked} />
        </div>
      )
    }
  }

  useEffect(() => {
    loadAnother()

  }, []);



  // flow notes
  // component load and should show "loading"
  // then call to get joke
  // handle the error also
  // when joke shows up, display JokeSetup with tellme button
  // click on tellme, tellme should go away and
  // punchline should show along with "get new joke"

  return (
    <>
      {showView()}
    </>
  )
}