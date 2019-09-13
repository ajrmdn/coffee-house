import React from 'react';

class NewTicketControl extends React.Component {
  class AppControl extends React.Component {
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

  handleShowingBrew = () => {
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
