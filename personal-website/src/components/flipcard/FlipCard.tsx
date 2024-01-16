import React, { useState } from "react";
import "./FlipCard.css";

interface props {
	title: string,
	description: string,
	imagePath: string
}


// https://www.geeksforgeeks.org/design-a-flip-card-effect-using-reactjs/
// https://blog.openreplay.com/creating-animated-flip-cards-in-react/
export default function FlipCard({title, description, imagePath} : props) {
	const [isFlipped, setIsFlipped] = useState(false);

	const handleMouseEnter = () => {
		setIsFlipped(true);
	};

	const handleMouseLeave = () => {
		setIsFlipped(false);
	};
    
	return (
		<div
			className="flip-card-container"
			onMouseEnter={handleMouseEnter}
    		onMouseLeave={handleMouseLeave}
		>	
			<div
				className={`flip-card ${
					isFlipped ? "flipped" : ""
				}`}
			>
				<div className="flip-card-inner">
					<div 
						className="flip-card-front"
						style={{backgroundImage: "url(" + process.env.PUBLIC_URL + imagePath + ")", backgroundSize: "cover"}}
					>
						<div className="card-content-front">
							{title}
						</div>
					</div>
					<div className="flip-card-back">
						<div className="card-content-back">
							<h1>Description</h1>
							<hr style={{height:2}} />
							<p>{description}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};