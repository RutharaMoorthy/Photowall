import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
import { initialData } from "./Action/Action";

class App extends Component {
  render() {
    console.log(this.props);
    const { state } = this.props;

    const handleClick = () => {
      console.log("clicked");
      this.props.history.push("/form");
    };

    return (
      <div>
        <Grid container direction="column" spacing={4}>
          <Grid item xs={12}>
            <h1 style={{ textAlign: "center" }}>Photowall</h1>
          </Grid>
          <Grid item xs={12}>
            <h1 style={{ textAlign: "center" }}>
              <div onClick={handleClick}>
                <AddIcon />
              </div>
            </h1>
          </Grid>
          <div style={{ marginLeft: "150px", marginRight: "150px" }}>
            <Grid container direction="row">
              {state.posts.map((data, index) => (
                <Grid item xs={6} key={index}>
                  <div
                    style={{
                      border: "black 1px dotted",
                      width: "450px",
                      margin: "10px",
                    }}
                  >
                    <img
                      style={{ width: "450px", height: "auto" }}
                      src={data.imageLink}
                      alt="Image Not Available"
                    />
                    <h1 style={{ marginLeft: "12px" }}>{data.description}</h1>
                    <Grid container style={{ margin: "5px" }}>
                      <Grid item xs={4}></Grid>
                      <Grid item xs={4}>
                        <button>Remove</button>
                      </Grid>
                      <Grid item xs={4}></Grid>
                    </Grid>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>
      </div>
    );
  }
}

const mapstatetoprops = (state) => {
  return {
    state,
  };
};

const mapdispatchprops = (dispatch) => {
  return {
    in: () => dispatch(initialData()),
  };
};

export default connect(mapstatetoprops, mapdispatchprops)(App);
