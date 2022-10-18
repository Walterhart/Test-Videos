import { useState } from "react";
//run code on every render
import { useEffect } from "react";
import VideoList from "./VideoList";

const HomePage = () => {
    const [videos, setVideos] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    
    /*run everytime rerender 
    render at start 
    fetch from db.json then pass json into javascript object
    then takes datas and then change pending false
    includes error handling for conection problems
     */
    useEffect (() => {
        setTimeout(() => {
            console.log('use effect ran')
            fetch('http://localhost:8000/videos')
                .then(res => {
                    if(!res.ok){
                      throw Error('Issue fetching data')
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    setVideos(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err =>{
                    setError(err.message);
                    console.log(err.message);
                    setIsPending(false);
                })
           }, 0);
        }, []);

    return (  
        <div className="HomePage">
            {error && <div>{ error}</div>}
            {isPending && <div>Loading...</div>}
            {/* check if video has value
            then pass data into child component*/ }
            {videos && <VideoList videos = {videos} title = {"All titles"}/>}
        </div>
    );
}
 
export default HomePage;