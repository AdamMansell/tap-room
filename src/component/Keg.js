import React from "react";
import PropTypes from 'prop-types';

function Keg(props) {
  let pintsLeft = props.pintsLeft;
  if (parseInt(pintsLeft) === 0) {
    pintsLeft = "Keg's Empty";
  }

  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <li>Name: {props.name}</li>
        <li>Brand: {props.brand}</li>
        <li>Price: ${props.price}</li>
        <li>Content: {props.alcoholContent}%</li>
        <li>PintsLeft: {pintsLeft}</li>
        <hr></hr>
      </div>
      <button onClick={() => props.whenBuyButtonIsClicked(props.id)}> Buy!</button>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  pintsLeft: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg; 