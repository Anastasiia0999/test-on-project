import React, {useEffect, useState} from 'react';
import { Formik, Field, Form } from 'formik';
import {Link, useHistory} from "react-router-dom";

import {Button} from "@material-ui/core";
import VisibilityIcon from '@material-ui/icons/Visibility';
import {VisibilityOff} from "@material-ui/icons";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

import {registrationValidation} from '../../utils/helpers';
import {paths} from "../../shared/routes/paths";
import {useStylesReg} from "./regStyles";
import {useActions} from "../../shared/hooks";
import {registration, registrationSelector} from "../../models";
import {shallowEqual, useSelector} from "react-redux";
import {addAlert} from "../../models/alert/redux";

export const Registration = () => {
    const styles = useStylesReg();
    const history = useHistory();

    const [visiblePass, setVisibilityPass] = useState(false);
    const [visibleConfirmPass, setVisibilityConfirmPass] = useState(false);
    const [dispatchReg, dispatchAddAlert] = useActions([registration, addAlert]);


    const {
        error,
        isLoaded,
        data,
    } = useSelector(registrationSelector, shallowEqual);

    useEffect(() => {

        if (isLoaded && !error && data) {
            dispatchAddAlert('Успішна реєстрація', 'success');
            dispatchAddAlert('Для завершення реєстрації перевірте пошту і виконайте інструкцію', 'info');
            history.push(paths.AUTH);
        }

        if(error){
            dispatchAddAlert(error, 'error');
        }
    }, [data, history, isLoaded, error, dispatchAddAlert]);

    const handleSubmit = (values) =>{
        console.log(values);
        dispatchReg(values);
    }

    return(
        <>
            <div className={styles.beigeRect}> </div>
            <div className={styles.greyRect}> </div>
            <div className={styles.formAuth}>
                <Formik
                    initialValues={{
                        login: '',
                        password: '',
                        confirmPassword:'',
                        name:'',
                        surname:'',
                        fathername:'',
                        role:0
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={registrationValidation}
                >
                    {({
                          errors,
                          touched,
                      }) => (
                        <Form noValidate>
                            <div className={styles.formHeader}>
                                <p className={styles.formHeaderTitle}>Реєстрація</p>
                                <div className={styles.formHeaderBody}>
                                    <p className={styles.formHeaderBodyInfo}><i>Вже є аккаунт? </i></p>
                                    <Link className={styles.regLink} to={paths.AUTH}>Увійти</Link>
                                </div>
                            </div>
                            <div className={styles.inputContainer}>
                                <div className={styles.errorContainer}>
                                    <label htmlFor="name">Ім'я</label>
                                    {
                                        errors.name ?
                                            <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                                                <ErrorOutlineIcon  className={styles.errorIcon} />
                                                <p className={styles.errorText}>{errors.name}</p>
                                            </div>
                                            : null
                                    }
                                </div>
                                <Field
                                    type="text"
                                    className={errors.name ? styles.fieldError : styles.fieldForm}
                                    name="name"
                                    placeholder="Введіть ім'я..."
                                    id="name"
                                />

                            </div>
                            <div className={styles.inputContainer}>
                                <div className={styles.errorContainer}>
                                    <label htmlFor="surname">Прізвище</label>
                                    {
                                        errors.surname ?
                                            <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                                                <ErrorOutlineIcon  className={styles.errorIcon} />
                                                <p className={styles.errorText}>{errors.surname}</p>
                                            </div>
                                            : null
                                    }
                                </div>
                                <Field
                                    type="text"
                                    className={errors.surname ? styles.fieldError : styles.fieldForm}
                                    name="surname"
                                    placeholder="Введіть прізвище..."
                                    id="surname"
                                />
                            </div>
                            <div className={styles.inputContainer}>
                                <div className={styles.errorContainer}>
                                    <label htmlFor="fathername">Побатькові</label>
                                    {
                                        errors.fathername?
                                            <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                                                <ErrorOutlineIcon  className={styles.errorIcon} />
                                                <p className={styles.errorText}>{errors.fathername}</p>
                                            </div>
                                            : null
                                    }
                                </div>
                                <Field
                                    type="text"
                                    className={errors.fathername ? styles.fieldError : styles.fieldForm}
                                    name="fathername"
                                    placeholder="Введіть побатькові..."
                                    id="fathername"
                                />
                            </div>
                            <div className={styles.inputContainer}>
                                <div className={styles.errorContainer}>
                                    <label htmlFor="login">Ел.пошта</label>
                                    {
                                        errors.login ?
                                            <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                                                <ErrorOutlineIcon  className={styles.errorIcon} />
                                                <p className={styles.errorText}>{errors.login}</p>
                                            </div>
                                            : null
                                    }
                                </div>
                                <Field
                                    type="email"
                                    className={errors.login ? styles.fieldError : styles.fieldForm}
                                    name="login"
                                    placeholder="Введіть ел.пошту..."
                                    id="login"
                                />
                            </div>
                            <div className={styles.inputContainer}>
                                <div className={styles.errorContainer}>
                                    <label htmlFor="password">Пароль</label>
                                    {
                                        errors.password ?
                                            <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                                                <ErrorOutlineIcon  className={styles.errorIcon} />
                                                <p className={styles.errorText}>{errors.password}</p>
                                            </div>
                                            : null
                                    }
                                </div>
                                <Field
                                    type={ visiblePass ? 'text' : 'password'}
                                    className={errors.password ? styles.fieldError : styles.fieldForm}
                                    name="password"
                                    placeholder="Введіть пароль..."
                                    id="password"
                                    autoComplete="on"
                                />
                                {
                                    visiblePass ?
                                        <VisibilityIcon onClick={() => setVisibilityPass(prevState => !prevState)} className={styles.icon}/>
                                        : <VisibilityOff onClick={() => setVisibilityPass(prevState => !prevState)} className={styles.icon} />
                                }
                            </div>
                            <div className={styles.inputContainer}>
                                <div className={styles.errorContainer}>
                                    <label htmlFor="confirmPassword">Повторіть пароль</label>
                                    {
                                        errors.confirmPassword ?
                                            <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                                                <ErrorOutlineIcon  className={styles.errorIcon} />
                                                <p className={styles.errorText}>{errors.confirmPassword}</p>
                                            </div>
                                            : null
                                    }
                                </div>
                                <Field
                                    type={ visibleConfirmPass ? 'text' : 'password'}
                                    className={errors.confirmPassword ? styles.fieldError : styles.fieldForm}
                                    name="confirmPassword"
                                    placeholder="Повторіть пароль..."
                                    id="confirmPassword"
                                />
                                {
                                    visibleConfirmPass ?
                                        <VisibilityIcon onClick={() => setVisibilityConfirmPass(prevState => !prevState)} className={styles.icon}/>
                                        : <VisibilityOff onClick={() => setVisibilityConfirmPass(prevState => !prevState)} className={styles.icon} />
                                }
                            </div>
                            <div className={styles.selectContainer}>
                                <div className={styles.errorContainer}>
                                    <label htmlFor='role'>Роль</label>
                                    {
                                        errors.role ?
                                            <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                                                <ErrorOutlineIcon  className={styles.errorIcon} />
                                                <p className={styles.errorText}>{errors.role}</p>
                                            </div>
                                            : null
                                    }
                                </div>
                                <Field
                                    as="select"
                                    className={errors.role ? styles.selectError : styles.selectInput}
                                    name="role"
                                    id='role'
                                >
                                    <option value="0" selected>Вчитель</option>
                                    <option value="1" >Студент</option>
                                    <option value="2">Користувач</option>
                                </Field>
                            </div>
                            <div>
                                <Button
                                     type="submit"
                                     className={!!(errors.password || errors.email || errors.confirmPassword) ? styles.disabledButton : styles.submitButton}
                                     disabled={!!(errors.password || errors.email || errors.confirmPassword)}
                                >
                                    Створити
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}
