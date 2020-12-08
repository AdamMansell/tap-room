import React from "react";
import PropTypes from "prop-types";

function KegDetails({ keg }) {
  let pintsLeft = keg.pintsLeft;
  if (parseInt(pintsLeft) === 0) {
    pintsLeft = "Keg's Empty";
  }

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <p>Name: {keg.name}</p>
      <p>Brand: {keg.brand}</p>
      <p>Price: ${keg.price}</p>
      <p>Content: {keg.alcoholContent}%</p>
      <p>PintsLeft: {pintsLeft}</p>
    </React.Fragment>
  );
}

export default KegDetails;

KegDetails.prototypes = {
  keg: PropTypes.object.isRequired
}