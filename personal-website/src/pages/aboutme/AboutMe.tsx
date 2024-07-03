import './AboutMe.css';

// https://github.com/parthwebdev/UI-Animation/blob/main/Menus/01/style.css
// https://github.com/bikashdev01/First-Section-Code/blob/main/First%20Section%20Code/First-Sec-2.html
export default function MyApp() {
    return (
        <div>
            <div className="about-container-left">
                <div className="about-img-left">
                    <img src={process.env.PUBLIC_URL + '/projectimages/personal/Graduation-Red.jpg'} />
                </div>
                <div  className="about-text-left">
                    <h1>MY EDUCATION</h1>
                    <p>
                        I graduated from Iowa State University with a Bachelor's degree in Computer 
                        Science and a minor in Cyber Security. I graduated Magna Cum Laude with
                        a 3.72 GPA.
                    </p>     
                    <p>
                        Thoughout college, I always found Cyber Security and Machine Learning facinating 
                        so I took as many classes relating to those topics as I could.
                        However, I still wanted to get a well-rounded education for software development 
                        so I took classes about front-end design, database management, object-oriented design, 
                        and algorithm analysis. These have allowed me understand the roles necessary to be a 
                        full-stack engineer as I understand frontend, backend, and writing clean and efficient code. 
                    </p> 
                    <p>
                        Though I have graduated, I still strive to better my coding skills and I find the best
                        way to do that is through small personal projects. For these projects, I choose 
                        an area of coding I don't have much knowledge in, such as SpringBoot routing or web 
                        scraping, and plan a project that would require this area of expertise. Then I 
                        start and learn the skills as they become necessary, often learning much more than
                        originally expected. To see these project, please select the "Projects" tab in the top 
                        right corner. 
                    </p> 
                </div>
            </div>

            <div className="about-container-right">
                <div className="about-text-right">
                    <h1>MY EXPERIENCE</h1>
                    <p>
                        Starting my senior summer of collete, I worked at Kingland Systems as an Advanced
                        Software Engineering Intern. After a year of my internship and getting my Bachelors
                        in Computer Science, I transitioned into a full time position as a Software Engineer. 
                    </p>
                    <p>
                        For my first two years, Extract, Transform, and Load (ETL) processes to modify data 
                        so it was more viable for client use. From this, I learned a lot about Amazon Web 
                        Service (AWS) such as:
                    </p>
                    <ul>
                        <li>Simple Storage Service (S3)</li>
                        <li>Data Migration Service (DMS)</li>
                        <li>Athena</li>
                        <li>Glue with Hudi</li>
                        <li>DataBrew</li>
                        <li>QuickSight</li>
                        <li>Lake Formation</li>
                        <li>Terraform</li>
                    </ul>
                    <p>
                        After that I moved to a new team where I work as a Software Engineer and a Site 
                        Reliability Engineer. With this position, I help ensure our products are fully 
                        operational for our clients needs and assist with triaging and resolving issues 
                        when they arrive on top of any new development work. 
                    </p>
                </div>
                <div className="about-img-right">
                    <img src={process.env.PUBLIC_URL + '/projectimages/personal/Graduation-Butterfly.jpg'} />
                </div>
            </div>
        </div>
    );
  }