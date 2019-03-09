import React from "react";
import Cardset from "../components/Cardset";

class Latinas extends React.Component {
  state = {
    cards: [
      {
        photo:
          "https://images.pexels.com/photos/1784386/pexels-photo-1784386.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250",
        title: "Brazil"
      },
      {
        photo:
          "https://images.pexels.com/photos/1731303/pexels-photo-1731303.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250",
        title: "Florida"
      },
      {
        photo:
          "https://images.pexels.com/photos/1649095/pexels-photo-1649095.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250",
        title: "California"
      },
      {
        photo:
          "https://images.pexels.com/photos/949380/pexels-photo-949380.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250",
        title: "Puerto Rico"
      }
    ]
  };

  render() {
    return <Cardset cards={this.state.cards} />;
  }
}

export default Latinas;
