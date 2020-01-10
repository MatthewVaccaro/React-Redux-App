import React from "react";
import { connect } from "react-redux";
import { fetch } from "./actions/actions";

import "./App.css";

function App(props) {
  console.log(props.isLoading);
  return (
    <div className="masterContainer">
      <div className="container">
        <h1 className="header">{props.isLoading ? "Fetching" : "Doggo"}</h1>
        <button onClick={props.fetch}>New Dog Who Dis?</button>
        <img src={props.dog} alt="a Dog" />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    dog: state.dog,
    isLoading: state.isLoading
  };
}

const mapDispatchToProps = {
  fetch
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
