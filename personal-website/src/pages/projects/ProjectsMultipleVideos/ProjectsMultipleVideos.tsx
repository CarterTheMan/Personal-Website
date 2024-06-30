import "./ProjectsMultipleVideos.css";
import YouTube, { YouTubeProps } from 'react-youtube';

interface props {
	videoID : string[],
	videoDescriptions : string[]
}

// https://www.geeksforgeeks.org/design-a-flip-card-effect-using-reactjs/
// https://blog.openreplay.com/creating-animated-flip-cards-in-react/
export default function ProjectsMultipleVideos({videoID, videoDescriptions} : props) {
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

    const videoNum = videoID.length;
    var videos = [];
    for (var i = 0; i < videoNum; i++) {
        videos.push(
            <div>
                <div style={{textAlign: 'center', color: 'white'}}>
                    <h3>
                        {videoDescriptions[i]}
                    </h3>
                </div>
                <div className='projects-multiple-videos-video-div'>
                    <YouTube videoId={videoID[i]} opts={options} onReady={onPlayerReady} style={{width: 'calc(50vw - 300px)'}}/>
                </div>
                <br />
                <br />
            </div>
        );
    }
    
	return videos;
};