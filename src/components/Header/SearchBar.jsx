import "./Header.css";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Divider from "@material-ui/core/Divider";

import Logo from "./Logo";

class SearchBar extends React.Component {
  state = { query: "", variant: true, app: false };
  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.query.replace("/", "&"));
  };

  render() {
    return (
      <AppBar position="static" className="appbars" variant="outlined">
        <div className="searchbar">
          <Logo />
          <Paper
            className="paper"
            component="form"
            onSubmit={this.onFormSubmit}
            elevation={3}
          >
            <InputBase
              className="paperinput"
              onChange={this.handleChange}
              value={this.state.query}
            />

            <IconButton
              className="papersearch"
              type="submit"
              aria-label="search"
            >
              <Divider className="divider" orientation="vertical" />
              <SearchIcon className="searchButton" />
            </IconButton>
          </Paper>
        </div>
      </AppBar>
    );
  }
}

export default SearchBar;
