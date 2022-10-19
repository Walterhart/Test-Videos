// Add video component

import { useState } from "react";

const AddVideo = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [directors, setDirector] = useState('');
    const [source, setSource] = useState('');

    return (  
        <div className="addVideo">
            <h2>Add new video</h2>
            <form>
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
                
                <button> Add video </button>
            </form>
            <p>{title} </p>
            <p>{description} </p>
            <p>{source} </p>
        </div>
    );
}
 
export default AddVideo;
