import React from "react";

const PostAddForm = () => {
    return(
        <form className="bottom-panel-input d-flex">
            <input
            type="text"
            placeholder="What are you thinking about now"
            className="form-control new-post-label"></input>
               <button 
               type="submit"
               className="btn btn-outline-secondary">
               Add post </button>
        </form>
     
    )
}
export default PostAddForm;