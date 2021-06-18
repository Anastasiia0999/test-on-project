import React, {useState} from 'react';
import {useStylesPreviewModal} from "./previewModalStyles";
import DoneOutlinedIcon from "@material-ui/icons/DoneOutlined";

export const PreviewPageModal = ({data, handlePreviewCancel, handleTestSubmit }) => {
    const date = data.dateTime.slice(0, data.dateTime.indexOf('T'));
    const resultDate = date.split('-').reverse().join('.');

    const dateTime = `${resultDate} ${data.dateTime.slice(data.dateTime.indexOf('T')+1, data.dateTime.length)}:00`;

    const styles = useStylesPreviewModal();

    const initialInfoState = [false, false, false, false, false, false, false];

    const [expandList, setExpandList] = useState(initialInfoState);
    const [upState, setUpState] = useState(true);

    if(upState){
        function up() {
            window.scrollTo({
                top: 20,
                behavior: "smooth"
            });
            return false;
        }
        up();
        setUpState(false);
    }

    const handleAnswerClick = (answerNumber) =>{
        setUpState(false);
        const editedArr = [...expandList];
        editedArr[answerNumber] = !editedArr[answerNumber];
        setExpandList(editedArr);
    }

    const handleSubmit = () =>{
        handleTestSubmit(data);
    }

    const handleCancel = () =>{
        handlePreviewCancel();
    }

    return(
        <div className={styles.modal}>
            <div className={styles.modalChild}>
                <div className={styles.stepsContainer}>
                    <h2 className={styles.containerTitle}>Перевірити тест</h2>
                    <h3 className={styles.stepTitle}>Тема: {data.theme}</h3>

                    <h3 className={styles.stepTitle}>Курс: {data.courseName}</h3>

                    <h3 className={styles.stepTitle}>Питання</h3>

                    <div className={styles.questContainer}>
                        { data.questions ?
                            data.questions.map((el, index) => (
                                    <>
                                        <div className={styles.questCard} key={index}>
                                            <div
                                                style={expandList[index] ? {
                                                    background: 'rgba(255, 215, 181, 0.37)',
                                                    borderRadius: '5px'
                                                } : null}
                                                className={styles.questHeader}
                                                onClick={() => handleAnswerClick(index)}>
                                                <p className={styles.questionTitle} style={{width:"80%"}}>{el.title.length > 100 ? `${index+1}. ${el.title.slice(0,100)}...` : `${index+1}. ${el.title}`}</p>
                                            </div>
                                            {
                                                expandList[index] ?
                                                    <>
                                                        <p className={styles.answerText}>Питання: {el.title}</p>
                                                        {
                                                            el.isOpenQuestion?
                                                                <p className={styles.answerText}>Фото відповідь</p>
                                                                : el.isFileQuestion ?
                                                                <p className={styles.answerText}>Файлова відповідь</p>
                                                                :<>
                                                                    <p className={styles.answerText}>Варіанти відповідей</p>
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
                                                        <p className={styles.answerText}>Оцінка: {el.grade}</p>
                                                    </>
                                                    :
                                                    null
                                            }
                                        </div>
                                    </>

                                )
                            )
                            : null
                        }
                    </div>

                    <h3 className={styles.stepTitle}>Час та дата: {dateTime}</h3>

                    {
                        data.expireTime ? <h3 className={styles.stepTitle}>Обмеження часу (хвилини): {data.expireTime} </h3> : null
                    }

                    <h3 className={styles.stepTitle}>Пошти для поширення тесту</h3>
                    {
                        data.applicants && data.applicants.map((el, index) => (
                            <div
                                key={index}
                                className={styles.questCard}
                                style={{width:"80%", height:"40px", margin:"5px 10px"}}
                            >
                                <div
                                    className={styles.questHeader}
                                >
                                    <p className={styles.questionTitle}>{el.login}</p>

                                </div>
                            </div>
                        ))
                    }
                    <div className={styles.buttonContainer}>
                        <button className={styles.cancelButton} onClick={handleCancel}>Відмінити</button>
                        <button className={styles.submitButton} onClick={handleSubmit}>Зберегти</button>
                    </div>
                </div>
            </div>
        </div>
    )
}