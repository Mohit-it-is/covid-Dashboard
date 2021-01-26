import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import NumberFormat from 'react-number-format';
import { getAllStats } from '../../Services/Service';
import "./TopMetric.css";

const useStyles = (theme) => ({
  paper: {
    // textAlign: "center"
  },
});

class TopMetric extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCases: '-',
      recoverdCases: '-',
      activeCases: '-',
      totalDeaths: '-',
    };
  }

  componentDidMount() {
    this.getTopMetricData();
  }

  getTopMetricData() {
    getAllStats((res) => {
      this.onRecieveData(res.data);
    });
  }

  onRecieveData(res) {
    this.setState({
      totalCases: res.cases,
      recoverdCases: res.recovered,
      activeCases: res.active,
      totalDeaths: res.deaths
    })
  }

  renderWidget() {
    const { classes } = this.props;
    const { totalCases, recoverdCases, activeCases, totalDeaths } = this.state;

    return (
      <div className="topMetric-container">
        <Grid container spacing={5}>
          <Grid item lg={3} sm = {6} xs={12}>
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
                <Typography variant="h4"> <NumberFormat value={totalCases} displayType={'text'} thousandSeparator={true} /> </Typography>
              </div>
              <div className="card-footer">
                <p> Today Cases </p>
              </div>
            </Paper>
          </Grid>
          <Grid item lg={3} sm = {6} xs={12}>
            <Paper className={classes.paper} elevation={3}>
              <div className="card-header">
                <p>
                  <span className="header-span" style={{ background: "linear-gradient(60deg, #66bb6a, #43a047)" }}> Recovered </span>
                </p>
              </div>
              <div className="card-body">
                <Typography variant="h4"> <NumberFormat value={recoverdCases} displayType={'text'} thousandSeparator={true} /> </Typography>
              </div>
              <div className="card-footer">
                <p> Today Cases </p>
              </div>
            </Paper>
          </Grid>
          <Grid item lg={3} sm = {6} xs={12}>
            <Paper className={classes.paper} elevation={3}>
              <div className="card-header">
                <p>
                  <span className="header-span" style = {{ background: "linear-gradient(60deg, #26c6da, #00acc1)"}}> Active Cases </span>
                </p>
              </div>
              <div className="card-body">
                <Typography variant="h4"> <NumberFormat value={activeCases} displayType={'text'} thousandSeparator={true} /> </Typography>
              </div>
              <div className="card-footer">
                <p> Today Cases </p>
              </div>
            </Paper>
          </Grid>
          <Grid item lg={3} sm = {6} xs={12}>
            <Paper className={classes.paper} elevation={3}>
              <div className="card-header">
                <p>
                  <span className="header-span" style = {{ background: "linear-gradient(60deg, #999, #998)"}}> Total Deaths </span>
                </p>
              </div>
              <div className="card-body">
                <Typography variant="h4"> <NumberFormat value={ totalDeaths } displayType={'text'} thousandSeparator={true} /> </Typography>
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
