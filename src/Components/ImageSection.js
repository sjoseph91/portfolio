import React from 'react';

function ImageSection() {
    return (
        <div className="ImageSection">
            
            <div className="about-info">
                <h4>I am a<span> Front-End Web Developer</span></h4>
                <p className="about-text">
                    I specialize in Front End technologies and am learning Back End technologies as well, with the end goal of becoming a Full-Stack Web Developer.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Location</p>
                        <p>Technologies used:</p> 
                    </div>
                    <div className="right-section">
                        <p> Sean C. Joseph</p>
                        <p> Orange County, California</p>
                        <p>  HTML5, CSS, JavaScript, ReactJS, TypeScript, Node, MongoDB, </p>
                        
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;
