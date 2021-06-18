import React, {useCallback, useEffect, useState} from 'react';
import {useStylesTestsList} from "./testsListStyles";
import {shallowEqual, useSelector} from "react-redux";
import {clearQuestions, coursesSelector, currentUserSelector, fetchCourses} from "../../models";
import {paths} from "../../shared/routes/paths";
import {allTestsSelector} from "../../models/test/selectors";
import {useActions} from "../../shared/hooks";
import {fetchTests} from "../../models/test/actions";
import SearchIcon from '@material-ui/icons/Search';
import {Button, CircularProgress, Switch} from "@material-ui/core";
import {useHistory} from "react-router-dom";

export const TestsList = () =>{
    const styles = useStylesTestsList();
    const history = useHistory();

    const [testsList, setTestsList] = useState([]);
    const [coursesList, setCoursesList] = useState([]);
    const [switchState, setSwitchState] = useState(false);

    let themeFilter='';
    let courseFilter=null;
    let dateFilter=null;

    const {
        data: tests,
    } = useSelector(allTestsSelector, shallowEqual);

    const {
        isLoading: coursesIsLoading,
        data: courses,
        loaded
    } = useSelector(coursesSelector, shallowEqual);

    const {
        currentUser: user
    } = useSelector(currentUserSelector, shallowEqual);

    const [fetchTestsData, fetchCoursesData, dispatchClearQ] = useActions([fetchTests, fetchCourses, clearQuestions])

    useEffect(() => {
        fetchTestsData(user.role);
        fetchCoursesData();
        dispatchClearQ();
    }, []);

    useEffect(() => {
        console.log('courses from selector', courses);
        setTestsList(tests);
        setCoursesList(courses);
    }, [tests, courses, setTestsList, setCoursesList]);

    const transformDateTime = (data, type) =>{
        const date = data.slice(0, data.indexOf('T'));
        const resultDate = date.split('-').reverse().join('.');

        const time = `${data.slice(data.indexOf('T')+1, 16)}`;

        if(type === 'time'){
            return time;
        }else{
            return resultDate;
        }
    }

    const onAddTestClick = () =>{
        history.push(paths.ADD_TEST);
    }

    const handleFiltering = () =>{
        let testsData=[...tests];

        console.log('original array', testsData);

        if(themeFilter !== ''){
            testsData = [...testsData].filter(el => {
                const mod = el.theme.toLowerCase();
                if(mod.startsWith(themeFilter.toLowerCase())){
                    return el;
                }
            });

            console.log('TESTS SEARCH', testsData);
        }

        console.log('test search value', courseFilter)
        if(courseFilter){
            testsData = [...testsData].filter(el => el.course.id.toString() === courseFilter);
            console.log('course SEARCH', typeof courseFilter);
        }

        if(dateFilter){
            const resultDate = dateFilter.split('-').reverse().join('.');
            testsData = [...testsData].filter(el => {
                const date = el.dateTime.slice(0, el.dateTime.indexOf('T'));
                const resultDateEl = date.split('-').reverse().join('.');
                if(resultDate === resultDateEl){
                    return el;
                }
            });
            console.log('date SEARCH', testsData);
        }

        if(!switchState){
            testsData = [...testsData].filter(el => el.isActive);
            console.log('date switch', testsData);
        }

        console.log('result list', testsData)
        setTestsList(testsData);
    }

    const searchByTestTheme = (e) =>{
        themeFilter = e.target.value;
        handleFiltering();
    }

    const filterByCourse = (e) =>{
        courseFilter = e.target.value;
        handleFiltering();
    }

    const filterByDate = (e) =>{
        dateFilter = e.target.value;
        handleFiltering();
    }

    const handleFiltersReset = () =>{
        setTestsList(tests);
        const courseSelect = document.getElementById('course-select');
        const testFilter = document.getElementById('test-search');
        const dateSelect = document.getElementById('date-select');

        courseSelect.value='first';
        testFilter.value='';
        dateSelect.value=null;

        themeFilter='';
        courseFilter=null;
        dateFilter=null;
        setSwitchState(false);
    }

    const handleSwitchChange = () =>{
        setSwitchState(prevState => !prevState);
        handleFiltering();
    }

    return (
        <div className={styles.testsListContainer}>
            <div className={styles.filteringSection}>
                <select
                    className={styles.selectInput}
                    onChange={e => {filterByCourse(e)}}
                    id="course-select">
                    <option value={'first'} selected className={styles.selectOption}>Курс</option>
                    {
                        coursesList && coursesList.length >0 &&  coursesList.map(el =>{
                            return (
                                <option key={el.id} value={el.id}>{el.name}</option>
                            )
                        })
                    }
                </select>

                <input
                    id="date-select"
                    type="date"
                    className={styles.dateInput}
                    onChange={(e)=>{filterByDate(e)}}/>

                <span style={{margin:"0px"}} className={styles.resetLink} onClick={handleFiltersReset}>Скинути</span>

                <input
                    id="test-search"
                    type="text"
                    className={styles.testInput}
                    placeholder="Введіть тему..."
                    onKeyUp={(e) => searchByTestTheme(e)}
                    style={{marginBottom:"15px"}}
                />
                <SearchIcon className={styles.icon}/>

                <Switch
                    checked={switchState}
                    onChange={handleSwitchChange}
                    color="primary"
                    name="checkedB"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    className={styles.switcher}
                />

                {
                    user && user.role === 0 &&
                    <Button
                        style={{width:"13%"}}
                        className={styles.buttonLight}
                        onClick={onAddTestClick}
                    >Додати тест</Button>
                }
            </div>
            <table className={styles.table}>
                <tr className={styles.tableRow}>
                    <td className={styles.tableCol1}><b>№</b></td>
                    <td className={styles.tableCol2}><b>Тема</b></td>
                    <td className={styles.tableCol2}><b>Курс</b></td>
                    <td className={styles.tableCol}><b>Дата</b></td>
                    <td className={styles.tableCol}><b>Час</b></td>
                    {user && user.role === 1 && <td className={styles.tableCol}><b>Оцінка</b></td>}
                </tr>
                {
                    coursesIsLoading  ?  <CircularProgress style={{color:"#FFD7B5", margin:"0 auto", marginTop:"20px", marginBottom:"20px", width:"50px", height:"50px"}} /> :
                        testsList && testsList.length>0 ? testsList.map(({course, dateTime, theme, isActive, grade},index) =>{
                            return (
                                <tr key={index} className={styles.tableRowContent} style={{backgroundColor: isActive ? '#FCEEDF' : '#F2F0EF'}}>
                                    <td className={styles.tableCol1}>{index + 1}</td>
                                    <td className={styles.tableCol2}>{theme}</td>
                                    <td className={styles.tableCol2}>{course.name}</td>
                                    <td className={styles.tableCol}>{transformDateTime(dateTime, 'date')}</td>
                                    <td className={styles.tableCol}>{transformDateTime(dateTime, 'time')}</td>
                                    {grade && <td className={styles.tableCol}>{grade}</td>}
                                </tr>
                            )
                        }): testsList && testsList.length === 0 && !coursesIsLoading?
                            <p className={styles.info}>Немає тестів за даними пошуку</p>:null

                }
            </table>
        </div>
    )
}