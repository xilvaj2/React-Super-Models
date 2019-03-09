import React from "react";

const Card = props => (
  <div className="row">
    <div className="col m6">
      <div className="card">
        <div className="card-image">
          <img src={props.photo} />
          <span className="card-title">{props.title}</span>
          <a className="btn-floating halfway-fab waves-effect waves-light red">
            <i className="material-icons">add</i>
          </a>
        </div>
        <div className="card-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At illum
            impedit excepturi obcaecati, reprehenderit expedita fugit aperiam
            nam autem vitae optio dolores! Adipisci magni dolore iure placeat
            at. Ipsum, blanditiis.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default props => (
  <div className="cardset">
    {props.cards.map(card => (
      <Card photo={card.photo} title={card.title} />
    ))}
  </div>
);
