import React from 'react';
import { useHistory } from 'react-router-dom';
import {Container, Typography} from "@material-ui/core";
import {ArrowUpward} from "@material-ui/icons";
import {InfoCard} from "../../components/infoCard";
import {paths} from "../../shared/routes/paths";
import {useStylesMainPage} from "./mainPageStyles";

export const MainPage = () => {
    const styles = useStylesMainPage();

    const history = useHistory();

    const handleAddTestClick = () => {
        history.push(paths.ADD_TEST);
    }

    return(
            <div className={styles.mainPage}>
                <div className={styles.banner} >
                    <a href="#home" name="banner"> </a>
                    <div className={styles.bannerCardWrapper}>
                        <div className={styles.bannerCardThirdly}>
                        </div>
                        <div className={styles.bannerCardSecondary}>
                        </div>
                        <div className={styles.mainCard}>
                            <Typography className={styles.bannerCardText} >
                                Онлайн генератор тестів Test On
                            </Typography>
                            <br/>
                            <button className={styles.btnDark} onClick={handleAddTestClick}>створити тест</button>
                        </div>
                    </div>
                </div>
                <Container>
                    <div className={styles.aboutUs}>
                        <div className={styles.title}>
                            <Typography variant="h4" >
                                Про нас
                            </Typography>
                        </div>
                        <div className={styles.cardsContainer}>

                            <InfoCard variant={'first'}/>

                            <div className={styles.infoWrapper}>У конструкторі тестів передбачена велика кількість різних налаштувань тестів. Ви можете швидко і зручно створити дійсно унікальний тест під ваші цілі і завдання.</div>

                            <div className={styles.infoWrapperReverse}> При створенні тесту є покрокова інструкція та пояснення, що допомагають пришвидшити та оптимізувати процес створення нового тесту.</div>

                            <InfoCard variant={'second'}/>

                            <InfoCard variant={'third'}/>

                            <div className={styles.infoWrapper}> Система сповіщень надсилає повідомлення електронною поштою з датою, часом та посиланням на проходження тесту.</div>

                            <div className={styles.infoWrapperReverse}> Спеціально розроблений інтерфейс для максимальної гнучкості та зручності використання.</div>

                            <InfoCard variant={'fourth'}/>

                            <InfoCard variant={'fifth'}/>

                            <div className={styles.infoWrapper}>Після проходження тестів, усі результати зберігаються і можуть бути використані в будь-який зручний час.</div>

                            <p className={styles.buttonUp}>
                                <a href="#banner">
                                    <ArrowUpward className={styles.iconUp}/>
                                </a>
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
    )
}
