import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import AboutMe from "../pages/aboutme/AboutMe";
import Resume from "../pages/resume/Resume";
import Projects from "../pages/projects/ProjectsAll/Projects";



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
    }
])