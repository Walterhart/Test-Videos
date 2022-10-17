import { useState } from "react";

const HomePage = () => {
    const [videos, setVideos] = useState([
          {title: "Smiling Friends", description: "Smiling Friends Inc. is a small company whose main purpose is to bring happiness and make people smile. The series follows the day-to-day lives and misadventures of its representatives, the lazy, cynical Charlie, and the cheerful, optimistic Pim, as they try to cheer up and comfort the troubled people who call their company's hotline. They receive seemingly simple requests but the jobs turn out to be more complicated than they seem, making it difficult to bring happiness to the world.", 
          directors:"Zach Hadel, Michael Cusack", source:"Adult Swim", id: "1"},
          {title: "Cyberpunk: Edgerunners", description: "A street kid tries to survive in a technology and body modification-obsessed city of the future; with everything to lose, he chooses to stay alive by becoming an edgerunner: a mercenary outlaw, also known as a cyberpunk.",
          directors:"Hiroyuki Imaishi", source:"Netflix", id: "2"},
          {title:"Lilo & Stitch", description: "A tale of a young girl's close encounter with the galaxy's most wanted extraterrestrial. Lilo is a lonely Hawaiian girl who adopts a small ugly 'dog,' whom she names Stitch. Stitch would be the perfect pet if he weren't in reality a genetic experiment who has escaped from an alien planet and crash-landed on Earth. Through her love, faith and unwavering belief in ohana, the Hawaiian concept of family, Lilo helps unlock Stitch's heart and gives him the ability to care for someone else.",
          directors:"Chris Sanders, Dean DeBlois", source:"Disney", id: "3"}
    ]);
    

    return (  
        <div className="HomePage">
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
 
export default HomePage;