import React from 'react';

function Projects() {
    return (
        <div>
            <section className="inner-container hero">
                <h1 className="project-head">Latest Projects (New to old):</h1>
            </section>

            <section className="border project-list">
                <ul className="inner-container post-list no-bullet">
                    <li className="border-bottom">
                        <a className="transition-link" href='http://ec2-13-58-66-72.us-east-2.compute.amazonaws.com/Jupiter/'>
                            <div className="card">
                                <img src="/images/ticket.jpg" alt='Ticket Recommendation' />
                                <a href='http://ec2-13-58-66-72.us-east-2.compute.amazonaws.com/Jupiter/' className="cta-button overlay-button transition-link">See Project<span className="arrow-right">&#8594;</span></a>
                                <a className="overlay transition-link" href='http://ec2-13-58-66-72.us-east-2.compute.amazonaws.com/Jupiter/'> </a>
                            </div>
                        </a>
                        <a href='http://ec2-13-58-66-72.us-east-2.compute.amazonaws.com/Jupiter/'><p>Ticket Recommendation: a ticket system based on your location and your favorite preferences. </p></a>
                    </li>

                    <li className="border-bottom">
                        <a className="transition-link" href='/src/assets/snippets/eHealthSuite.zip'>
                            <div className="card">
                                <img src="/images/eHealthSuite.jpg" alt='eHealthSuite' />
                                <a href='/snippets/eHealthSuite.zip' className="cta-button overlay-button transition-link">See Project<span className="arrow-right">&#8594;</span></a>
                                <a className="overlay transition-link" href='/snippets/eHealthSuite.zip'> </a>
                            </div>
                        </a>
                        <a href='/snippets/eHealthSuite.zip'><p>eHealthSuite: Medicare/Medicaid App (This is an internal system, no link)</p></a>
                    </li>

                    <li className="border-bottom">
                        <a className="transition-link" href='http://www.tropicalcheese.com'>
                            <div className="card">
                                <img src='/images/tropicalcheese.jpg' alt='Tropical Cheese Industries' />
                                <a href='http://www.tropicalcheese.com' className="cta-button overlay-button transition-link">See Project<span className="arrow-right">&#8594;</span></a>
                                <a className="overlay transition-link" href='http://www.tropicalcheese.com'> </a>
                            </div>
                        </a>
                        <a href='http://www.tropicalcheese.com'><p>Tropical Cheese Industries: Customer Order Tracking System</p></a>
                    </li>

                    <li className="border-bottom">
                        <a className="transition-link" href='http://www.rfwagner.org'>
                            <div className="card">
                                <img src='/images/rfwagner.jpg' alt='Robert F. Wagner' />
                                <a href='http://www.rfwagner.org' className="cta-button overlay-button transition-link">See Project<span className="arrow-right">&#8594;</span></a>
                                <a className="overlay transition-link" href='http://www.rfwagner.org'> </a>
                            </div>
                        </a>
                        <a href='http://www.rfwagner.org'><p>Robert F. Wagner: A School Webpage for Student & School Staff. </p></a>
                    </li>
                </ul>

            </section>
        </div>       
    );
}

export default Projects;