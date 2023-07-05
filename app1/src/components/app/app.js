import React from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

import "./app.css";

const App = () =>{

   const data = [
      {label:" Going to learn React",important: true,id:'a1'},  
      {label:"Going to home",important: false, id:"a2"},
      {label:"We work",important: true,id:"a3"},
      {label:"Batman - who is",important: false, id:"a4"},
      {label:"Down or up",important: true,id:"a5"}
   ];
  



    return(
       <div className="app">
            <AppHeader/>
         <div className="searc-panel d-flex">
         <SearchPanel/>
         <PostStatusFilter/>
        </div>
        <PostList posts ={data}/>
        <PostAddForm/>
       </div>
        
       

    )
}
export default App;