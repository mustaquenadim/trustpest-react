import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/common/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
