import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

class Result extends React.Component {
  render() {
    if (this.props.error !== "") {
      return (
        <div>
          <p>
            About {this.props.result.length} results ({this.props.time} seconds)
          </p>
          <h2>{this.props.error}</h2>
        </div>
      );
    }
    if (this.props.result.length !== 0) {
      return (
        <div>
          <p>
            About {this.props.result.length} results ({this.props.time} seconds)
          </p>
          <div className="result">
            <Grid container spacing={3}>
              <Grid item xs={8}>
                <div className="title">
                  <Paper variant="outlined" className="">
                    <h4>Doc Titles</h4>
                  </Paper>
                  {this.props.result.map((n) => {
                    return (
                      <Paper key={n} variant="outlined" className="">
                        <p>{this.props.title[n]}</p>
                      </Paper>
                    );
                  })}
                </div>
              </Grid>

              <Grid item xs={4}>
                <div className="ids">
                  <Paper variant="outlined">
                    <h4>Doc IDs</h4>
                  </Paper>
                  {this.props.result.map((n) => {
                    return (
                      <Paper key={n} variant="outlined">
                        <p>{n}</p>
                      </Paper>
                    );
                  })}
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      );
    } else {
      return <div>
        <p>
          About {this.props.result.length} results ({this.props.time} seconds)
        </p>
      </div>;
    }
  }
}

export default Result;
