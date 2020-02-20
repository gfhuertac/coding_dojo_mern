import React, { Component } from "react";

class PersonCard extends Component {
    render() {
        let {firstName, lastName, age, hairColor} = this.props;
        return (
            <div>
                <h1>{ lastName }, { firstName }</h1>
                <div>
                    Age: { age }
                </div>
                <div>
                    Hair color: { hairColor }
                </div>
            </div>
        );
    }
}

export default PersonCard;