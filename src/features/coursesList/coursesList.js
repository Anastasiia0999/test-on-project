import React, {useEffect, useState} from 'react';
import {useStylesTestsList} from "./coursesListStyles";
import {shallowEqual, useSelector} from "react-redux";
import {coursesSelector, createdCourseSelector, fetchCourses} from "../../models";
import {paths} from "../../shared/routes/paths";
import {allTestsSelector} from "../../models/test/selectors";
import {useActions} from "../../shared/hooks";
import {fetchTests} from "../../models/test/actions";
import SearchIcon from '@material-ui/icons/Search';
import {Button, CircularProgress} from "@material-ui/core";
import {useHistory} from "react-router-dom";

export const CoursesList = () =>{
    const styles = useStylesTestsList();
    const history = useHistory();

    const [coursesList, setCoursesList] = useState([]);

    const {
        data: courses,
        isLoading,
    } = useSelector(coursesSelector, shallowEqual);

    const [fetchCoursesData] = useActions([fetchCourses])

    useEffect(() => {
        fetchCoursesData();
    }, []);

    useEffect(() => {
        console.log('courses from selector', courses);
        setCoursesList(courses);
    }, [courses, setCoursesList]);

    const onAddCourseClick = () =>{
        history.push(paths.ADD_COURSE);
    }

    /*const handleFiltering = () =>{
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

        console.log('result list', testsData)
        setTestsList(testsData);
    }


    const filterByCourse = (e) =>{
        courseFilter = e.target.value;
        handleFiltering();
    }*/

    /*const filterByDate = (e) =>{
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
    }*/

    const searchByCourseTheme = (e) =>{
        const courseFilter = e.target.value;
        const coursesData = [...courses].filter(el => {
            const mod = el.name.toLowerCase();
            if(mod.startsWith(courseFilter.toLowerCase())){
                return el;
            }
        });
        setCoursesList(coursesData);
    }

    return (
        <div className={styles.testsListContainer}>
            <div className={styles.filteringSection}>
                <input
                    id="test-search"
                    type="text"
                    className={styles.testInput}
                    placeholder="Введіть тему..."
                    onKeyUp={(e) => searchByCourseTheme(e)}
                />
                <SearchIcon className={styles.icon}/>

                <Button
                    style={{width:"13%"}}
                    className={styles.buttonLight}
                    onClick={onAddCourseClick}
                >Додати курс</Button>
            </div>
            <table className={styles.table}>
                <tr className={styles.tableRow}>
                    <td className={styles.tableCol1}><b>№</b></td>
                    <td className={styles.tableCol2}><b>Курс</b></td>
                    <td className={styles.tableCol2}><b>Опис</b></td>
                </tr>
                {
                    isLoading  ?  <CircularProgress style={{color:"#FFD7B5", margin:"0 auto", marginTop:"20px", marginBottom:"20px", width:"50px", height:"50px"}} /> :
                        coursesList && coursesList.length>0 ? coursesList.map(({id, name, description},index) =>{
                            return (
                                <tr key={index} className={styles.tableRowContent}>
                                    <td className={styles.tableCol1}>{index + 1}</td>
                                    <td className={styles.tableCol2}>{name}</td>
                                    <td className={styles.tableCol2}>{description}</td>
                                </tr>
                            )
                        }): coursesList && coursesList.length === 0 && !isLoading?
                            <p className={styles.info}>Немає курсів за даними пошуку</p>:null

                }
            </table>
        </div>
    )
}
