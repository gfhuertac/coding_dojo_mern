import React from "react";

const PersonCard = (props) => {
    return (
        <div>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <div>
                Age: { props.age }
            </div>
            <div>
                Hair color: { props.hairColor }
            </div>
        </div>
    );
}

export default PersonCard;