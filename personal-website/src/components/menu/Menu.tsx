import './Menu.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { SocialIcon } from 'react-social-icons'
import Home from './../../pages/home/Home';
import AboutMe from './../../pages/aboutme/AboutMe';
import Projects from './../../pages/projects/Projects';

const homePage = function () {
    const root = createRoot(document.getElementById('root')!)
    root.render(
        <Home />
    );
}

const aboutMePage = function () {
    const root = createRoot(document.getElementById('root')!)
    root.render(
        <AboutMe />
    );
}

const projectsPage = function () {
    const root = createRoot(document.getElementById('root')!)
    root.render(
        <Projects />
    );
}
  
// https://github.com/parthwebdev/UI-Animation/blob/main/Menus/01/style.css
export default function MyApp() {
  return (
    <div>
        <div>
            <div className="divClassLeft">
                <img className="menu-img" src={process.env.PUBLIC_URL + '/Personal-Logo.jpg'} />
                <p style={{paddingLeft: 10}}></p>
                <SocialIcon className="menu-socials" network="github" url="https://github.com/CarterTheMan" bgColor="#5AA3FB" fgColor="white" />
                <p style={{paddingLeft: 10}}></p>
                <SocialIcon className="menu-socials" network="linkedin" url="https://www.linkedin.com/in/carter-moseley/" bgColor="#5AA3FB" fgColor="white" />
                <p style={{paddingLeft: 10}}></p>
                <SocialIcon className="menu-socials" network="facebook" url="https://www.facebook.com/carter.moseley.7/" bgColor="#5AA3FB" fgColor="white" />
            </div>
            <div className="divClassRight">
                <nav>
                    <ul>
                        <li><a href="#" onClick={homePage} className="link">Home</a></li>
                        <li><a href="#" onClick={aboutMePage} className="link">About Me</a></li>
                        <li><a href="#" onClick={projectsPage} className="link">Projects</a></li>
                    </ul>
                </nav>
                <p style={{paddingRight: 10}}></p>
            </div>
        </div>
        <hr className="menu-hr" />
    </div>
  );
}