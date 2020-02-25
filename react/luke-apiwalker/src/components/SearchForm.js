import React, { useContext } from 'react';
import ResourceContext from '../contexts/ResourceContext';

import resourceTypes from '../Resources';

const SearchForm = () => {

    const context = useContext(ResourceContext);
    const { state, setState } = context;

    let localState = {...state};
    localState.resourceId = state.resourceId || 0;
    localState.resourceType = state.resourceType || Object.keys(resourceTypes)[0];

    const handleOnChange = (e) => {
        localState[e.target.name] = e.target.value;
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setState({...localState});
    };

    return (
        <form className="form-inline">
            <div className="form-row">
                <div className="form-group mb-2 mr-sm-2">
                <label htmlFor="resourceType">Search for: 
                <select name="resourceType" id="resourceType" className="form-control w-auto"
                    defaultValue={state.resourceType} onChange={handleOnChange}>
                    { Object.keys(resourceTypes).map(
                        (elmt)=> <option key={elmt} value={elmt}>{elmt.charAt(0).toUpperCase() + elmt.slice(1).toLowerCase()}</option>
                    )}
                </select>
                </label>
                </div>
                <div className="form-group mb-2 mr-sm-2">
                <label htmlFor="resourceId">Id:
                <input name="resourceId" id="resourceId" className="form-control"
                    defaultValue={state.resourceId} onChange={handleOnChange} />
                </label>
                </div>
                <button type="button" className="btn btn-primary mb-2 mr-sm-2" onClick={handleOnSubmit}>Search</button>
            </div>
        </form>
    );
}

export default SearchForm;