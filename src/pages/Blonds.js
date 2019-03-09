import React from "react";
import Cardset from "../components/Cardset";

class Blonds extends React.Component {
  state = {
    cards: [
      {
        photo:
          "https://images.pexels.com/photos/157728/straw-field-hair-nature-157728.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Sweden"
      },
      {
        photo:
          "https://images.pexels.com/photos/128881/beautiful-girl-smiling-da-128881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Denmark"
      },
      {
        photo:
          "https://images.pexels.com/photos/769598/pexels-photo-769598.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title: "Belarus"
      }
    ]
  };

  render() {
    return <Cardset cards={this.state.cards} />;
  }
}

export default Blonds;
