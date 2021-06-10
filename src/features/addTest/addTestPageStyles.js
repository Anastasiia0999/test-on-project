import {makeStyles} from "@material-ui/core";

export const useStylesAddTest = makeStyles({
    form:{
        width:"90%",
        padding:"0px",
        margin:"0px"
    },
    testPage:{
        width:"100%",
        display:"flex",
        flexDirection:"row",
    },
    containerTitle:{
        margin:"10px",
        padding:"5px",
        width:"30%",
        borderBottom:"1px solid black"
    },
    stepsContainer:{
        width:"55%",
        marginLeft:"40%",
        display:"flex",
        flexDirection: "column",
        padding:"10px 40px",
        margin:"10px",
    },
    stepTitle:{
        margin:"30px 0px 10px 0px",
        padding:"0px",
    },
    stepTitleContainer:{
        width:"60%",
        display:"flex",
        flexDirection:"row",
        alignItems:"center"
    },
    stepInfo:{
        background: "rgba(255, 215, 181, 0.22)",
        borderRadius: "5px",
        padding:"10px",
        height:'auto',
        lineHeight:'30px'
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
    icon:{
        marginTop:"25px",
        marginLeft:"5px",
        width:"25px",
        height:"25px",
        color:"#FFD7B5",
        '&:hover': {
            opacity:'0.6',
            color: '#451B00',
            cursor:'pointer'
        },
    },
    iconAdd:{
        width:"30px",
        height:"30px",
        color:"#FFD7B5",
        '&:hover': {
            opacity:'0.6',
            color: '#451B00',
            cursor:'pointer'
        },
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
    questionTitle:{
        fontSize:"18px",
        fontWeight:"400",
        padding:"10px 0px",
        margin:"0px"
    },
    questContainer:{
        width:"85%",
        padding:'0px',
        margin:"0px 10px",
        display:"flex",
        flexDirection:"column",
    },
    questCard:{
        border:"1px solid black",
        borderRadius:"5px",
        padding:"5px",
        margin:"10px 0px",
        width:'auto'
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
    answerIcon:{
        padding:"5px",
        width:"25px",
        height:"25px",
        '&:hover': {
            cursor:'pointer'
        },
    },
    answerText:{
        fontSize:"16px",
        fontWeight:"500",
        padding:"10px",
        margin:"0px"
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
    answerTitle:{
        padding:"5px",
        margin:"0px",
        fontSize:"16px"
    },
    buttonLight:{
        margin:"10px",
        width:"45%",
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
        marginLeft:"85%",
        marginTop:"10px",
        width:"15%",
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
    modalBackground:{
        width:"100%",
        backgroundColor:"#F0F0F0",
        height:"auto"
    },
    timeLimit:{
        border:"1px solid black",
        borderRadius:"5px",
        width:"70px",
        height:"25px",
        margin:"10px"
    },
    errorTimeLimit:{
        border:"1px solid red",
        borderRadius:"5px",
        width:"70px",
        height:"25px",
        margin:"10px"
    },
});