import React, { useState } from "react";
import { createRoot } from 'react-dom/client';
import "./FlipCard.css";
import Project from "../../pages/projects/ProjectsIndividual/Project";

interface projectInformationType {
	title : string, 
	cardDescription : string,
	description : React.ReactNode,
	videoID : string,
	imagePath : string,
	codeLink : string,
}

// https://www.geeksforgeeks.org/design-a-flip-card-effect-using-reactjs/
// https://blog.openreplay.com/creating-animated-flip-cards-in-react/
export default function FlipCard(props : {projectInformation : projectInformationType}) {
	const [isFlipped, setIsFlipped] = useState(false);
	const project = props.projectInformation;
	const description = project.cardDescription;

	const handleMouseEnter = () => {
		setIsFlipped(true);
	};

	const handleMouseLeave = () => {
		setIsFlipped(false);
	};

	const specificProject = () => {
		const root = createRoot(document.getElementById('root')!)
		root.render(
			<Project  title={project.title} description={project.description} videoID={project.videoID!} codeLink={project.codeLink!} />
		);
	}
    
	return (
		<div 
			className="flip-card-container"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={() => specificProject()}
		>	
			<div
				className={`flip-card ${
					isFlipped ? "flipped" : ""
				}`}
			>
				<div className="flip-card-inner">
					<div 
						className="flip-card-front"
						style={{backgroundImage: "url(" + process.env.PUBLIC_URL + project.imagePath + ")", backgroundSize: "cover"}}
					>
						<div className="card-content-front">
							{/* {project.title} */}
						</div>
					</div>
					<div className="flip-card-back">
						<div className="card-content-back">
							<h1>{project.title}</h1>
							<hr style={{height:2}} />
							<p>{description}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};