import React from "react";

class Points extends React.Component {
    constructor(props) {
        super(props);
        this.state = { points: 0 };
    }

    changePoints(change) {
        console.log(change);
        this.setState({
            points: this.state.points + change,
        });

        console.log(this.state.points);
    }

    render() {
        return (
            <div>
                <span>{this.state.points}</span>
                <button
                    style={{ display: "none" }}
                    onClick={change => {
                        this.changePoints(change);
                    }}
                />
            </div>
        );
    }
}

export default Points;
