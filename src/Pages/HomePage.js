import React from 'react';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Sean Joseph
                </h1>
                <h2>Front-End Developer</h2>
                <p className="h-sub-text">
                    I am a front-end React developer. I specialize in creating interactive experiences and am continuously
                    striving to learn the latest technologies. Check out some of my projects!
                </p>
                <div className="icons">
                    <a href="https://github.com/sjoseph91" rel="noreferrer" target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a href="https://www.linkedin.com/in/sean-joseph-00b0a91b6/" rel="noreferrer" target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon li"/>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
