import React ,{Component}from "react";
import { Button } from 'reactstrap';
import "./post-status-filter.css";


export default class PostStatusFilter extends  Component{
    constructor(props){
        super(props);
        this.buttons = [
            {name:'all', label: 'All'},
            {name:'like', label: 'Liked'},
        ]
    }
    render(){
        const buttons = this.buttons.map(({name,label}) => {
            return(
                <Button key ={name} outline color="info"  type="button" className="btn">{label}</Button>
            )
        });
        return (
            <div className="btn-group">
                {buttons}
                {/* <Button outline color="info"  type="button" className="btn ">All</Button>
                <Button active color="danger" outline size="lg" type="button" className="btn btn-secondary">Like it</Button>
     */}
            </div>
        )
    }
}
