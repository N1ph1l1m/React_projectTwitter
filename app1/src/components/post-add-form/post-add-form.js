import React , {Component}from "react";
import "./post-add-form.css";

export default class PostAddForm extends Component{
    constructor(props){
        super(props);
        this.onValueChange = this.onValueChange.bind(this);
    }
    onValueChange(e){
        console.log(e.target.value);
    }

    render(){
        return(
            <form className="bottom-panel bottom-panel-input d-flex">
                <input
                    type="text"
                    placeholder="What are you thinking about now"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}>
                
                </input>
                <button 
                    type="submit"
                    className="btn btn-outline-secondary"
                    Add post >
                </button>
            </form>
         
        )
    }
    
}
