import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import Navigation from './components/layout/Navbar'
// import Dashboard from './components/dashboard/Dashboard'
// import ProjectDetails from './components/projects/ProjectDetails'
import LandingPage from './components/landing/landing_page_image'
import Info from './components/landing/information'
import Instructions from './components/landing/instructions'
import SocialFeed from './components/landing/social'
import './css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <LandingPage />
          <Info />
          <Instructions />
          <SocialFeed />
          {/* <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/project/:id' component={ProjectDetails} />
          </Switch> */} 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
