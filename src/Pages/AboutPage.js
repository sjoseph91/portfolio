import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import {faHtml5, faCss3, faJsSquare, faReact, faNode} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <div className="skillsContainer">
                <div className="icon-container">
                    <FontAwesomeIcon icon={faHtml5}  className="icon" />
                </div>
                <div className="icon-container">
                    <FontAwesomeIcon icon={faCss3} className="icon" />
                </div>
                <div className="icon-container">
                    <FontAwesomeIcon icon={faJsSquare} className="icon"/>
                </div>
                <div className="icon-container">
                    <FontAwesomeIcon icon={faReact} className="icon"/>
                </div>
                <div className="icon-container">
                    <FontAwesomeIcon icon={faNode} className="icon"/>
                </div>
                
            </div>

            

        </div>
    )
}

export default AboutPage;
