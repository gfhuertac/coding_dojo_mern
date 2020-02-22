import React, { useState } from "react";

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>Birthday button for {props.name}</button>
    );
}

const PersonCard = (props) => {

    const [ageState, setAgeState] = useState({
        age: props.age
    });

    const handleClick = (e) => {
        e.preventDefault();
        setAgeState({
            age: ageState.age + 1
        })
    }

    return (
        <div>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <div>
                Age: { ageState.age }
            </div>
            <div>
                Hair color: { props.hairColor }
            </div>
            <Button handleClick={handleClick} name={ props.firstName + ' ' + props.lastName }/>
        </div>
    );
}

export default PersonCard;