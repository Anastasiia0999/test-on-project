import React from 'react';
import {Button, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    buttonDark:{
        marginLeft:'60%',
        textTransform:'capitalize',
        fontWeight:'100',
        fontSize: '20px',
        backgroundColor: '#451B00',
        color: "white",
        '&:hover':{
            opacity: 0.8,
            backgroundColor: '#451B00',
        }
    },
    buttonLight:{
        width:"auto",
        height:"30px",
        //padding:"5px",
        textTransform:'capitalize',
        fontWeight:'400',
        fontSize: '14px',
        backgroundColor: '#FFD7B5',
        color: "black",
        '&:hover':{
            opacity: 0.6,
            backgroundColor: '#451B00',
            color:"white"
        }
    },
});

export const CustomButton = ({variant, textContent, width = 100, height = 80, customStyles}) =>{
    const styles = useStyles();
    switch(variant) {
            case 'dark':
                return (
                    <Button className={styles.buttonDark}>{textContent}</Button>
                )
            case 'light':
                return (
                    <Button className={styles.buttonLight}>{textContent}</Button>
                )
            case 'grey':
                return (
                    <Button className={customStyles}>{textContent}</Button>
                )
        default:
        return null;
        }
}