import React, { Component } from "react";

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>Birthday button for {props.name}</button>
    );
}

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {...this.props};
    }

    handleClick = () => {
        this.setState({
            age: this.state.age + 1
        })
    }

    render() {
        return (
            <div>
                <h1>{ this.state.lastName }, { this.state.firstName }</h1>
                <div>
                    Age: { this.state.age }
                </div>
                <div>
                    Hair color: { this.state.hairColor }
                </div>
                <Button handleClick={this.handleClick} name={ this.state.firstName + ' ' + this.state.lastName }/>
            </div>
        );
    }
}

export default PersonCard;