import React from 'react';
import PropTypes from 'prop-types';
import Brew from './Brew';
import NewBrewForm from './NewBrewForm';

class NewBrewControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      flavor: '',
      brand: '',
      price: '',
      BrewVisibleOnPage: true,
    };
  }

  handleShowingBrew  () => {
    this.setState({ brewVisibleOnPage: true });
  };

  handleNamingBrew = (newName) => {
    this.setState({ name: newName });
  };

  handleFlavorBrew = (newFlavor) => {
    this.setState({ flavor: newFlavor });
  };

  handleBrandBrew = (newBrand) => {
    this.setState({ brand: newBrand });
  };

  handlePricingBrew = (newPrice) => {
    this.setState({ price: newPrice });
  };

  render() {
    let currentlyVisibleContent = null;

    if (this.state.brewVisibleOnPage) {
      currentlyVisibleContent = <Brew
        name={this.state.name}
        flavor={this.state.flavor}
        brand={this.state.brand}
        price={this.state.price} />;

    } else {
      currentlyVisibleContent = <NewForm
        onShowingBrew={this.handleShowingBrew}
        onNamingBrew={this.handleNamingBrew}
        onFlavorBrew={this.handleFlavorBrew}
        onBrandBrew={this.handleBrandBrew}
        onPricingBrew={this.handlePricingBrew} />;
    };

    return (
      <div>
         {currentlyVisibleContent}
      </div>
    );
  }
}
NewBrewControl.propTypes = {
  onShowingBrew: PropTypes.func,
  onNamingBrew: PropTypes.func,
  onFlavorBrew: PropTypes.func,
  onBrandBrew: PropTypes.func,
  onPricingBrew: PropTypes.func,
};

export default NewBrewControl;
