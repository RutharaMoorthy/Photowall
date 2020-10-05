import React, { Component } from "react";
import App from "./App";
import Grid from "@material-ui/core/Grid";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { initialData } from "./Action/Action";

function Form(props) {
  console.log(props);
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => {
    const newData = values;
    props.state.posts.push(newData);
    props.history.push("/");
  };

  return (
    <div>
      <Grid container direction="column" spacing={4} alignContent="center">
        <Grid item xs={12}>
          <h1 style={{ textAlign: "center" }}>Photowall</h1>
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid item xs={12}>
            <input
              type="text"
              placeholder="imageLink"
              name="imageLink"
              ref={register}
            />
          </Grid>
          <Grid item xs={12}>
            <input
              type="text"
              placeholder="description"
              name="description"
              ref={register}
            />
          </Grid>
          <Grid item xs={12}>
            <button type="submit">Post</button>
          </Grid>
        </form>
      </Grid>
    </div>
  );
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

export default connect(mapstatetoprops, mapdispatchprops)(Form);
