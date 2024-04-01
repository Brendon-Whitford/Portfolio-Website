//--------------------------------------------------
//Root logic for client rendering down from index.js
//--------------------------------------------------

import React, {Fragment} from 'react';
import { alertActions } from "../Actions";
import { connect } from 'react-redux';
import { Route, Routes, HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';

import {Projects, Dashboard, Account} from '../Components/UserPages';
import {NavigationBar, PageNotFound, Footer} from '../Components/GeneralComponents';

const App = ({ alert }) => {   
  return (
    <HashRouter>
      <NavigationBar />
      
      {/*Displays alert at the top of the screen*/}
      {alert.message ? <Alert variant={alert.type} dismissible className={`fadeAlert`}>{alert.message}</Alert> : <Fragment></Fragment>}

      {/*Displays loading screen on top of page to disable user input*/}
      {alert.loading ? <div class="loading-container"><div class="loading-text">Loading...</div></div>: <Fragment></Fragment>}

      <Routes>
        {/*Pages where no clearance level is required*/}
        <Route path="/" element={<Dashboard />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Account" element={<Account />} />

        <Route path='*' element={<PageNotFound />} />
      </Routes>

      <Footer />
    </HashRouter>
  )
}

function mapState(state) {
  const { alert } = state
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

export default connect(mapState, actionCreators)(App);