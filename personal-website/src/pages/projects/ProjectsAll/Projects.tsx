import './Projects.css';
import { pythonProjects, javaProjects, CProjects } from '../ProjectsInfo/ProjectsList';
import FlipCard from '../../../components/flipcard/FlipCard';

export default function MyApp() {

    return (
        <div className='projects-page'>
            <h1>Python Projects</h1>
            <div className='projects-container'>
                {
                    pythonProjects.map(function(data) {
                        return (<FlipCard projectInformation={data} />)
                    })
                }
            </div>
            <h1>Java Projects</h1>
            <div className='projects-container'>
                {
                    javaProjects.map(function(data) {
                        return (<FlipCard projectInformation={data} />)
                    })
                }
            </div>
            <h1>C/C++ Projects</h1>
            <div className='projects-container'>
                {
                    CProjects.map(function(data) {
                        return (<FlipCard projectInformation={data} />)
                    })
                }
            </div>
        </div>
    );
}