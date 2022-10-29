import useFetch from "../UseFiles/useFetch";
import VideoList from "../VideoComponents/VideoList";
import { supabase } from "../config/supabaseClient";

const HomePage = () => {
   const {data: videos, isPending, error} = useFetch("http://localhost:8000/videos");
    return (  
        <div className="HomePage">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {/* check if video has value
            then pass data into child component*/ }
            {videos && <VideoList videos = {videos} title = {"All titles"}/>}
        </div>
    );
}
 
export default HomePage;