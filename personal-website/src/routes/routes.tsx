import { createBrowserRouter, Route, RouteObject, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import AboutMe from "../pages/aboutme/AboutMe";
import Resume from "../pages/Resume/Resume";
import Projects from "../pages/projects/ProjectsAll/Projects";
import { pythonProjects as pp, javaProjects as jp, CProjects as c } from "../pages/projects/ProjectsInfo/ProjectsList";
import Project from "../pages/projects/ProjectsIndividual/Project";

// var pythonRoutes: RouteObject[];
// pythonProjects.map(function(data) {
//     pythonRoutes.push({
//         path: "/projects/python/{data.title}",
//         element: <Project title={data.title} description={data.description} videoID={data.videoID!} videoDescriptions={data.videoDescriptions} codeLink={data.codeLink!} />
// }));

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: []
    }, 
    {
        path: "/aboutme",
        element: <AboutMe />,
        children: []
    }, 
    {
        path: "/projects",
        element: <Projects />,
        children: []
    },
    {
        path: "/resume",
        element: <Resume />,
        children: []
    },
    // Python Projects
    {
        path: "/projects/python/Genetic-Algorithm-(Words)",
        element: <Project projectType="python" title={pp[0].title} description={pp[0].description} videoID={pp[0].videoID!} videoDescriptions={pp[0].videoDescriptions} codeLink={pp[0].codeLink!} />
    },
    // Java Projects
    {
        path: "/projects/java/Genetic-Algorithm-(Words)",
        element: <Project projectType="java" title={jp[0].title} description={jp[0].description} videoID={jp[0].videoID!} videoDescriptions={jp[0].videoDescriptions} codeLink={jp[0].codeLink!} />
    },
    {
        path: "/projects/java/Genetic-Algorithm-(Rockets)",
        element: <Project projectType="java" title={jp[1].title} description={jp[1].description} videoID={jp[1].videoID!} videoDescriptions={jp[1].videoDescriptions} codeLink={jp[1].codeLink!} />
    },
    {
        path: "/projects/java/Gravity",
        element: <Project projectType="java" title={jp[2].title} description={jp[2].description} videoID={jp[2].videoID!} videoDescriptions={jp[2].videoDescriptions} codeLink={jp[2].codeLink!} />
    },
    {
        path: "/projects/java/Maze-with-Search-Algorithms",
        element: <Project projectType="java" title={jp[3].title} description={jp[3].description} videoID={jp[3].videoID!} videoDescriptions={jp[3].videoDescriptions} codeLink={jp[3].codeLink!} />
    },
    // C/C++ Projects
    {
        path: "/projects/c/Candy-Shop",
        element: <Project projectType="c" title={c[0].title} description={c[0].description} videoID={c[0].videoID!} videoDescriptions={c[0].videoDescriptions} codeLink={c[0].codeLink!} />
    }
])