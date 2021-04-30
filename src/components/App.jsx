import "./App.css";
import React from "react";
import bmr from "../api/index";
// import queryType from "../api/queryType";

import SearchBar from "./Header/SearchBar";
import Result from "./Result/Result";

class App extends React.Component {
  state = { result: [], error: "", title: {}, time: 0 };
  componentDidMount = async () => {
    const res = await bmr.get('/gettitle');
    this.setState({title: res["data"]})
  }

  onSearchSubmit = async (query) => {
    this.setState({ error: "" });
    if (query) {
      var t0 = performance.now();
      const res = await bmr.get(`/booleanquery/${query}`);
      var t1 = (performance.now() - t0) / 1000;
      this.setState({ time: t1.toFixed(3) });
      if (res.data) {
        this.setState({ result: res["data"]["result"] });
        this.setState({ error: res["data"]["error"] });
      }
    } else {
      this.setState({ result: [] });
      this.setState({ error: "" });
    }
  };

  render() {
    return (
      <div className="App">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />

        <Result
          result={this.state.result}
          error={this.state.error}
          title={this.state.title}
          time={this.state.time}
        />
      </div>
    );
  }
}

export default App;
