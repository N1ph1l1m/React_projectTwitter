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
        { label: " Going to learn React", important: true, id: "a1" },
        { label: "Going to home", important: false, id: "a2" },
        { label: "We work", important: true, id: "a3" },
        { label: "Batman - who is", important: false, id: "a4" },
        { label: "Down or up", important: true, id: "a5" },
      ],
    };
    this.deleteItem = this.deleteItem.bind(this);
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
  render() {
    return (
      <AppBlock>
        <AppHeader />
        <div className="searc-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList posts={this.state.data} onDelete={this.deleteItem} />
        <PostAddForm />
      </AppBlock>
    );
  }
}
