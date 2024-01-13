import './Menu.css';
import { SocialIcon } from 'react-social-icons'
  
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
                        <li><a href="#" className="link">Home</a></li>
                        <li><a href="#" className="link">About Me</a></li>
                        <li><a href="#" className="link">Projects</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        <hr className="menu-hr" />
    </div>
  );
}