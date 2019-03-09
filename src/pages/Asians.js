import React from "react";
import Cardset from "../components/Cardset";

class Asians extends React.Component {
  state = {
    cards: [
      {
        photo:
          "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250",
        title: "Japan"
      },
      {
        photo:
          "https://images.pexels.com/photos/1372134/pexels-photo-1372134.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250",
        title: "Taiwan"
      },
      {
        photo:
          "https://images.pexels.com/photos/921646/pexels-photo-921646.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250",
        title: "Korea"
      },
      {
        photo:
          "https://images.pexels.com/photos/1406764/pexels-photo-1406764.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250",
        title: "Thailand"
      }
    ]
  };

  render() {
    return <Cardset cards={this.state.cards} />;
  }
}

export default Asians;
