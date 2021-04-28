import React from 'react';
// it is recommended to import static images. See BL React Notes.
// the following works
import logo from '../images/happy_smiley_face.png';
// <img src="./images/happy_smiley_face.png" className="App-logo" alt="Joke Logo"/>


function Header(props) {

  // const logoImage = require(`./../images/happy_smiley_face.png`);
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {/*<img src={logoImage} alt="Joke Logo" className="App-logo" />*/}
      <h1 className="App-title">{props.title}</h1>
    </header>
  )

}

export default Header;