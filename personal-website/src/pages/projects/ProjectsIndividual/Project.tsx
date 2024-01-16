import './Project.css';
import YouTubePlayer from 'youtube-player';
import YouTube, { YouTubeProps } from 'react-youtube';

interface props {
	title: string,
	description: string,
	videoID: string,
    codeLink: string
}

export default function MyApp({title, description, videoID, codeLink} : props) {

    const youtubeLink = videoID;
    const longDescription = description;

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    const options: YouTubeProps['opts'] = {
        height: 400,
        width: 600,
        playerVars: {
            autoplay: 1,
        },
    }

    return (
        <div>
            <h1 className='project-header'>{title}</h1>
            <div className='project-video-div'>
                <YouTube videoId={youtubeLink} opts={options} onReady={onPlayerReady} style={{width: 100}}/>;
            </div>
            <div className='project-code-section'>
                <div style={{color: 'white'}}>
                    {longDescription}
                </div>
                <br />
                <br />
                <div style={{color: 'white'}}>
                    Click this button to view the project code
                </div>
                <button onClick={() => window.open(codeLink)}>View code</button>
            </div>
        </div>
    );
}