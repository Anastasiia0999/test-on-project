import {makeStyles} from "@material-ui/core";

export const useStylesAsideBar = makeStyles({
    asideBar:{
        position:"fixed",
        top:"100px",
        width:"30%",
        height:"320px",
        //border:"1px solid red",
        padding:"20px",
        margin:"20px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        borderRight:"1px solid black"
    },
    asideBarTitle:{
        margin:"10px",
        fontSize:"20px",
        fontWeight:"500"
    },
    asideBarStep:{
        fontSize:"18px",
        padding:"10px",
        margin:"0px",
        '&:hover': {
            opacity:'0.4',
            backgroundColor: '#451B00',
            cursor:'pointer',
            color:"white",
            borderRadius:"5px"
        },
        textDecoration:"none",
        color:"black"
    },
});