import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Themes } from "../constants/Themes";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import PieChart from 'react-minimal-pie-chart';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import "./UserStats.css";

const useStyles = makeStyles(theme => ({
    root: {
        "& > *": {
            height: 500,
            width: 500,
            margin: theme.spacing(1),
        },
    },
}));

const UserStats = props => {
    const classes = useStyles();
    // dummy values for stats
    // TODO: implement ways of retrieving these values
    var tasksCompleted = 5;
    var hoursWorked = 10.5;
    var dayRecord = 4;
    var highTasks = 2;
    var medTasks = 2;
    var lowTasks = 1;
    var highColor = '#2F7D32'
    var medColor = '#3bb300'
    var lowColor = '#41d900'
    if (props.modalBackground == Themes.DARK) {
        highColor = '#3700b3'
        medColor = '#6c00d3'
        lowColor = '#cf00ff'
    }
    return (
        // Setting .css properties based on theme selected

        <div className={props.modalBackground === Themes.DARK ? "modal-p" : "modal-g"}>
            <div className="title">
                <h2><b>Your Stats</b></h2>
            </div>
            <div className="stats-content">
                <div className="stats-row">
                    <div className="stats-graphic">
                        <PieChart
                            data={[
                                { title: 'High Priority', value: highTasks, color: highColor},
                                { title: 'Medium Priority', value: medTasks, color: medColor},
                                { title: 'Low Priority', value: lowTasks, color: lowColor},
                            ]}
                        />
                    </div>
                    <div className="stats-text">
                        <p><b>{tasksCompleted}</b> Tasks Completed</p>
                        <p>High Priority: <b><font color={highColor}>{highTasks}</font></b></p>
                        <p>Medium Priority: <b><font color={medColor}>{medTasks}</font></b></p>
                        <p>Low Priority: <b><font color={lowColor}>{lowTasks}</font></b></p>
                    </div>
                </div>
                <div className="stats-row">
                    <div className="stats-graphic">
                        <AccessTimeIcon></AccessTimeIcon>
                    </div>
                    <div className="stats-text">
                        <p><b>{hoursWorked}</b> Hours Worked</p>
                    </div>
                </div>
                <div className="stats-row">
                    <div className="stats-graphic">
                        <StarIcon></StarIcon>
                    </div>
                    <div className="stats-text">
                        <p>1-Day Record: <b>{dayRecord}</b></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserStats;