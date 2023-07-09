import React, { Component } from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

import "./app.css";

import styled from "styled-components";

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: " Going to learn React", important: true, id: "1" },
        { label: "Going to home", important: false, id: "2" },
        { label: "We work", important: true, id: "3" },
        { label: "Batman - who is", important: false, id: "4" },
        { label: "Down or up", important: true, id: "5" },
      ],
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
    this.maxId = 6;
  }
  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
      return {
        data: newArr,
      };
    });
  }
  addItem(body){
      const newItem = {
         label:body,
         important:false,
         id:this.maxId++
      }
      this.setState(({data}) =>{
         const newArr=[...data,newItem];
         return{
            data: newArr
         }
      })
  }

  onToggleImportant(id){
    console.log(`Impot = ${id}`);
  }
  onToggleLiked(id){
    console.log(`Impot = ${id}`);
  }

  render() {
    return (
      <AppBlock>
        <AppHeader />
        <div className="searc-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList 
          posts = {this.state.data}
          onDelete = {this.deleteItem} 
          onToggleImportant= {this.onToggleImportant}
          onToggleLiked = {this.onToggleLiked}
        />
        <PostAddForm 
         onAdd={this.addItem}
        />
      </AppBlock>
    );
  }
}
