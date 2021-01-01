import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "./TopMetric.css";

const useStyles = (theme) => ({
  paper: {
    // textAlign: "center"
  },
});

class TopMetric extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderWidget() {
    const { classes } = this.props;

    return (
      <div className="topMetric-container">
        <Grid container spacing={5}>
          <Grid item xs={3}>
            <Paper className={classes.paper} elevation={3}>
              <div className="card-header">
                <p>
                  <span
                    className="header-span"
                    style={{ background: "linear-gradient(60deg, #ef5350, #e53935)" }}
                  >
                    Total Cases
                  </span>
                </p>
              </div>
              <div className="card-body">
                <Typography variant="h4"> 100,000,00 </Typography>
              </div>
              <div className="card-footer">
                <p> Today Cases </p>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper} elevation={3}>
              <div className="card-header">
                <p>
                  <span className="header-span" style={{ background: "linear-gradient(60deg, #66bb6a, #43a047)" }}> Recovered </span>
                </p>
              </div>
              <div className="card-body">
                <Typography variant="h4"> 100,000,00 </Typography>
              </div>
              <div className="card-footer">
                <p> Today Cases </p>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper} elevation={3}>
              <div className="card-header">
                <p>
                  <span className="header-span" style = {{ background: "linear-gradient(60deg, #26c6da, #00acc1)"}}> Active Cases </span>
                </p>
              </div>
              <div className="card-body">
                <Typography variant="h4"> 100,000,00 </Typography>
              </div>
              <div className="card-footer">
                <p> Today Cases </p>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper} elevation={3}>
              <div className="card-header">
                <p>
                  <span className="header-span" style = {{ background: "linear-gradient(60deg, #999, #998)"}}> Total Deaths </span>
                </p>
              </div>
              <div className="card-body">
                <Typography variant="h4"> 100,000,00 </Typography>
              </div>
              <div className="card-footer">
                <p> Today Cases </p>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }

  render() {
    return <>{this.renderWidget()}</>;
  }
}
export default withStyles(useStyles)(TopMetric);
