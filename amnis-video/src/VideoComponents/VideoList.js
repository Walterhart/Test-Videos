// Video List component

import { Link } from "react-router-dom";

const VideoList = ({video}) => {

    return ( 
        <div className="videoList">
           <h3>video.title</h3>
           <p>{video.description}</p>
        </div>
     );
}
 
export default VideoList;