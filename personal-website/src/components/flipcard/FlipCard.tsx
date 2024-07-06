import React, { useState } from "react";
import { createRoot } from 'react-dom/client';
import "./FlipCard.css";
import Project from "../../pages/projects/ProjectsIndividual/Project";

interface projectInformationType {
	title : string, 
	cardDescription : string,
	description : React.ReactNode,
	videoID : string[],
	videoDescriptions : string[],
	imagePath : string,
	codeLink : string,
}

// https://www.geeksforgeeks.org/design-a-flip-card-effect-using-reactjs/
// https://blog.openreplay.com/creating-animated-flip-cards-in-react/
export default function FlipCard(props : {projectInformation : projectInformationType, projectType : string}) {
	const [isFlipped, setIsFlipped] = useState(false);
	const project = props.projectInformation;
	const projectType = props.projectType;
	const description = project.cardDescription;

	const handleMouseEnter = () => {
		setIsFlipped(true);
	};

	const handleMouseLeave = () => {
		setIsFlipped(false);
	};

	function escapeRegExp(string: string) {
		return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
	  }
	function replaceAll(str: string, match: string, replacement: string){
	 	return str.replace(new RegExp(escapeRegExp(match), 'g'), ()=>replacement);
	}

	const specificProject = () => {
		console.log(project.title.replace(" ", "-"));
		console.log(replaceAll(project.title, " ", "-"));
		const link = "/projects/" + projectType + "/" + replaceAll(project.title, " ", "-");
		window.location.href = link;
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