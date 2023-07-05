import React from "react";
import { Button } from 'reactstrap';
import "./post-status-filter.css";

const PostStatusFilter = () =>{
    return (
        <div className="btn-group">
        
            <Button outline color="info"  type="button" className="btn ">All</Button>
            <Button active color="danger" outline size="lg" type="button" className="btn btn-secondary">Like it</Button>
        </div>
    )
}

export default PostStatusFilter;