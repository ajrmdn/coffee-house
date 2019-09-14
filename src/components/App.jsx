import React from 'react';
import Header from './Header';
import BrewList from './BrewList';
import NewBrewForm from './NewBrewForm';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      masterBrewList: [],
    };

    this.handleAddingNewBrew = this.handleAddingNewBrew.bind(this);
  }

  handleAddingNewBrew(newBrew) {
    let newMasterBrewList = this.state.masterBrewList.slice();
    newMasterBrewList.push(newBrew);
    this.setState({ masterBrewList: newMasterBrewList });
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><BrewList brewList={this.state.masterBrewList} />} />
          <Route path='/newbrew' render={()=><NewBrewForm onAddingNewBrew={this.handleAddingNewBrew} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
