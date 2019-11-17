import React from 'react';
import $ from 'jquery';
import HomeSlider from './HomeSlider';

class Home extends React.Component {
    componentDidMount() {
        $('.navigation-toggle').on('click', function () {
            const navSelector = $('.navigation-target');
            const dropdownSelector = $('.dropdown-menu');
          
            if (navSelector.hasClass('clicked')) {
                navSelector.removeClass('clicked');
                dropdownSelector.slideUp();
            } else {
                navSelector.addClass('clicked');
                dropdownSelector.slideDown();
            }
        });
    }

    render() {
        return (
            <div>
                <section className="inner-container hero" style={{textAlign: 'center'}}>
                    <h1 style={{margin: 3}}>Jiran "Charlie" Cao</h1>
                    <h2 style={{fontWeight: "normal"}}>WEB DEVELOPER</h2>
                </section>
    
                <HomeSlider />
                
                <section className="inner-container space-bottom">
    
                    <h3>About:</h3>
                    <p className="about">
                        <span>As a web developer in Greater New York Area, I'm passionate about my work.</span>
                        <span>I always have the goal to build user-friendly apps that have the interactions with users, which I enjoy a lot.</span>
                        <span>Because of my passion for things about “User Experiences”, I always like to build a mindset that web development and design could converge.</span>
                        <span>What excites me a lot is to work on my personal web applications in spare time.</span>
                    </p>
                    <br/><br/>
                    <h3>Skills:</h3>
                    <p>
                        <span style={{color: '#F6AC00'}}>PROGRAMMING LANGUAGES: </span>
                        Javascript (including ES6), React, jQuery, HTML, CSS, ASP.NET C#, Java, etc.
                    </p>
                    <br/>
                    <p>
                        <span style={{color: '#F6AC00'}}>TOOLS / LIBRARIES: </span>
                        IntelliJ, Visual Studio, Eclipse, SQL Server, MySQL, Git, TFS, Bootstrap, etc.
                    </p>
                </section>
            </div>
        );
    }
}

export default Home;