import React, {useEffect, useState} from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {paths} from "../../shared/routes/paths";
import {Link, useHistory} from "react-router-dom";
import {shallowEqual, useSelector} from "react-redux";
import {currentUserSelector, logOut} from "../../models";
import {useActions} from "../../shared/hooks";
import {useStylesHeader} from "./headerStyles";

export const Header = () => {
    const styles = useStylesHeader();

    const {
        error: requestError,
        currentUser,
    } = useSelector(currentUserSelector, shallowEqual);

    const dispatchLogOut = useActions(logOut);
    const history = useHistory();

    const [dropDownTestState, setTestDDState] = useState(false);
    const [dropDownCourseState, setCourseDDState] = useState(false);

    useEffect(() => {
        if (currentUser) {
            setTestDDState(false);
            setCourseDDState(false);
            history.push(paths.HOME);
        }

    }, [currentUser, history]);

    const handleLogOut = () => {
        console.log('user status', currentUser)
        if (currentUser) {
            setTestDDState(false);
            setCourseDDState(false);
            dispatchLogOut();
        }
    }

    const handleAddTestClick = () =>{
        setTestDDState(false);
        setCourseDDState(false);
        history.push(paths.ADD_TEST);
    }

    const handleAddCourseClick = () =>{
        setTestDDState(false);
        setCourseDDState(false);
        history.push(paths.ADD_COURSE);
    }

    return (
        <div className={styles.header}>
            <div className={styles.headerMain}>
                <div>
                    <Link className={styles.link} to={paths.HOME}>TestOn</Link>
                </div>
                <div className={styles.rightNav} >
                    {
                        currentUser ?
                            <>
                                <AccountCircleIcon className={styles.icon}/>
                                <p className={styles.linkInOut} onClick={handleLogOut}>Вихід</p>
                            </>
                                :
                                <Link className={styles.linkInOut} to={paths.AUTH} styles={{marginLeft: "10px"}}>Вхід</Link>
                    }

                </div>
            </div>
                {
                    currentUser && currentUser.role === 0 ?
                        <>
                            <div className={styles.headerNav}>
                                <div className="dropdown">
                                    <button onClick={() => {setTestDDState(prevState => !prevState)}} className={dropDownTestState ? styles.dropDownActive : styles.dropDown}>Тести</button>
                                    {   dropDownTestState ?
                                        <div  className={styles.dropdownContent}>
                                            <p className={styles.ddLink} onClick={handleAddTestClick}>Додати тест</p>
                                        </div>
                                        :
                                        null
                                    }
                                </div>

                                <div className="dropdown">
                                    <button onClick={() => {setCourseDDState(prevState => !prevState)}} className={dropDownCourseState ? styles.dropDownActive : styles.dropDown}>Курси</button>
                                    {   dropDownCourseState ?
                                        <div  className={styles.dropdownContent}>
                                            <p className={styles.ddLink} onClick={handleAddCourseClick}>Додати курс</p>
                                        </div>
                                        :
                                        null
                                    }
                                </div>
                            </div>
                        </>
                        :
                        null
                }
        </div>
    )
}