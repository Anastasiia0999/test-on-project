import {makeStyles} from "@material-ui/core";

export const useStylesPreviewModal = makeStyles({
    modal: {
        position: "absolute",
        width: "100%",
        height: "1200px",
        zIndex: "600",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"flex-start",
        backgroundColor:'#F0F0F0'
    },
    modalChild:{
        margin:"20px",
        zIndex:"800",
        width:"50%",
        height:"auto",
        background:'white',
        borderRadius:"5px",
        boxShadow:"5px 5px 8px 2px #888888"
    },
    answerText:{
        fontSize:"16px",
        fontWeight:"600",
        padding:"10px",
        margin:"10px"
    },
    answerTitle:{
        padding:"5px",
        margin:"0px",
        fontSize:"16px"
    },
    answerCard:{
        border:"1px solid black",
        borderRadius:"5px",
        margin:"5px 5px",
        padding:"0px",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    questContainer:{
        width:"83%",
        padding:'0px',
        margin:"10px",
        display:"flex",
        flexDirection:"column",
    },
    answerIcon:{
        padding:"5px",
        width:"25px",
        height:"25px",
        '&:hover': {
            cursor:'pointer'
        },
    },
    containerTitle:{
        margin:"5px",
        padding:"5px",
        width:"40%",
        borderBottom:"1px solid black"
    },
    stepsContainer:{
        width:"100%",
        display:"flex",
        flexDirection: "column",
        padding:"10px 40px",
        margin:"10px",
    },
    stepTitle:{
        margin:"10px",
        padding:"0px",
        fontWeight: 500
    },
    stepTitleContainer:{
        width:"60%",
        display:"flex",
        flexDirection:"row",
        alignItems:"center"
    },
    selectContainer:{
        width:"70%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems: "center"
    },
    selectInput:{
        width:"67%",
        height:"35px",
        lineHeight:"24px",
        padding:"5px",
        margin:"10px",
        borderRadius:"5px",
        border:"1px solid black",
        fontSize:"16px"
    },
    textInput:{
        width:"45%",
        lineHeight:"24px",
        padding:"5px",
        margin:"10px",
        borderRadius:"5px",
        border:"1px solid black",
        fontSize:"16px"
    },
    textArea:{
        width:"70%",
        lineHeight:"24px",
        padding:"5px",
        margin:"10px",
        borderRadius:"5px",
        border:"1px solid black",
        fontSize:"16px",
        overflowY: "scroll"
    },
    errorText:{
        fontSize:"14px",
        color:"red",
        padding:"5px 5px",
        margin:"0px"
    },
    fieldError:{
        width:"45%",
        lineHeight:"24px",
        padding:"5px",
        margin:"10px",
        borderRadius:"5px",
        border:"1px solid red",
        fontSize:"16px"
    },
    textAreaError:{
        width:"70%",
        lineHeight:"24px",
        padding:"5px",
        margin:"10px",
        borderRadius:"5px",
        border:"1px solid red",
        fontSize:"16px",
        overflowY: "scroll",
        color:"red"
    },
    errorIcon:{
        width:"20",
        height:"20",
        color:"red",
        padding:"5px 10px",
        margin:"0px"
    },
    selectError:{
        width:"67%",
        height:"35px",
        lineHeight:"24px",
        padding:"5px",
        margin:"10px",
        borderRadius:"5px",
        border:"1px solid red",
        fontSize:"16px"
    },
    submitButton:{
        margin:"10px",
        width:"18%",
        height:"30px",
        //padding:"5px",
        textTransform:'capitalize',
        fontWeight:'400',
        fontSize: '16px',
        backgroundColor: '#FFD7B5',
        color: "black",
        '&:hover':{
            opacity: 0.6,
            backgroundColor: '#451B00',
            color:"white",
            cursor:"pointer"
        },
        border:"none",
        borderRadius:"5px"
    },
    cancelButton:{
        marginTop:"10px",
        width:"18%",
        height:"30px",
        //padding:"5px",
        textTransform:'capitalize',
        fontWeight:'400',
        fontSize: '16px',
        backgroundColor: 'grey',
        color: "white",
        '&:hover':{
            opacity: 0.6,
            backgroundColor: 'grey',
            color:"white",
            cursor:"pointer"
        },
        border:"none",
        borderRadius:"5px"
    },
    form:{
        width:"100%"
    },
    icon:{
        width:"25px",
        height:"25px",
        color:"#FFD7B5",
        '&:hover': {
            opacity:'0.6',
            color: '#451B00',
            cursor:'pointer'
        },
    },
    questCard:{
        border:"1px solid black",
        borderRadius:"5px",
        padding:"5px",
        margin:"10px 0px"
    },
    questHeader:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        '&:hover': {
            cursor:'pointer'
        },
    },
    questionTitle:{
        fontSize:"18px",
        fontWeight:"400",
        padding:"10px",
        margin:"0px"
    },
    markArea:{
        border:"1px solid black",
        borderRadius:"5px",
        width:"70px",
        height:"25px",
        margin:"10px"
    },
    markError:{
        border:"1px solid red",
        borderRadius:"5px",
        width:"70px",
        height:"25px",
        margin:"10px"
    },
    buttonContainer:{
        marginBottom:"10px",
        width:"90%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    }
});