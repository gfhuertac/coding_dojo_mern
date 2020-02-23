import React, { useState } from 'react';

import styles from './HookForm.module.css'

const HookForm = (props) => {

    const [state, setState] = useState({...props});

    const changeHandler = (e) => {
        e.stopPropagation();
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className={styles.content}>
            <form>
                <div className={styles.fields}><label className={styles.labels}>First name: </label><input type="input" name="firstName" onChange={changeHandler}></input></div>
                <div className={styles.error}>{state.firstName && state.firstName.length < 2 ? 'First name must be at least 2 characters' : ''}</div>
                <div className={styles.fields}><label className={styles.labels}>Last name: </label><input type="input" name="lastName" onChange={changeHandler}></input></div>
                <div className={styles.error}>{state.lastName && state.lastName.length < 2 ? 'Last name must be at least 2 characters' : ''}</div>
                <div className={styles.fields}><label className={styles.labels}>Email: </label><input type="input" name="email" onChange={changeHandler}></input></div>
                <div className={styles.error}>{state.email && state.email.length < 5 ? 'Email must be at least 5 characters' : ''}</div>
                <div className={styles.fields}><label className={styles.labels}>Password: </label><input type="password" name="password" onChange={changeHandler}></input></div>
                <div className={styles.error}>{state.password && state.password.length < 8 ? 'Password must be at least 8 characters' : ''}</div>
                <div className={styles.fields}><label className={styles.labels}>Confirm password: </label><input type="password" name="confirm" onChange={changeHandler}></input></div>
                <div className={styles.error}>{state.password && state.confirm !== state.password ? 'Password must match' : ''}</div>
            </form>
            <h3 className={styles.heading}>Your form data</h3>
            <div>
                <span className={styles.displays}>First name</span>
                <span>{state.firstName}</span>
            </div>
            <div>
                <span className={styles.displays}>Last name</span>
                <span>{state.lastName}</span>
            </div>
            <div>
                <span className={styles.displays}>Email</span>
                <span>{state.email}</span>
            </div>
            <div>
                <span className={styles.displays}>Password</span>
                <span>{state.password}</span>
            </div>
            <div>
                <span className={styles.displays}>Confirm password</span>
                <span>{state.confirm}</span>
            </div>
        </div>
    );

};

export default HookForm;