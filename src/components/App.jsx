import React from "react";
import Header from "./Header";
import BrewList from "./BrewList";
import { Switch, Route } from 'react-router-dom';
import NewBrewControler from './NewBrewC';


function App(){

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={BrewList} />
        <Route path='/newbrew' component={NewBrewForm} />
      </Switch>
    </div>
  );
}

export default App;
