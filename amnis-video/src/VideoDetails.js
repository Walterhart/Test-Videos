//Componet for video details
//useParams allowed passing route parameters
import { useParams } from 'react-router-dom';

const VideoDetails = () => {
    const { id }  = useParams()  
     return ( 
        <div className="videoDetails">
        <h2>Video Detail - { id }</h2>
        </div>
     );
}
 
export default VideoDetails;