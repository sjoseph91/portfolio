import React from 'react'
import ContactItem from '../Components/ContactItem';
import linkedin from "../img/linkedin-icon.svg"
import email from '../img/emailme.svg';
import Tittle from '../Components/Tittle';
import github from "../img/github.svg"

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'Contact Me'} span={'Contact Me'} />
            </div>
            <div className="ContactPage">
                <div className="contact-sect">
                <ContactItem icon={linkedin} text1={'https://www.linkedin.com/in/sean-c-joseph/'}  title={'Linkedin'}/>
                    <ContactItem icon={github} text1={'https://github.com/sjoseph91'}  title={'Github'}/>
                    <ContactItem icon={email} text1={'mailto:sean_joseph@protonmail.com'} text2={"sean_joseph@protonmail.com"} title={'Email'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
