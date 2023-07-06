import React from "react";
import "./post-add-form.css";

const PostAddForm = ({onAdd}) => {
    return(
        <div className="bottom-panel bottom-panel-input d-flex">
            <input
            type="text"
            placeholder="What are you thinking about now"
            className="form-control new-post-label"></input>
               <button 
               type="submit"
               className="btn btn-outline-secondary"
               onClick={() => onAdd('Text')}>
               Add post </button>
        </div>
     
    )
}
export default PostAddForm;