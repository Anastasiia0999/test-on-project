import React from 'react';
import {useStylesAsideBar} from "./asideBarStyles";

export const AsideBar = () => {
    const styles = useStylesAsideBar();

    return (
        <div className={styles.asideBar}>
            <p className={styles.asideBarTitle}>Кроки</p>
            <a href="#add-topic" className={styles.asideBarStep}>1. Додати тему</a>
            <a href="#course" className={styles.asideBarStep}>2. Обрати курс</a>
            <a href="#add-question" className={styles.asideBarStep}>3. Додати питання</a>
            <a href="#date-time" className={styles.asideBarStep}>4. Обрати час та дату</a>
            <a href="#time-limit" className={styles.asideBarStep}>5. Додати обмеження часу</a>
            <a href="#test-subscribe" className={styles.asideBarStep}>6. Поширити тест</a>
        </div>
    )
}