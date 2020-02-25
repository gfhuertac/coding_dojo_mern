import React, { useContext, useState, useEffect } from 'react';
import ResourceContext from '../contexts/ResourceContext';

import resourceTypes from '../Resources';

const Error = ({current}) => {
    if (current)
        return <div>
            <img src="/ob1.jpg" alt="OB1" />
            <h3>These aren't the droids you're looking for</h3>
        </div>
    else
        return '';
};

const FilmCard = ({title, release_date, director, opening_crawl, url}) => {
    return <div className="card">
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Released: {release_date}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Directed by: {director}</h6>
            <p className="card-text">{opening_crawl}</p>
            <a href={url} className="card-link">More info</a>
        </div>
    </div>
};

const PeopleCard = ({name, birth_year, height, mass, url}) => {
    return <div className="card">
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Birth year: {birth_year}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Height: {height}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Mass: {mass}</h6>
            <a href={url} className="card-link">More info</a>
        </div>
    </div>
};

const PlanetCard = ({name, population, climate, diameter, url}) => {
    return <div className="card">
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Population: {population}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Climate: {climate}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Diameter: {diameter}</h6>
            <a href={url} className="card-link">More info</a>
        </div>
    </div>
};

const SpecieCard = ({name, classification, average_height, average_lifespan, url}) => {
    return <div className="card">
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Classification: {classification}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Average height: {average_height}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Average lifespan: {average_lifespan}</h6>
            <a href={url} className="card-link">More info</a>
        </div>
    </div>
};

const StarshipCard = ({name, model, hyperdrive_rating, manufacturer, url}) => {
    return <div className="card">
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Model: {model}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Hyperdrive rating: {hyperdrive_rating}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Manufacturer: {manufacturer}</h6>
            <a href={url} className="card-link">More info</a>
        </div>
    </div>
};

const VehicleCard = ({name, model, vehicle_class, manufacturer, url}) => {
    return <div className="card">
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Model: {model}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Vehicle class: {vehicle_class}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Manufacturer: {manufacturer}</h6>
            <a href={url} className="card-link">More info</a>
        </div>
    </div>
};

const Resource = ({type, current}) => {
    if (current === undefined) return '';
    if (type === 'films')
        return FilmCard(current);
    else if (type === 'people')
        return PeopleCard(current);
    else if (type === 'planets')
        return PlanetCard(current);
    else if (type === 'species')
        return SpecieCard(current);
    else if (type === 'starships')
        return StarshipCard(current);
    else if (type === 'vehicles')
        return VehicleCard(current);
    else
        return '';
};

const SearchResult = () => {

    const [localState, setLocalState] = useState({});
    const context = useContext(ResourceContext);
    const { state } = context;

    useEffect(() => {
        if (resourceTypes[state.resourceType] === undefined) return;
        const url = `${resourceTypes[state.resourceType]}${state.resourceId}`;
        fetch(url).then(
            (response) => {
                if (response.status === 200)
                    return response.json();
                else
                    throw new Error("Invalid request");
            }
        ).then(
            (result) => 
                setLocalState({ error: false, resource: result })
        ).catch(
            (err) => {
                setLocalState({ error: true });
            }
        );
    }, [state]);

    return (
        <>
            <Error current={localState.error} />
            <Resource type={state.resourceType} current={localState.resource} />
        </>
    );
};

export default SearchResult;