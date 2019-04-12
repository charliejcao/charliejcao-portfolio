import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import '../src/styles/App.css';

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        {/* Header */}
        <div className="outer-container">
          <nav>
            <Link to="/" className="site-logo transition-link">
              <span className='logo-text'>C<u>J</u>C</span>
            </Link>
            <ul className="nav-right nav-list">
              <li className="list-item"><Link to="/" className="transition-link">Home</Link></li>
              <li className="list-item"><Link to="/projects" className="transition-link">Projects</Link></li>
              <li className="list-item"><Link to="/resume" className="transition-link">Resume</Link></li>
              <li className="list-item"><a href="https://www.linkedin.com/in/jirancao" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>

            <div className="mobile-nav">
              <button id="navigation-target" className="navigation-target"></button>
              <span className="navigation-toggle">
                <span className="navigation-toggle-icon"></span>
                <span className="navigation-toggle-label">Menu</span>
              </span>
            </div>
          </nav>

          <div className="dropdown-menu">
            <ul className="mobile-menu no-bullet">
              <li><Link to="/projects" className="transition-link">Projects</Link></li>
              <li><Link to="/resume" className="transition-link">Resume</Link></li>
              <li><a href="https://www.linkedin.com/in/jirancao" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        {/* Content */}
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/projects/" component={Projects} />
          <Route path="/resume/" component={Resume} />
        </div>

        {/* Footer */}
        <footer>Copyright © Jiran Cao 2019</footer>
      </Router>
    );
  }
}

export default AppRouter;