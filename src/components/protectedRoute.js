import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import {paths} from "../shared/routes/paths";
import {Cookie} from "../utils/helpers";
import {currentUserSelector} from "../models";


export const ProtectedRoute = ({ roles, ...otherProps }) => {
    const { currentUser } = useSelector(currentUserSelector, shallowEqual);
    //const jwt = Cookie.get('jwt');
    const user = Cookie.get('user');

    if (!user) {
        return <Redirect to={paths.AUTH} />;
    }

    if (!roles.includes(currentUser.role)) {
       // return <Redirect to={paths.NOT_FOUND} />;
        console.log('not found page')
    }
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Route {...otherProps} />;
};
