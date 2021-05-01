import "./Header.css";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";

import Logo from "./Logo";

class SearchBar extends React.Component {
  state = { query: "", alpha: "" };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.query, this.state.alpha);
  };

  render() {
    return (
      <AppBar position="static" className="appbars" variant="outlined">
        <div className="searchbar">
          <Grid container spacing={3}>
            <Grid item sm={2}>
              <Logo />
            </Grid>
            <Grid item sm={6}>
              <Paper
                className="paper"
                component="form"
                onSubmit={this.onFormSubmit}
                elevation={3}
              >
                <InputBase
                  name="query"
                  className="inputbase1"
                  onChange={this.handleChange}
                  value={this.state.query}
                  placeholder="Enter your query here"
                />

              </Paper>
            </Grid>
            <Grid item sm={3}>
              <Paper
                className="paper"
                component="form"
                onSubmit={this.onFormSubmit}
                elevation={3}
              >
                <InputBase
                  name="alpha"
                  className="inputbase1"
                  onChange={this.handleChange}
                  value={this.state.alpha}
                  placeholder="Enter cutoff value"
                />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </AppBar>
    );
  }
}

export default SearchBar;
