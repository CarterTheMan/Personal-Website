import './AboutMe.css';

// https://github.com/parthwebdev/UI-Animation/blob/main/Menus/01/style.css
// https://github.com/bikashdev01/First-Section-Code/blob/main/First%20Section%20Code/First-Sec-2.html
export default function MyApp() {
    return (
        <div>
            <div className="about-container-left">
                <div className="about-img-left">
                    <img src={process.env.PUBLIC_URL + '/My-Experience.jpg'} />
                </div>
                <div  className="about-text-left">
                    <h1>MY EXPERIENCE</h1>
                    <p>
                        I’ve worked at Kingland Systems as an Advanced Software Engineering Intern 
                        and then transitioned to full time. Throughout my time there I used Extract, 
                        Transform, and Load (ETL) processes to modify data so it was more viable for 
                        client use. From this I learned a lot about Amazon Web Service (AWS) such 
                        Simple Storage Service (S3), Data Migration Service (DMS), Athena, Glue with 
                        Hudi, DataBrew, QuickSight, Lake Formation and Terraform. I also learned 
                        many professional skills that I will use for the rest of my career. 
                    </p>
                </div>
            </div>

            <div className="about-container-right">
                <div className="about-text-right">
                    <h1>MY EDUCATION</h1>
                    <p>
                        I graduated from Iowa State University with a bachelors in Computer Science 
                        and a 3.72 GPA. I’m really interested in Cyber Security and Machine Learning 
                        so I got a minor in Cyber Security and took as many machine learning related 
                        courses as I could. 
                    </p> 
                    <br />
                    <p>
                        I enjoy working on personal projects that allow me to learning more skills 
                        so I can better myself as a software engineer. Please select the projects page 
                        in the top right in order to see my project
                    </p> 
                </div>
                <div className="about-img-right">
                    <img src={process.env.PUBLIC_URL + '/My-Experience.jpg'} />
                </div>
            </div>
        </div>
    );
  }