import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import NavBar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/';
import Aside from '../../components/Aside/';

import Dashboard from '../../views/Dashboard/';

import DataAndAnalysis from '../../views/Theme/Company/DataAnalysis';
import Companies from '../../views/Theme/ChartsPage/Companies';

class Full extends Component {
  render() {
    return (
      <div className="app">
            <Header/>
            <NavBar/>
        <div className="app-body" style={{marginTop:110, fontFamily: 'purisa'}}>
          <Sidebar {...this.props}/>
          <main className="main">
            <Container fluid>
              <Switch>
                <Route path="/dashboard" id='other' name="Dashboard" component={Dashboard}/>
                <Route path="/dataAnalysis"  id='other' name="DataAnalysis" component={DataAndAnalysis}/>
                <Route path="/companies" id="company" name="Companies" component={Companies}/>
                <Redirect from="/" id='other' to="/dashboard"/>
              </Switch>
            </Container>
          </main>
          <Aside/>
        </div>
      </div>
    );
  }
}

export default Full;
