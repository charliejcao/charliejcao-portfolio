import React from 'react';

function Resume() {
    return (
        <div>
            <section className="inner-container hero">
                <h1 className="resume-head">Updated Resume</h1>
            </section>

            <section className="border">
                <div className="inner-container">
                    <object width="750" height="700" data="https://docs.google.com/gview?embedded=true&amp;url=http://charliejcao.com/resume/jiran-cao-resume.pdf" aria-label="resume_object" />
                </div>
            </section><br />
        </div>       
    );
}

export default Resume;