// Add video component

import { useState } from "react";
import { useHistory} from "react-router-dom";

const AddVideo = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [directors, setDirector] = useState('');
    const [source, setSource] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    // hanlde form when sumbited
    const handleSubmit = (e) => {
        e.preventDefault();
        const video = { title,description, directors, source  }

        setIsPending(true);
        fetch('http://localhost:8000/videos',{
            method: 'Post',
            headers: { "Content-Type":"application/json"},
            body: JSON.stringify(video)
        }) .then(() => {
            console.log('Video submited');
            setIsPending(false);
            history.push('/');
        })
        
    }
    return (  
        <div className="addVideo">
            <h2>Add new video</h2>
            <form onSubmit = {handleSubmit}>
                <label>Title</label>
                    <input 
                        type = "text"
                        required
                        value = { title }
                        onChange = {(e) => setTitle(e.target.value)}
                    />
                 <label> Director</label>
                    <input 
                        type = "text"
                        value = { directors }
                        required
                        onChange = {(e) => setDirector(e.target.value)}
                    />
                <label> Streaming platform</label>
                <select
                    value={ source }
                    onChange = {(e) => setSource(e.target.value)}
                >    
                    <option value = "Hulu"> Hulu </option>
                    <option value = "Nexflix"> Nexflix </option>
                    <option value = "Disney+"> Disney </option>                
                </select>
                <label> Description</label>
                <textarea
                    required
                    value = { description }
                    onChange = {(e) => setDescription(e.target.value)}
                ></textarea>
                
                {!isPending && <button> Add video </button>}
                {isPending && <button disabled> Adding video ..</button>}
            </form>
        
        </div>
    );
}
 
export default AddVideo;
