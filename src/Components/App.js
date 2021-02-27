import Container from "./Container";
import React, { Component } from "react";
import GlobalStyles from "Components/GlobalStyles"

export default class extends React.Component{
  state={
    loading: true
  }
  componentDidMount(){
    const {loading} = this.state;
    setTimeout(() => {this.setState({loading: false})}, 2500);
  }
  render(){
    const {loading} = this.state;
    return (
      <>
        <Container loading={loading}/>
        <GlobalStyles />
      </>);
  }
}

