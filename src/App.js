import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import LoginForm from './components/LoginForm'
import {
  Routes, Route, BrowserRouter as Router
} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Home from './components/Home'

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path='/' element={<PrivateRoute />}>
            <Route exact path='/' element={<Home />} />
          </Route>
          <Route exact path='/login' element={<LoginForm />} />
        </Routes>
      </Fragment>
    </Router>
  )
}

export default App;
