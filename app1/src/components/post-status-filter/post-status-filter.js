import React from "react";
import { Button } from 'reactstrap';
import "./post-status-filter.css";

const PostStatusFilter = () =>{
    return (
        <div className="btn-group">
            <Button outline color='info'>All2</Button>
            <button  type="button" className="btn btn-info">All</button>
            <button type="button" className="btn btn-secondary">Like it</button>
        </div>
    )
}

export default PostStatusFilter;