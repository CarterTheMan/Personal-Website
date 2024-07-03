import './Home.css';
  
// https://github.com/parthwebdev/UI-Animation/blob/main/Menus/01/style.css
// https://github.com/bikashdev01/First-Section-Code/blob/main/First%20Section%20Code/First-Sec-2.html
export default function MyApp() {
  return (
    <div className="home-container">
        <div className="home-image">
            <img className="home-img-circle" src={process.env.PUBLIC_URL + '/Home-Photo.jpg'} />
        </div>
        <div className="text">
            <h3 className="home-h3">Hi. I'm</h3>
            <h1 className="home-h1"><span style={{color : '#5AA3FB'}}>Carter</span> Moseley</h1>
            <br />
            <p className="home-p">A Software Engineer with experience in AWS, Web Development, Machine Learning and Cyber Security</p>
            <br />
        </div>
    </div>
  );
}