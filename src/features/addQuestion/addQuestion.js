import React, {useEffect, useState} from 'react';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import {addQuestionValidation} from "../../utils/helpers";
import {Field, Form, Formik} from "formik";
import {useStylesModal} from "./addQuestionStyles";
import {createdQuestionsSelector, createQuestion} from "../../models";
import {useActions} from "../../shared/hooks";
import {generateID} from "../../utils/helpers/helpers";
import {shallowEqual, useSelector} from "react-redux";
import {editQuestion} from "../../models/question/actions";
import Dropzone from "react-dropzone";

export const AddQuestionModal = ({handleSubmitAddQuestion,questionOnEdit}) => {

    console.log('question on edit in modal', questionOnEdit);

    const styles = useStylesModal();

    console.log('answer type def', questionOnEdit?.isOpenQuestion ? "open" : questionOnEdit?.isFileQuestion ? "other" : "one");

    const [answerType, setType] = useState(questionOnEdit?.isOpenQuestion ? "open" : questionOnEdit?.isFileQuestion ? "other" : "one" );
    const [answerList, setAnswerList] = useState([]);
    const [checkList, setCheckList] = useState([]);

    const [addQuestion,changeQuestion] = useActions([createQuestion, editQuestion]);

    useEffect(() => {
        if(questionOnEdit && !questionOnEdit.isOpenQuestion && !questionOnEdit.isFileQuestion){
            const answers = questionOnEdit.responseOptions.map(el => { return {answer: el.responseOption, valid: el.isValid}} );
            const checkedArr = questionOnEdit.responseOptions.map(el => el.isValid);
            setAnswerList(answers);
            setCheckList(checkedArr);
        }
    }, []);

    const handleSubmit = (values) =>{
        const resultValues = {...values, answers: answerList};
        let id;

        if(questionOnEdit){
            id=questionOnEdit.id;
        }else{
            id=generateID();
        }

        switch(values.type){
            case 'one':{
                const responseOptions = resultValues.answers.map((answer,index) => {
                    return {
                        responseOption:answer.answer,
                        isValid:checkList[index],
                    }
                });
                const questionObject = {
                    id,
                    title:resultValues.question,
                    responseOptions,
                    isOpenQuestion: false,
                    isFileQuestion: false,
                    grade:resultValues.mark
                }
                questionOnEdit ? changeQuestion(questionObject) : addQuestion(questionObject);
                handleSubmitAddQuestion(resultValues);
            }
                break;
            case 'open':{
                const questionObject = {
                    id,
                    title:resultValues.question,
                    responseOptions:null,
                    isOpenQuestion: true,
                    isFileQuestion: false,
                    grade:resultValues.mark
                }
                questionOnEdit ? changeQuestion(questionObject) : addQuestion(questionObject);
                handleSubmitAddQuestion(resultValues);
            }
                break;
            case 'other':{
                const questionObject = {
                    id,
                    title:resultValues.question,
                    responseOptions:null,
                    isOpenQuestion: false,
                    isFileQuestion: true,
                    grade:resultValues.mark
                }
                questionOnEdit ? changeQuestion(questionObject) : addQuestion(questionObject);
                handleSubmitAddQuestion(resultValues);
            }
                break;
        }
    }

    const handleCancel = () =>{
        handleSubmitAddQuestion();
    }

    const handleChangeAnswerType = () =>{
        const value = document.getElementById('type').value;
        setType(value);
    }

    const handleAddAnswer = () =>{
        let inputContent = document.querySelector("#answer").value;
        const editedArr = [...answerList];
        const originList = [...checkList];
        originList.push(false);
        let flag=false;
        editedArr.forEach(el => {
            if(el.answer === inputContent){
                flag=true;
            }
        });
        if(!flag && inputContent && inputContent !==''){
            editedArr.push({answer: inputContent, valid: false});
            setAnswerList(editedArr);
            setCheckList(originList);
            document.querySelector("#answer").value = null;
        }
    }

    const handleRemoveAnswer = (id) =>{
        const editedArr = [...answerList];
        const result = editedArr.filter((el, index)=> index !== id);
        const originList = [...checkList].filter((el, index)=> index !== id);
        setAnswerList(result);
        setCheckList(originList);
    }

    const handleCheckboxChange = (id) =>{
        const resultList = [...checkList].map((el, index) => {
                if(index === id){
                    return !el;
                }
                return el;
            });
        setCheckList(resultList);
    }

    return(
        <div className={styles.modal}>
            <div className={styles.modalChild}>
                <Formik
                    initialValues={{
                        question: questionOnEdit ? questionOnEdit.title: '',
                        type: questionOnEdit?.isOpenQuestion ? "open" : questionOnEdit?.isFileQuestion ? "other" : "one" ,
                        answers: '',
                        mark: questionOnEdit ? questionOnEdit.grade : '',
                        checked:checkList ?? []
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={addQuestionValidation}
                >
                    {({
                          errors,
                          touched,
                      }) => (
                        <Form className={styles.form} noValidate>
                            <div className={styles.stepsContainer}>
                                <a href="#" name="add-topic"> </a>
                                <h2 className={styles.containerTitle}>{questionOnEdit ? 'Редагувати питання' : 'Додати питання'}</h2>
                                <h3 className={styles.stepTitle}>Питання</h3>
                                <Field
                                    className={errors.question ? styles.textAreaError : styles.textArea}
                                    type="textarea"
                                    name="question"
                                    id="question"
                                    placeholder="Введіть питання..."
                                    as="textarea"
                                    rows="5" cols="45"
                                />
                                {
                                    errors.question ?
                                        <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                                            <ErrorOutlineIcon  className={styles.errorIcon} />
                                            <p className={styles.errorText}>{errors.question}</p>
                                        </div>
                                        : null
                                }

                                <h3 className={styles.stepTitle}>Тип питання</h3>
                                <div className={styles.selectContainer}>
                                    <Field
                                        as="select"
                                        className={errors.type ? styles.selectError : styles.textInput}
                                        name="type"
                                        id="type"
                                        placeholder="Оберіть тип питання..."
                                        onClick={handleChangeAnswerType}
                                    >
                                        <option value="one" >Одна відповідь</option>
                                        <option value="open">Відкрита відповідь</option>
                                        <option value="other">Документ, фото</option>
                                    </Field>
                                </div>
                                {
                                    errors.type ?
                                        <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                                            <ErrorOutlineIcon  className={styles.errorIcon} />
                                            <p className={styles.errorText}>{errors.type}</p>
                                        </div>
                                        : null
                                }

                                {
                                    answerType === 'one' ?
                                        <>
                                            <div className={styles.stepTitleContainer}>
                                                <h3 className={styles.stepTitle}>Додати відповідь</h3>
                                            </div>
                                            <div style={{width:"80%", display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                                                <textarea
                                                    className={errors.answer ? styles.textAreaError : styles.textArea}
                                                    type="textarea"
                                                    name="answer"
                                                    id="answer"
                                                    placeholder="Введіть відповідь..."
                                                    as="textarea"
                                                    rows="5" cols="45"
                                                    style={{width:"90%"}}
                                                />
                                                <AddCircleOutlineOutlinedIcon
                                                    id="add-button"
                                                    className={styles.icon}
                                                    onClick={(e) => {handleAddAnswer(e)}}
                                                />
                                            </div>
                                            {
                                                errors.answer ?
                                                    <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                                                        <ErrorOutlineIcon  className={styles.errorIcon} />
                                                        <p className={styles.errorText}>{errors.answer}</p>
                                                    </div>
                                                    : null
                                            }

                                            <div
                                                role="group"
                                                aria-labelledby="checkbox-group">
                                                { answerList && answerList.map((answer, index) => (
                                                    <div
                                                        key={index}
                                                        className={styles.questCard}
                                                        style={{width:"80%", height:"auto", margin:"5px 10px"}}
                                                    >
                                                        <div
                                                            className={styles.questHeader}
                                                        >
                                                            <p className={styles.questionTitle}>{answer.answer}</p>
                                                            <div style={{display:"flex", flexDirection: "row", justifyContent:"center", alignItems:"center"}}>
                                                                <Field type="checkbox" name="checked" value={answer.answer} onChange={() => handleCheckboxChange(index)} checked={checkList[index]}/>
                                                                <HighlightOffOutlinedIcon className={styles.icon} onClick={() => {handleRemoveAnswer(index)}}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                        : null
                                }

                                <h3 className={styles.stepTitle}>Оцінка</h3>
                                <Field
                                    className={errors.mark ? styles.markError : styles.markArea}
                                    type="number"
                                    name="mark"
                                    id="mark"
                                    max="100"
                                    min="0"
                                />
                                {
                                    errors.mark ?
                                        <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                                            <ErrorOutlineIcon  className={styles.errorIcon} />
                                            <p className={styles.errorText}>{errors.mark}</p>
                                        </div>
                                        : null
                                }

                            </div>

                            <div className={styles.buttonContainer}>
                                <button className={styles.cancelButton} onClick={handleCancel}>Відмінити</button>
                                <button className={styles.submitButton} type="submit">Зберегти</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}