import { useState } from "react";
//run code on every render
import { useEffect } from "react";
import VideoList from "./VideoList";

const HomePage = () => {
    const [videos, setVideos] = useState(null);
    const [isPending, setIsPending] = useState(true);
    
    
    /*run everytime rerender 
    render at start 
    fetch from db.json then pass json into javascript object
    then takes datas and then change pending false
     */
    useEffect (() => {
        console.log('use effect ran')
        fetch('http://localhost:8000/videos')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setVideos(data);
                setIsPending(false);
            });
    }, []);

    return (  
        <div className="HomePage">
            {isPending && <div>Loading...</div>}
            {/* check if video has value
            then pass data into child component*/ }
            {videos && <VideoList videos = {videos} title = {"All titles"}/>}
        </div>
    );
}
 
export default HomePage;