import './Project.css';
import React, { useEffect, useState } from "react";
import { createRoot } from 'react-dom/client';
import YouTubePlayer from 'youtube-player';
import YouTube, { YouTubeProps } from 'react-youtube';
import ProjectsMultipleVideos from '../ProjectsMultipleVideos/ProjectsMultipleVideos';

interface props {
	title: string,
	description: React.ReactNode,
	videoID: string[],
    videoDescriptions: string[],
    codeLink: string
}

export default function MyApp(this: any, {title, description, videoID, videoDescriptions, codeLink} : props) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.playVideo();
    }

    const oneVideo = videoID.length == 1;
    const multiVideos = videoID.length > 1;

    const options: YouTubeProps['opts'] = {
        height: 400,
        width: 600,
        playerVars: {
            autoplay: 1,
        },
    }

    const multipleVideosPage = () => {
		const root = createRoot(document.getElementById('root')!)
		root.render(
			<ProjectsMultipleVideos videoID={videoID} videoDescriptions={videoDescriptions}/>
		);
	}

    return (
        <div>
            <h1 className='project-header'>{title}</h1>
            {oneVideo &&  
                <div className='project-video-div'>
                    <YouTube videoId={videoID[0]} opts={options} onReady={onPlayerReady} style={{width: 100}}/>;
                </div>
            }
            {multiVideos && 
                <div style={{color: 'white', textAlign: 'center'}}>
                    <button onClick={() => multipleVideosPage()}>Click here to view all related videos</button>
                </div>
            }
            
            <h3 style={{color: 'white', textAlign: 'center'}}>Explanation</h3>
            {description}
            <br />
            <br />
            <div className='project-footer'>
                <h3 style={{color: 'white'}} >
                    Click this button to view the project code
                </h3>
                <button onClick={() => window.open(codeLink)} style={{marginBottom: 20}}>View code</button>
            </div>
        </div>
    );
}