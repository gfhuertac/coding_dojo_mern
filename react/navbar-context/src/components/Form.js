import React, { useContext } from 'react';
import NavBarContext from '../contexts/NavBarContext';

import './Form.css';

const Form = () => {

    const context = useContext(NavBarContext);

    const handleChange = (e) => {
        context.setState({
            ...context.state,
            name: e.target.value
        })
    };

    return (
        <form>
            <div className="form-row">
                <label htmlFor="name">Your name: </label>
                <input type="input" name="name" id="name" onChange={handleChange} />
            </div>
        </form>
    );
};

export default Form;