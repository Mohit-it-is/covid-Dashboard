import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TopMetric from '../TopMetric/TopMetric';
import './home.css';

class HomePage extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render(){
        return (
        <div className = "home-container">
            <Grid container spacing = {3}>
                <Grid item xs = {12}>
                    <TopMetric/>
                </Grid>
            </Grid>
        </div>
        );
    }
}

export default HomePage;