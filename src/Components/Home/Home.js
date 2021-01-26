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
            <TopMetric/>
        </div>
        );
    }
}

export default HomePage;