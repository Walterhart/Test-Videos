// Video List components

const VideoList = (props) => {

    //Access videos in props
    const videos = props.videos;
    const title = props.title;

    console.log(props, videos);
    return ( 
        <div className="videoList">
            <h2>{title}</h2>
            {/* Map and display videos data */}
            {videos.map((video) =>(
                <div className="VideoPreview" key = {video.id}>
                    <h2>{video.title}</h2>
                    <p>Directors: {video.directors}</p>
                </div>

            ))}
        </div>
     );
}
 
export default VideoList;