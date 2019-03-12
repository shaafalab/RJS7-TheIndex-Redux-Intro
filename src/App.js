import React, { Component } from "react";

// Data

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar addAuthorHandler={this.addAuthor} />
          </div>
          <div className="content col-10">
            <AuthorsList authors={this.props.authors} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authors: state.authors
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
