import React , {Component}from "react";
import "./post-add-form.css";

export default class PostAddForm extends Component{
    constructor(props){
        super(props);
        this.state ={
            text : ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onValueChange(e){
        this.setState({
            text: e.target.value
        })
    }
    onSubmit(e){
            e.preventDefault();
            if(this.state.text.trim() !== ''){
                this.props.onAdd(this.state.text)
                this.setState({
                    text: ''
                });
            }
       
    }
 
    render(){
        return(
            <form 
            className="bottom-panel bottom-panel-input d-flex"
            onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="What are you thinking about now"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                    />
                <button 
                    type="submit"
                    className="btn btn-outline-secondary"
                    Add post >
                    Post
                </button>
            </form>
         
        )
    }
    
}
