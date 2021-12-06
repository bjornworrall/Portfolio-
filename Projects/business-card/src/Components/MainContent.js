import react from "react";


export default function MainContent() {
    return (
        <main>
            <div className="intro-container">
                <p className="intro-name">Bjorn Worrall</p>
                <p className="intro-title">Frontend Developer</p>
                <a href="#"><p className="intro-website">www.bjornworrall.com</p></a>  
            </div>
            <div className="social--main-container">
                <a href="#"><button><i className="fa fa-envelope-square"></i>Email</button></a>
                <a href="#"><button className="linkedin" > <i  className="fa fa-linkedin-square" aria-hidden="true"></i>
                                                                LinkedIn</button></a>
            </div>
            <div className="description-main">
                <h4 className="about-title">About</h4>
                <p  className="about-description" >I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h4 className="interests-title">Interests</h4>
                <p className="interests-description">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </main>
    )
}