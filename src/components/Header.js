import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="outer-container">
            <nav>
                <Link to="/" className="site-logo transition-link">
                    <span className='logo-text'>C<u>J</u>C</span>
                </Link>
                <ul className="nav-right nav-list">
                    <li className="list-item"><Link to="/projects" className="transition-link">Projects</Link></li>
                    <li className="list-item">
                        <a href="https://drive.google.com/file/d/1PUAZXcZ4HgEXouwVq8eyQjCNT5jYL3zb/view?usp=sharing" 
                            target="_blank" rel="noopener noreferrer">Resume
                        </a>
                    </li>
                    <li className="list-item list-item-icon">
                        <a href="https://medium.com/@charliejcao" 
                            target="_blank" rel="noopener noreferrer"><i className="fab fa-medium fa-2x"></i>
                        </a>
                    </li>
                    <li className="list-item list-item-icon">
                        <a href="https://linkedin.com/in/jirancao" 
                            target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x"></i>
                        </a>
                    </li>
                    <li className="list-item list-item-icon">
                        <a href="https://github.com/charliejcao" 
                            target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i>
                        </a>
                    </li>
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
                    <li><a href="https://drive.google.com/file/d/1PUAZXcZ4HgEXouwVq8eyQjCNT5jYL3zb/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
                    <li>
                        <a href="https://medium.com/@charliejcao"
                            target="_blank" rel="noopener noreferrer"><i className="fab fa-medium fa-2x"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/jirancao" 
                            target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/charliejcao"
                            target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;