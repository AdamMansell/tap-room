import React from "react";
import Keg from './Keg'
import PropTypes from 'prop-types';

function ListView(props) {
  return (
    <React.Fragment>
      <ul>
        {
          props.kegs.map((keg, index) =>
            <Keg
              whenKegClicked={props.onKegSelection}
              whenBuyButtonIsClicked={props.handleBuyingPintsClick}
              name={keg.name}
              brand={keg.brand}
              price={keg.price}
              alcoholContent={keg.alcoholContent}
              pintsLeft={keg.pintsLeft}
              id={keg.id}
              key={index} />
          )
        }
      </ul>
    </React.Fragment>
  );
}

ListView.propTypes = {
  kegs: PropTypes.arrayOf(PropTypes.object),
  onKegSelection: PropTypes.func,
  handleBuyingPintsClick: PropTypes.func,  
};

export default ListView; 