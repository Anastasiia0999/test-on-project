import React, {useEffect, useState} from 'react';
import {Button, CircularProgress} from "@material-ui/core";
import InfoIcon from '@material-ui/icons/Info';
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import {AsideBar} from "../asideBar/asideBar";
import {addTestValidation} from "../../utils/helpers";
import {Field, Form, Formik} from "formik";
import {AddQuestionModal} from "../addQuestion/addQuestion";
import {
    clearQuestions,
    coursesSelector,
    createdQuestionsSelector,
    createdTestSelector, fetchCourses,
    removeQuestion
} from "../../models";
import {shallowEqual, useSelector} from "react-redux";
import {useActions} from "../../shared/hooks";
import {useStylesAddTest} from "./addTestPageStyles";
import {PreviewPageModal} from "../previewModal/previewPage";
import {paths} from "../../shared/routes/paths";
import {useHistory} from "react-router-dom";
import {createTest} from "../../models/test/actions";
import {addAlert} from "../../models/alert/redux";

export const AddTestPage = () =>{
    const styles = useStylesAddTest();
    const history = useHistory();

    const initialInfoState = [false, false, false, false, false];
    const [stepInfo, setInfoArr] = useState(initialInfoState);

    const [questionListState, setQuestionList] = useState([]);
    const [coursesListState, setCoursesList] = useState([]);
    const [expandList, setExpandList] = useState([]);
    const [courseSelected, setCourseSelected] = useState('1');

    const [emailList, setEmailList] = useState([]);

    const [markSum, setMarkSum] = useState(0);

    const [isOpen, setModalState] = useState(false);
    const [isOpenPreview, setModalPreviewState] = useState(false);
    const [onEditQ, setOnEditQState] = useState(null);
    const [submitValue, setSubmitValue] = useState(null);

    const { data } = useSelector(createdQuestionsSelector, shallowEqual);
    const { data:courses } = useSelector(coursesSelector, shallowEqual);
    const { error, loaded, isLoading } = useSelector(createdTestSelector, shallowEqual);

    const [removeQuestionDispatch,dispatchAddAlert, loadCourses] = useActions([removeQuestion, addAlert, fetchCourses]);
    const dispatchCreateTest = useActions(createTest);

    useEffect(() => {
        loadCourses();
    }, []);

    useEffect(() => {
        const course = courses.find(c => c.id.toString() === courseSelected);
        console.log('course selected', course);
        console.log('course value', courseSelected);
        const emailList = course &&  course.applicants.map(({login, id})=> {
            return {login, id}
        });
        setEmailList(emailList);
    }, [courseSelected]);

   useEffect(() => {
        setQuestionList(data);
        setCoursesList(courses);
    }, [data, courses]);

    useEffect(() => {
        setQuestionList(data);
        if(data.length) {
            const markSum = data.reduce(function (sum, current) {
                return sum + current.grade;
            }, 0);
            setMarkSum(markSum);
        }else{
            setMarkSum(0);
        }
    }, [data, questionListState]);

    useEffect(() => {
        if(!error && loaded){
            dispatchAddAlert('???????? ?????? ?????????????? ??????????????????', 'success');
            history.push(paths.TESTS_LIST);
        }
        if(error){
            dispatchAddAlert(error, 'error');
        }
    }, [loaded, error, dispatchAddAlert, history]);

    const handleCourseSelected = (e) =>{
        console.log('COURSE select', e.target.value);
        setCourseSelected(e.target.value);
    }

    const handleSubmit = (values) =>{
        const applicants = emailList.map(el =>{
            return { login: el.login}
        });

        console.log('questions', data);
        const questions = data.map(q =>{
            delete q.id;
            return q;
        })

        const courseInfo = courses.find(c => c.id.toString() === values.course);
        const testObject = {
            theme: values.topic,
            courseId: courseInfo.id,
            courseName: courseInfo.name,
            questions,
            applicants,
            dateTime: values.dateTime,
            expireTime: values.timeLimit.toString()
        }

        setSubmitValue(testObject);
        setModalPreviewState(prevState => !prevState);
    }

    const randomId = function () {
        return '_' + Math.random().toString(36).substr(2, 9);
    };

    const handleSubmitAddQuestion = (values) =>{
        handleModalDialog();
    }

    const handleQuestionChange = (e, id) =>{
        e.stopPropagation();
        e.preventDefault();
        const question = data.find(el => el.id === id);
        setOnEditQState(question);
        setModalState(prevState => !prevState);
    }

    const handleSubmitTest = (object) =>{
        setModalPreviewState(prevState => !prevState);
        delete object.courseName;
        dispatchCreateTest(object);
    }

    const handleModalDialog = () =>{
        setModalState(prevState => !prevState);
        setOnEditQState(null);
    }
    const handleModalPreviewDialog = () =>{
        setModalPreviewState(prevState => !prevState);
    }

    const handleStepState = (stepNumber) =>{
        const editedArr = [...stepInfo];
        editedArr[stepNumber - 1] = !editedArr[stepNumber - 1];
        setInfoArr(editedArr);
    }

    const handleAnswerClick = (answerNumber) =>{
        const editedArr = [...expandList];
        editedArr[answerNumber] = !editedArr[answerNumber];
        setExpandList(editedArr);
    }

    const handleAddEmail = () =>{
        let inputContent = document.querySelector("#email").value;
        const editedArr = [...emailList];
        const checkValue = false;
        console.log('editedArr', editedArr);
           // editedArr.find(v => v.login === inputContent);
        if(!checkValue && inputContent && inputContent !==''){
            editedArr.push({ login: inputContent, id: randomId()});
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
            const result = editedArr.filter((el)=> el.id !== id);
            setEmailList(result);
    }

    const handleQuestionRemove = (e, id) =>{
        e.stopPropagation();
        e.preventDefault();
        removeQuestionDispatch(id);
    }

    return(
        <div className={styles.testPage}>
           <>
                {
                    isOpen ?
                            <AddQuestionModal handleSubmitAddQuestion={handleSubmitAddQuestion} questionOnEdit={onEditQ}/>
                    : null
                }
               {
                   isOpenPreview ?
                       <PreviewPageModal data={submitValue} handlePreviewCancel={handleModalPreviewDialog}
                                         handleTestSubmit={handleSubmitTest}/>
                       : null
               }
                       <>
                           <AsideBar />
                           <Formik
                               initialValues={{
                                   email: '',
                                   topic: '',
                                   timeLimit: '',
                                   dateTime: 0,
                                   course:''
                               }}
                               onSubmit={handleSubmit}
                               validationSchema={addTestValidation}
                           >
                               {({
                                     errors,
                                     touched,
                                 }) => (
                                   <Form className={styles.form} noValidate>
                                       <div className={styles.stepsContainer}>
                                           <a href="#home" name="add-topic"> </a>
                                           {isLoading && !loaded ? <CircularProgress style={{color:"#FFD7B5", marginLeft:"80px", marginTop:"30px", marginBottom:"30px", width:"50px", height:"50px"}} /> : null}
                                           <h2 className={styles.containerTitle}>???????????? ????????</h2>
                                           <h3 className={styles.stepTitle}>1. ???????????? ????????</h3>
                                           <Field
                                               className={errors.topic ? styles.fieldError : styles.textInput}
                                               type="topic"
                                               name="topic"
                                               id="topic"
                                               placeholder="?????????????? ????????..."
                                           />
                                           {
                                               errors.topic ?
                                                   <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                                                       <ErrorOutlineIcon  className={styles.errorIcon} />
                                                       <p className={styles.errorText}>{errors.topic}</p>
                                                   </div>
                                                   : null
                                           }

                                           <a href="#home" name="course"> </a>
                                           <div className={styles.stepTitleContainer}>
                                               <h3 className={styles.stepTitle}>2. ?????????????? ????????</h3>
                                               <InfoIcon className={styles.icon}
                                                         onClick={()=>{handleStepState(2)}}/>
                                           </div>
                                           {
                                               stepInfo[1] ?
                                                   <p className={styles.stepInfo}>
                                                       ?????????????????? ???????????? ????????, ?????????????? ???????? ?? ???????????????? ???????????????? ????????????.
                                                       <br />???? ?????????? ???????????? ???????????????? ????????, ???????????????????? ???????????? ??????????????? ???????????.
                                                       <br />???? ???????????? ???????????????????? ?????? ????????, ???????? ???? ?????????????? ????????????????????????? ???????? ???? ??????????.
                                                   </p>
                                                   : null
                                           }
                                           <div className={styles.selectContainer}>
                                               <Field
                                                   as="select"
                                                   className={errors.course ? styles.selectError : styles.textInput}
                                                   name="course"
                                                   onClick={(e) => {handleCourseSelected(e)}}
                                               >
                                                   {
                                                       coursesListState && coursesListState.length>0 && coursesListState.map(el =>{
                                                           return (
                                                               <option value={el.id} >{el.name}</option>
                                                           )
                                                       })
                                                   }
                                               </Field>
                                           </div>
                                           {
                                               errors.course ?
                                                   <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                                                       <ErrorOutlineIcon  className={styles.errorIcon} />
                                                       <p className={styles.errorText}>{errors.course}</p>
                                                   </div>
                                                   : null
                                           }

                                           <a href="#home" name="add-question"> </a>
                                           <div className={styles.stepTitleContainer}>
                                               <h3 className={styles.stepTitle}>3. ???????????? ??????????????</h3>
                                               <InfoIcon className={styles.icon}
                                                         onClick={()=>{handleStepState(3)}}
                                               />
                                           </div>
                                           {
                                               stepInfo[2] ?
                                                   <p className={styles.stepInfo}>
                                                       ?????????????????? ???? ???????????? ??????????????? ?????????????????.
                                                       <br/>?????????????? ??????????????.
                                                       <br/>?????????????? ??????????????.
                                                       <br/>?????????????? ?????? ??????????????????.
                                                       <br/>?????????????? ?????????????????? ?????????????????? ????????????????????.
                                                       <br/>?????????????? ??????????????.
                                                       <br/>??????????????????, ???? ???????? ?????????????? ???????????????? ?? ????????????.
                                                   </p>
                                                   : null
                                           }
                                           <div style={{width:"55%", display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
                                               <p className={styles.questionTitle}><b>???????????? ????????????</b></p>
                                               <Button
                                                   style={{width:"40%"}}
                                                   className={styles.buttonLight}
                                                   onClick={handleModalDialog}>???????????? ??????????????</Button>
                                           </div>
                                           <div className={styles.questContainer}>
                                               <p className={styles.questionTitle}>???????????????? ???????? ??????????: {markSum}</p>
                                               { data && data.length>0 && data.map((el, index) => (
                                                           <>
                                                               <div className={styles.questCard} key={index}>
                                                                   <div
                                                                       style={expandList[index] ? {
                                                                           background: 'rgba(255, 215, 181, 0.37)',
                                                                           borderRadius: '5px',
                                                                           paddingLeft:'10px'
                                                                       } : null}
                                                                       className={styles.questHeader}
                                                                       onClick={() => handleAnswerClick(index)}
                                                                       key={index}>
                                                                       <p className={styles.questionTitle} style={{width:"85%"}}>{el.title.length > 100 ? `${index+1}. ${el.title.slice(0,100)}...` : `${index+1}. ${el.title}`}</p>
                                                                       <div style={{width:"15%", display:"flex", flexDirection:"row", }}>
                                                                           <EditOutlinedIcon onClick={(e) => handleQuestionChange(e, el.id)} className={styles.answerIcon}/>
                                                                           <HighlightOffOutlinedIcon onClick={(e) => { handleQuestionRemove(e, el.id)} } className={styles.answerIcon}/>
                                                                       </div>
                                                                   </div>
                                                                   {
                                                                       expandList[index] ?
                                                                           <>
                                                                               <p className={styles.answerText} key={index}>??????????????: {el.title}</p>
                                                                               {
                                                                                   el.isOpenQuestion ?
                                                                                       <p className={styles.answerText}>?????????????? ??????????????????</p>
                                                                                       : el.isFileQuestion ?
                                                                                       <p className={styles.answerText}>???????? ??????????????????</p>
                                                                                       :<>
                                                                                           <p className={styles.answerText}>???????????????? ????????????????????</p>
                                                                                           <div>
                                                                                               {
                                                                                                   el.responseOptions ?
                                                                                                       el.responseOptions.map((option, index) =>(
                                                                                                           <div key={index} className={styles.answerCard}>
                                                                                                               <p className={styles.answerTitle}>{option.responseOption}</p>
                                                                                                               {option.isValid ? <DoneOutlinedIcon className={styles.answerIcon}/> : null}
                                                                                                           </div>
                                                                                                       ))
                                                                                                       :
                                                                                                       null
                                                                                               }
                                                                                           </div>
                                                                                       </>

                                                                               }
                                                                               <p className={styles.answerText}>????????????: {el.grade}</p>
                                                                           </>
                                                                           :
                                                                           null
                                                                   }
                                                               </div>
                                                           </>

                                                       )
                                                   )
                                               }
                                           </div>

                                           <a href="#home" name="date-time"> </a>
                                           <h3 className={styles.stepTitle}>4. ???????????? ?????? ???? ????????</h3>
                                           <Field
                                               className= { errors.dateTime ? styles.fieldError : styles.textInput }
                                               type="datetime-local"
                                               id="dateTime"
                                               name="dateTime"
                                           />
                                           {
                                               errors.dateTime ?
                                                   <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                                                       <ErrorOutlineIcon  className={styles.errorIcon} />
                                                       <p className={styles.errorText}>{errors.dateTime}</p>
                                                   </div>
                                                   : null
                                           }

                                           <a href="#home" name="time-limit"> </a>
                                           <div className={styles.stepTitleContainer}>
                                               <h3 className={styles.stepTitle}>5. ???????????? ?????????????????? ????????</h3>
                                               <InfoIcon className={styles.icon}
                                                         onClick={()=>{handleStepState(5)}}/>
                                           </div>
                                           {
                                               stepInfo[4] ?
                                                   <p className={styles.stepInfo}>
                                                       ?????????????? ?????????? ???????????????????? ?????????????????? ???????? ???????????????????? ?????????? ???? ?????????????????? ?????????????? ?????? ?????? ????????????????????.
                                                   </p>
                                                   : null
                                           }
                                           <Field
                                               className={errors.timeLimit ? styles.errorTimeLimit : styles.timeLimit}
                                               type="number"
                                               name="timeLimit"
                                               id="timeLimit"
                                               min="0"
                                               max="200"
                                           />
                                           {
                                               errors.timeLimit ?
                                                   <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                                                       <ErrorOutlineIcon  className={styles.errorIcon} />
                                                       <p className={styles.errorText}>{errors.timeLimit}</p>
                                                   </div>
                                                   : null
                                           }

                                           <a href="#home" name="test-subscribe"> </a>
                                           <div className={styles.stepTitleContainer}>
                                               <h3 className={styles.stepTitle}>6. ???????????????? ????????</h3>
                                               <InfoIcon className={styles.icon}
                                                         onClick={()=>{handleStepState(6)}}/>
                                           </div>
                                           {
                                               stepInfo[5] ?
                                                   <p className={styles.stepInfo}>
                                                       ?????????????? ???????????? ????. ???????? ??????????, ???????? ?????????????????? ???????????????? ???????????? ???? ???????????? ??????????.
                                                       <br/>???????? ?? ??????????, ?????????? ?? ?????????? ???????????????????? ?????????? ?????????????? ???? ???? ???????????????? ????????????.
                                                   </p>
                                                   : null
                                           }
                                           <div style={{width:"53%", display:"flex", flexDirection:"row", justifyContent:"space-between",alignItems:"center"}}>
                                               <input
                                                   id="email"
                                                   name="email"
                                                   type="email"
                                                   className={errors.email ? styles.fieldError : styles.textInput}
                                                   style={{width:"85%"}}
                                                   placeholder="?????????????? ????.??????????"
                                                   onKeyUp={(e)=>{handleAddEmailKey(e)}}
                                               />
                                               <AddCircleOutlineOutlinedIcon
                                                   id="add-button"
                                                   className={styles.iconAdd}
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
                                               emailList && emailList.map((el) => (
                                                   <div
                                                       key={el.id}
                                                       className={styles.questCard}
                                                       style={{width:"80%", height:"40px", margin:"5px 10px"}}
                                                   >
                                                       <div
                                                           className={styles.questHeader}
                                                       >
                                                           <p className={styles.questionTitle}>{el.login}</p>
                                                           <div>
                                                               <EditOutlinedIcon className={styles.answerIcon}/>
                                                               <HighlightOffOutlinedIcon className={styles.answerIcon} onClick={() => {handleRemoveEmail(el.id)}}/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               ))
                                           }
                                           <button className={styles.submitButton} type="submit">????????????????</button>
                                       </div>
                                   </Form>
                               )}
                           </Formik>
                       </>
               </>
        </div>
    )
}

