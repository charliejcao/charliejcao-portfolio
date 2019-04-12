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
                <section className="inner-container hero">
                    <h1>Hello, my name is Jiran 'Charlie' Cao, a web developer living in Weehawken, New Jersey. </h1>
                </section>
    
                <HomeSlider />
                
                <section className="inner-container space-bottom">
    
                    <h3>About:</h3>
                    <p className="about">I am currently working as a web developer at <a href="https://www.healthplan.com/" 
                        target="_blank" rel="noopener noreferrer">HealthPlan Services, Inc.</a>, which is where my passion for design and development converge. See my previous work history on <a href="https://www.linkedin.com/profile/view?id=99755347" 
                        target="_blank" rel="noopener noreferrer">LinkedIn</a>. In spare time I like singing, and having a coffee while enjoying riverview of New York City.
                    </p>
    
                    <h3>Skills:</h3>
                    
                    <h4>TECHNOLOGIES</h4>
                    <p>Using HTML5, CSS3, Javascript(ES6), Ajax, Sass, Git, TFS, Webpack, etc.</p>
    
                    <h4>FRAMEWORK / LIBRARY</h4>
                    <p>Bootstrap, jQuery, ReactJS, AngularJS 1.X, ASP.NET MVC, etc.</p>
    
                    <h4>TOOLS / ENVIRONMENT</h4>
                    <p>IntelliJ, Visual Studio Code, Visual Studio, SQL Server 2012, MySQL, Photoshop (mockup), Linux, etc.</p>
    
                </section>
            </div>
        );
    }
}

export default Home;