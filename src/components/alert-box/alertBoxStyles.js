import {makeStyles} from "@material-ui/core";

export const stylesAlert = makeStyles({
    alertContainer:{
    position: "fixed",
    zIndex: 1000,
    bottom: "50px",
    right: "10px",
    },
    alertText:{
        fontSize:"14px",
    },
    alertElement:{
        marginBottom:"10px",
        boxShadow:"5px 5px 5px grey"
    }
});

