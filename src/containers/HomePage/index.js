import React, { Component } from "react";
import PropTypes from "prop-types";
// import { Button } from 'react-bootstrap';

import PButton from "components/PButton";
// import PButton from './../components/PButton';
import IntroTextField from "../../components/PHeader";
import PParag from "../../components/PParag";
import PMenuButton from "../../components/PMenuButton";
//IntroTextField import edildi.

export default class index extends Component {
  static propTypes = {
    // prop: PropTypes
  };

  render() {
    // className mi ?? :D oke but you see right its text not italic why think about it plz
    // can you open portfolio template on another page (index.html) and than plz inspect the tag

    return (
      <div>
        <div className="intro-text">
          <IntroTextField>
            <h1>Ben Aybike</h1>
            <p>A Friend, Dude and Buddy From Earth</p>
          </IntroTextField>
          <div className="intro-text">
            <h1>Ben Ceyhun</h1>
            <p>A Friend, Dude and Buddy From Earth</p>
          </div>
        </div>
        <PMenuButton />
        <PButton
          className="asd"
          colorfull={true}
          text={"Discover More"}
          to={"/"}
        />
        <PButton text={"Hire Me"} to={"/"} />
        <PButton colorfull text={"Hire Me"} to={"/"} />
        <PButton colorfull text={"Hire 123"} to={"/"} />
        <PButton text={"Hire weqrwe"} to={"/"} />

        <PButton
          text={"Hire Me"}
          to={"/"}
          onClick={() => {
            alert("Aybikemi ben Cok seviyorum iyiki var o <3<3<3<3<3<3<3");
          }}
        />
      </div>
    );
  }
}

// iki farklı button um var template icinde
// birisi gri hover lı mavi arkapalndaki home sayfasındaki
// biride gri arkaplanda gri hover
