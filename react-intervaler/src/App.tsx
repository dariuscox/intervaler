import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'App.scss';
import 'stylesheets/index.scss';
import Stopwatch from 'components/Stopwatch'
import About from 'components/About'
import Timer from 'components/Timer'
import Error from 'components/Error';
import Navigation from 'components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (      
       <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Stopwatch} exact/>
             <Route path="/timer" component={Timer} exact/>
             <Route path="/about" component={About} exact/>
             <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    ); 
  }
}

export default App;
