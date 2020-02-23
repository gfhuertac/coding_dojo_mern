import React, { useState } from 'react';

import StyledBox from './StyledBox';

const boxes = [];

const BoxGenerator = (props) => {
    const [ color, setColor ] = useState('');

    const handleChange = (e) => {
        setColor(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        boxes.push( color );
        setColor('');
    };

    return (
        <div className="content centered">
            <form className="form-inline centered">
                <label className="sr-only" for="color">Color</label>
                <input type="text" className="form-control mb-2 mr-sm-2" name="color" id="color" placeholder="Color"
                    value={color} onChange={handleChange} />
                <button type="submit" class="btn btn-primary mb-2" onClick={handleSubmit}>Add</button>
            </form>
            <p>
            { boxes.map(
                (item, i)=> <StyledBox key={i} bgColor={item} />
            ) }
            </p>
        </div>
    );
};

export default BoxGenerator;