import React, { useState } from 'react';

import NavBarContext from '../contexts/NavBarContext';

const Wrapper = (props) => {
    const [state, setState] = useState({});

    return (
        <NavBarContext.Provider value={{state, setState}}>
        <div className="App">
            {props.children}
        </div>
        </NavBarContext.Provider>
    
    );
};

export default Wrapper;
