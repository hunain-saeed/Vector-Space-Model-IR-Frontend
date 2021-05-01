import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

class Result extends React.Component {
  render() {
    if (this.props.error !== "") {
      return (
        <div>
          <p>About 0 results ({this.props.time} seconds)</p>
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
            <Grid container justify="center">
              <Grid item xs={4}>
                <Paper variant="outlined">
                  <Grid container spacing={3} justify="center">
                    <Grid item xs={6}>
                      <h4>Score</h4>
                    </Grid>
                    <Grid item xs={6}>
                      <h4>Docids</h4>
                    </Grid>
                  </Grid>
                </Paper>
                {this.props.result.map((n, index) => {
                  return (
                    <div key={index}>
                      <Paper variant="outlined" className="result">
                        <Grid container spacing={3} justify="center">
                          <Grid item xs={6}>
                            <p>{this.props.score[index]}</p>
                          </Grid>
                          <Grid item xs={6}>
                            <p>{n}</p>
                          </Grid>
                        </Grid>
                      </Paper>
                    </div>
                  );
                })}
              </Grid>
            </Grid>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <p>
            About {this.props.result.length} results ({this.props.time} seconds)
          </p>
        </div>
      );
    }
  }
}

export default Result;
