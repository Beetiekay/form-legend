import "../components/Legend.css";
import {AiFillApple, AiFillContacts} from "react-icons/ai";

const Legend = () =>{
    return(
     <>
     <div className="wrapper">
        
     <div className="form">
     <label for="email">Email</label>
     <input type="email" name="email" className="email"/>
     <div className="icon"><AiFillContacts/></div> 
     </div>
     </div>
     </>
    )
};

export default Legend;