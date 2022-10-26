// user List components

import { Link } from "react-router-dom";

const TestPage2 = (props) => {

    //Access users in props
    const user = props.user;

    console.log("meow:" + props, user);
    return ( 
        <div className="userList">
            {/* Map and display users data */}
            {user.map((user) =>(
                <div className="userPreview" key = {user.id}>       
                    
                </div>

            ))}
        </div>
     );
}
 
export default TestPage2;