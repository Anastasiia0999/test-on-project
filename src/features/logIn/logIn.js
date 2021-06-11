import React, {useEffect, useState} from 'react';
import { Formik, Field, Form } from 'formik';
import { authValidation } from '../../utils/helpers';
import {Link} from "react-router-dom";
import {Button,} from "@material-ui/core";
import VisibilityIcon from '@material-ui/icons/Visibility';
import {VisibilityOff} from "@material-ui/icons";
import {useActions} from "../../shared/hooks";
import {currentUserSelector, login} from "../../models";
import {shallowEqual, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
//import {Cookie} from "../../utils/helpers";
import {paths} from "../../shared/routes/paths";
import {useStylesLogin} from "./logInStyles";
import {addAlert} from "../../models/alert/redux";

export const LogIn = () => {
    const styles = useStylesLogin();

    const [visible, setVisibility] = useState(false);

    const {
 //       isLoading,
        error: requestError,
        loaded,
        currentUser,
    } = useSelector(currentUserSelector, shallowEqual);

    const [dispatchLogIn, dispatchAddAlert] = useActions([login, addAlert]);
    const history = useHistory();
   // const jwt = Cookie.get('jwt');

   /* useEffect(() => {
        if (!jwt) {

        }
    }, [history, jwt]);*/

    useEffect(() => {
        if (loaded && !requestError && currentUser) {
            history.push(paths.HOME);
        }

        if(requestError){
            dispatchAddAlert(requestError, 'error');
        }
    }, [currentUser, history, loaded, requestError, dispatchAddAlert]);

    const handleSubmit = ({email, password}) =>{
        const userObject = {
            login: email,
            password
        }
        dispatchLogIn(userObject);
    }
    return(
        <>
            <div className={styles.beigeRect}> </div>
            <div className={styles.greyRect}> </div>
            <div className={styles.formAuth}>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={authValidation}
                >
                    {({
                          errors,
                          touched,
                      }) => (
                        <Form noValidate>
                            <div className={styles.formHeader}>
                                <p className={styles.formHeaderTitle}>Вхід</p>
                                <div className={styles.formHeaderBody}>
                                    <p className={styles.formHeaderBodyInfo}><i>Досі немає аккаунта? </i></p>
                                    <Link className={styles.regLink} to={paths.REGISTRATION}>Створити</Link>
                                </div>
                            </div>
                            <div className={styles.inputContainer}>
                                <label htmlFor="email">Ел.пошта</label>
                                <Field
                                    type="email"
                                    className={errors.email ? styles.fieldError : styles.fieldForm}
                                    name="email"
                                    placeholder="Введіть ел.пошту"
                                    id="email"
                                />
                                <p className={styles.errorText}>{errors.email}</p>
                            </div>
                            <div className={styles.inputContainer}>
                                <label htmlFor="password">Пароль</label>
                                <Field
                                    type={ visible ? 'text' : 'password'}
                                    className={errors.password ? styles.fieldError : styles.fieldForm}
                                    name="password"
                                    placeholder="Введіть пароль"
                                    id="password"
                                    autoComplete="on"
                                />
                                {
                                    visible ?
                                    <VisibilityIcon onClick={() => setVisibility(prevState => !prevState)} className={styles.icon}/>
                                    : <VisibilityOff onClick={() => setVisibility(prevState => !prevState)} className={styles.icon} />
                                }
                                <p className={styles.errorText}>{errors.password}</p>
                            </div>
                            <div className="d-flex justify-content-center">
                                <Button type="submit" className={styles.submitButton}>Увійти</Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}
