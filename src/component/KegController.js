import React from "react";
import KegDetails from "./KegDetails";
import NewKegForm from "./NewKegForm";
import ListView from "./ListView";

class KegController extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formVisibleOnPage: false,
      onTap: [],
      selectedKeg: null,
      kegDetailsVisible: false,
      totalPintsLeft: 0
    }
  }

  //event handlers

  handleMainPageButtonClick = () => {  // sets state to normal
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        kegDetailsVisible: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleChangingSelectedKeg = (id) => { // view Keg in Detail
    const selectedKeg = this.state.onTap.filter((keg) => {
      return keg.id === id;
    })[0];
    this.setState({ selectedKeg: selectedKeg, kegDetailsVisible: true });
  }

  handleAddingNewKegToList = (newKeg) => { // adds new Keg to Array
    const newOnTap = this.state.onTap
      .concat(newKeg);
    this.setState({
      onTap: newOnTap,
      formVisibleOnPage: false,
      totalPintsLeft: this.state.totalPintsLeft + 124
    });
  }

  handleBuyingPintsClick = (id) => {
    const selectedKeg = this.state.onTap.filter((keg) => {
      return keg.id === id;
    })[0];
    selectedKeg.pintsLeft = selectedKeg.pintsLeft > 0 ? selectedKeg.pintsLeft - 1 : 0;

    let newPintsLeft = this.state.totalPintsLeft > 0 ? this.state.totalPintsLeft - 1 : 0;

    this.setState({
      totalPintsLeft: newPintsLeft
    });
  }

  render() {
    let currentlyVisibleComponent = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleComponent = <NewKegForm
        onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to List of Kegs";
    }
    else if (this.state.kegDetailsVisible) {
      currentlyVisibleComponent = <KegDetails keg={this.state.selectedKeg} />;
      buttonText = "Return to List of Kegs";
    }
    else {
      currentlyVisibleComponent = <ListView
        kegs={this.state.onTap}        
        handleBuyingPintsClick={this.handleBuyingPintsClick}
        onKegSelection={this.handleChangingSelectedKeg} />;
      buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleComponent}
        <button onClick={this.handleMainPageButtonClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}
export default KegController; 