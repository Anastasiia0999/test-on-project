import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
    LogIn,
    Registration,
    MainPage,
    AddTestPage,
    AddCoursePage
} from '../../features';
import { paths } from './paths';
import {ProtectedRoute} from "../../components/protectedRoute";
import {AlertBox} from "../../components/alert-box";



export const Routes = () => (
    <>
        <AlertBox />
        <Switch>
            <Route exact path={paths.HOME} component={MainPage} />
            <Route exact path={paths.AUTH} component={LogIn} />
            <Route exact path={paths.REGISTRATION} component={Registration} />
            <ProtectedRoute roles={[0]} exact path={paths.ADD_TEST} component={AddTestPage} />
            <ProtectedRoute roles={[0]} exact path={paths.ADD_COURSE} component={AddCoursePage} />
        </Switch>
    </>
);