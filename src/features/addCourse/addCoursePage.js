import React, {useEffect, useState} from 'react';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import {addCourseValidation} from "../../utils/helpers";
import {Field, Form, Formik} from "formik";
import {useHistory} from "react-router-dom";
import {useStylesAddCourse} from "./addCourseStyles";
import {paths} from "../../shared/routes/paths";
import {useActions} from "../../shared/hooks";
import {createCourse, createdCourseSelector} from "../../models";
import {addAlert} from "../../models/alert/redux";
import {useSelector} from "react-redux";
import {CircularProgress} from "@material-ui/core";

export const AddCoursePage = ({handleSubmitAddQuestion}) => {
    const styles = useStylesAddCourse();
    const history = useHistory();

    const [dispatchCreateCourse, dispatchAddAlert] = useActions([createCourse, addAlert]);

    const [emailList, setEmailList] = useState([]);

    const {
        isLoading,
        loaded
    } = useSelector(createdCourseSelector);

    useEffect(() => {
        if(loaded){
            dispatchAddAlert('Курс було успішно створено', 'success');
            history.push(paths.COURSES_LIST);
        }
    }, [loaded]);

    const handleSubmit = ({name, description}) =>{
        const applicants = [...emailList].map(em => {
            return {
                login:em
            }});

        const courseObject ={
            name,
            description,
            applicants
        }
        dispatchCreateCourse(courseObject);
    }

    const handleCancel = () =>{
        history.push(paths.HOME);
    }

    const handleAddEmail = () =>{
        let inputContent = document.querySelector("#email").value;
        const editedArr = [...emailList];
        const checkValue = editedArr.includes(inputContent)
        if(!checkValue && inputContent && inputContent !==''){
            editedArr.push(inputContent);
            setEmailList(editedArr);
            document.querySelector("#email").value = null;
        }
    }

    const handleAddEmailKey = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            handleAddEmail();
        }
    }

    const handleRemoveEmail = (id) =>{
        const editedArr = [...emailList];
        const result = editedArr.filter((el, index)=> index !== id);
        setEmailList(result);
    }

    return(
        <div className={styles.testPage}>
            <>
                {
                    isLoading ?  <CircularProgress style={{color:"#FFD7B5", margin:"0 auto", marginTop:"20px", marginBottom:"20px", width:"50px", height:"50px"}} /> : null
                }
                <Formik
                    initialValues={{
                        email: '',
                        name: '',
                        description: '',
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={addCourseValidation}
                >
                    {({
                          errors,
                          touched,
                      }) => (
                        <Form className={styles.form} noValidate>
                            <div className={styles.stepsContainer}>
                                <h2 className={styles.containerTitle}>Додати курс</h2>
                                <h3 className={styles.stepTitle}>Назва курсу</h3>
                                <Field
                                    className={errors.topic ? styles.fieldError : styles.textInput}
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Введіть назву курсу..."
                                />
                                {
                                    errors.name ?
                                        <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                                            <ErrorOutlineIcon  className={styles.errorIcon} />
                                            <p className={styles.errorText}>{errors.name}</p>
                                        </div>
                                        : null
                                }

                                <div className={styles.stepTitleContainer}>
                                    <h3 className={styles.stepTitle}>Деталі курсу</h3>
                                </div>
                                <div style={{width:"80%", display:"flex", flexDirection:"row", justifyContent:"space-between",alignItems:"center"}}>
                                    <Field
                                        className={errors.answer ? styles.textAreaError : styles.textArea}
                                        type="textarea"
                                        name="description"
                                        id="description"
                                        placeholder="Введіть деталі курсу..."
                                        as="textarea"
                                        rows="5" cols="45"
                                        style={{width:"90%"}}
                                    />
                                </div>
                                {
                                    errors.description ?
                                        <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                                            <ErrorOutlineIcon  className={styles.errorIcon} />
                                            <p className={styles.errorText}>{errors.description}</p>
                                        </div>
                                        : null
                                }

                                <div className={styles.stepTitleContainer}>
                                    <h3 className={styles.stepTitle}>Підписники курсу</h3>
                                </div>
                                <div style={{width:"53%", display:"flex", flexDirection:"row", justifyContent:"space-between",alignItems:"center"}}>
                                    <Field
                                        id="email"
                                        name="email"
                                        type="email"
                                        className={errors.email ? styles.fieldError : styles.textInput}
                                        style={{width:"85%"}}
                                        placeholder="Введіть ел.пошту"
                                        onKeyUp={(e)=>{handleAddEmailKey(e)}}
                                    />
                                    <AddCircleOutlineOutlinedIcon
                                        id="add-button"
                                        className={styles.icon}
                                        onClick={(e) => {handleAddEmail(e)}}
                                    />
                                </div>
                                {
                                    errors.email ?
                                        <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                                            <ErrorOutlineIcon  className={styles.errorIcon} />
                                            <p className={styles.errorText}>{errors.email}</p>
                                        </div>
                                        : null
                                }
                                {
                                    emailList && emailList.map((email, index) => (
                                        <div
                                            key={index}
                                            className={styles.questCard}
                                            style={{width:"70%", height:"40px", margin:"5px 10px"}}
                                        >
                                            <div
                                                className={styles.questHeader}
                                            >
                                                <p className={styles.questionTitle}>{email}</p>
                                                <div>
                                                    <HighlightOffOutlinedIcon className={styles.answerIcon} onClick={() => {handleRemoveEmail(index)}}/>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                <div className={styles.buttonContainer}>
                                    <button className={styles.cancelButton} onClick={handleCancel}>Відмінити</button>
                                    <button className={styles.submitButton} type="submit">Зберегти</button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </>
        </div>
    )
}