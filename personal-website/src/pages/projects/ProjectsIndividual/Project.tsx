import './Project.css';
import YouTubePlayer from 'youtube-player';
import YouTube, { YouTubeProps } from 'react-youtube';

interface props {
	title: string,
	description: React.ReactNode,
	videoID: string,
    codeLink: string
}

export default function MyApp({title, description, videoID, codeLink} : props) {

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.playVideo();
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
                <YouTube videoId={videoID} opts={options} onReady={onPlayerReady} style={{width: 100}}/>;
            </div>
            {description}
            <br />
            <br />
            <div className='project-footer'>
                <div style={{color: 'white'}} >
                    Click this button to view the project code
                </div>
                <button onClick={() => window.open(codeLink)}>View code</button>
            </div>
        </div>
    );
}