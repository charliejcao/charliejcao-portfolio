import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import '../src/styles/App.css';

function AppRouter() {
  return (
    <Router>
      {/* Header */}
      <Header/>
      {/* Content */}
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/projects/" component={Projects} />
      </div>

      {/* Footer */}
      <footer>Copyright © Jiran Cao 2019</footer>
    </Router>
  );
}

export default AppRouter;