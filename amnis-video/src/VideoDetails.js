//Componet for video details
//useParams allowed passing route parameters
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const VideoDetails = () => {
    const { id }  = useParams()  
    const { data: video, isPending, error } = useFetch('http://localhost:8000/videos/'+ id);

     return ( 
        <div className="videoDetails">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error } </div>}
            {video &&(<article>
                <h2> {video.title}</h2>
                <h3>Directed by: </h3>
                <p> { video.directors }</p>
                <h3>Description: </h3>
                <p> { video.description }</p>
                <h3>Avaible platforms:</h3>
                <p> {video.source}</p>
            </article>)}
        </div>
     );
}
 
export default VideoDetails;