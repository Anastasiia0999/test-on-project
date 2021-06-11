import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles({
    firstInfoCard:{
        margin:'20px',
        width:'500px',
        height:'300px',
        //border:'1px solid red',
        borderRadius:'5px'
    },
    mainCardInfo:{
        width:'450px',
        height:'250px',
        backgroundColor:'#FFD7B5',
        borderRadius:'5px'
    },
    secondaryCardInfo:{
        width:'470px',
        height:'270px',
        position:'absolute',
        marginTop:'-225px',
        marginLeft:'25px',
        border:'1px solid #451B00',
        borderRadius:'5px'
    },
    secondInfoCard:{
        margin:'20px',
        width:'500px',
        height:'300px',
        //border:'1px solid red',
        borderRadius:'5px',
    },
    mainCardInfoSecond:{
        width:'430px',
        height:'230px',
        margin:'70px 0 0 70px',
        backgroundColor:'#FFD7B5',
        borderRadius:'5px',
    },
    secondaryCardInfoSecond:{
        width:'470px',
        height:'270px',
        position:'absolute',
        border:'1px solid #451B00',
        borderRadius:'5px'
    },
    thirdlyCardInfoSecond:{
        zIndex:-10,
        width:'440px',
        height:'230px',
        position:'absolute',
        margin:'30px 0 0 20px',
        backgroundColor:'#EDEAEA',
        borderRadius:'5px'
    },
    thirdInfoCard:{
        margin:'20px',
        width:'500px',
        height:'300px',
        //border:'1px solid red',
        borderRadius:'5px'
    },
    mainCardInfoThird:{
        width:'470px',
        height:'270px',
        position:'absolute',
        border:'1px solid #451B00',
        borderRadius:'5px'
    },
    secondaryCardInfoThird:{
        width:'450px',
        height:'250px',
        margin:'50px 0  0 50px',
        backgroundColor:'#EDEAEA',
        borderRadius:'5px'
    },
    fourthInfoCard:{
        margin:'20px',
        width:'500px',
        height:'300px',
        //border:'1px solid red',
        borderRadius:'5px'
    },
    mainCardInfoFourth:{
        width:'450px',
        height:'280px',
        backgroundColor:'#FFD7B5',
        borderRadius:'5px'
    },
    secondaryCardInfoFourth:{
        zIndex:30,
        width:'440px',
        height:'270px',
        position:'absolute',
        marginTop:'-250px',
        marginLeft:'60px',
        border:'1px solid #451B00',
        borderRadius:'5px'
    },
    thirdlyCardInfoFourth:{
        backgroundColor:'#FCF7F4',
        zIndex:20,
        width:'400px',
        height:'220px',
        position:'absolute',
        margin:'-240px 0 0 20px',
        borderRadius:'5px'
    },
    fifthInfoCard:{
        margin:'20px',
        width:'500px',
        height:'300px',
        //border:'1px solid red',
        borderRadius:'5px'
    },
    mainCardInfoFifth:{
        width:'430px',
        height:'230px',
        margin:'70px 0 0 70px',
        backgroundColor:'#EDEAEA',
        borderRadius:'5px',
    },
    secondaryCardInfoFifth:{
        width:'470px',
        height:'270px',
        margin:'-300px 0 0 0',
        position:'absolute',
        border:'1px solid #451B00',
        borderRadius:'5px'
    },
    thirdlyCardInfoFifth:{
        zIndex:-10,
        width:'460px',
        height:'250px',
        position:'absolute',
        margin:'-270px 0 0 20px',
        backgroundColor:'#FFD7B5',
        borderRadius:'5px'
    },
    cardTitle:{
        zIndex:50,
        position:'absolute',
        width:'300px',
        fontSize:'28px',
        textAlign:'right'
    },
    cardTitleSecond:{
        zIndex:50,
        position:'absolute',
        width:'400px',
        textAlign:'left',
        border:'1px soled red'
    },
})

export const InfoCard = ({variant}) => {
    const styles = useStyles();

    switch(variant) {
    case
        'first'
    :
        return (<div className={styles.firstInfoCard}>
        <div className={styles.cardTitle} style={{  marginLeft:'10%', marginTop:'5%',}}>
            <Typography variant="h4">
                Гнучке налаштування параметрів тесту
            </Typography>
        </div>
        <div className={styles.mainCardInfo}> </div>
        <div className={styles.secondaryCardInfo}> </div>
    </div>)
    case
        'second'
    :
        return (
            <div className={styles.secondInfoCard}>
                <div className={styles.cardTitleSecond}>
                    <Typography variant="h4" style={{  marginLeft:'20%', marginTop:'20%',}}>
                        Покрокова інструкція при створенні тестів
                    </Typography>
                </div>
                <div className={styles.secondaryCardInfoSecond}> </div>
                <div className={styles.thirdlyCardInfoSecond}> </div>
                <div className={styles.mainCardInfoSecond}> </div>
            </div>
        )
    case
        'third'
    :
        return (
            <div className={styles.thirdInfoCard}>
                <div className={styles.cardTitle}>
                    <Typography variant="h4"  style={{  marginLeft:'80%', marginTop:'35%', width:'200px'}}>
                        Система сповіщень
                    </Typography>
                </div>
                <div className={styles.mainCardInfoThird}> </div>
                <div className={styles.secondaryCardInfoThird}> </div>
            </div>
        )
    case
        'fourth'
    :
        return (
            <div className={styles.fourthInfoCard}>
                <div className={styles.cardTitle}>
                    <Typography variant="h4" style={{  marginLeft:'25%', marginTop:'35%', textAlign:'left'}}>
                        Зрозумілий інтерфейс
                    </Typography>
                </div>
                <div className={styles.mainCardInfoFourth}> </div>
                <div className={styles.secondaryCardInfoFourth}> </div>
                <div className={styles.thirdlyCardInfoFourth}> </div>
            </div>
        )
    case
        'fifth'
    :
        return (
            <div className={styles.fifthInfoCard}>
                <div className={styles.cardTitleSecond}>
                    <Typography variant="h4" style={{  marginLeft:'60%', marginTop:'30%', textAlign:'right', width:'200px'}}>
                        Збереження результатів
                    </Typography>
                </div>
                <div className={styles.mainCardInfoFifth}> </div>
                <div className={styles.secondaryCardInfoFifth}> </div>
                <div className={styles.thirdlyCardInfoFifth}> </div>
            </div>
        )
        default:
            return null;
    }
}