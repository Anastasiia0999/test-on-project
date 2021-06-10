import {makeStyles} from "@material-ui/core";

export const useStylesReg = makeStyles({
    beigeRect:{
        height:'120%',
        width:'40%',
        position:'absolute',
        marginTop:'4%',
        marginRight:'3%',
        zIndex:'-200',
        backgroundColor:'#EDEAEA',
        borderRadius:'5px',
    },
    greyRect:{
        height:'123%',
        width:'40%',
        position:'absolute',
        marginTop:'6%',
        marginLeft:'2%',
        zIndex:'-100',
        backgroundColor:'#FFD7B5',
        borderRadius:'5px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5)',
    },
    formAuth:{
        width:'38%',
        height:'auto',
        margin:'5%',
        padding:'10px',
        display:'flex',
        flexDirection:'column',
        border:'1px solid #331502',
        borderRadius:'5px'
    },
    formHeader:{
        margin:0,
        padding: '5px 0px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    },
    formHeaderTitle:{
        margin:0,
        padding: '5px 0px',
        fontSize:'25px',
        fontWeight:'400'
    },
    formHeaderBody:{
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        borderTop:'1px solid #331502'
    },
    formHeaderBodyInfo:{
        margin:0,
        padding: '10px 5px',
        fontSize:'18px',
        fontWeight:'300'
    },
    regLink:{
        textDecoration:'none',
        fontSize:'18px',
        fontWeight:'300'
    },
    inputContainer:{
        height:'auto',
        marginLeft:'10%',
        marginTop:'10px',
        fontSize:'18px',
        fontWeight:'400',
        display: 'flex',
        flexDirection:'column',
        alignItems:'flex-start',
    },
    fieldForm:{
        width:'80%',
        marginTop:'10px',
        paddingLeft:'10px',
        backgroundColor:'#FFD7B5',
        color: 'black',
        lineHeight:'28px',
        fontSize:'16px',
        border: '1px solid #451B00',
        borderRadius: '5px'
    },
    fieldError:{
        width:'80%',
        marginTop:'10px',
        paddingLeft:'10px',
        backgroundColor:'#FFD7B5',
        color: 'black',
        lineHeight:'28px',
        fontSize:'16px',
        border: '1px solid red',
        borderRadius: '5px',
        '&:focus':{
            borderColor: 'red',
        }
    },
    errorText:{
        padding:'5px',
        margin:'0px',
        fontSize:'12px',
        color:'red'
    },
    submitButton:{
        marginLeft:'80%',
        marginTop:'10px',
        width:'100px',
        height:'35px',
        textTransform:'capitalize',
        fontWeight:'100',
        fontSize: '18px',
        backgroundColor: '#451B00',
        color: "white",
        '&:hover':{
            opacity: 0.8,
            backgroundColor: '#451B00',
        }
    },
    disabledButton:{
        marginLeft:'80%',
        marginTop:'10px',
        width:'100px',
        height:'35px',
        textTransform:'capitalize',
        fontWeight:'200',
        fontSize: '18px',
        backgroundColor: 'darkgrey',
        color: "white",
    },
    icon:{
        zIndex:500,
        position:'absolute',
        width:'20px',
        height:'60px',
        marginTop: '1.6%',
        marginLeft: '25%',
        fontSize:'30px',
        textAlign: 'center',
        '&:hover':{
            cursor:'pointer'
        }
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
    selectContainer:{
        marginLeft:'50px',
        marginTop:'10px',
        fontSize:'18px',
        fontWeight:'400',
        display:"flex",
        flexDirection:"column",
    },
    selectInput:{
        width:"67%",
        height:"35px",
        lineHeight:"24px",
        padding:"5px",
        margin:"10px 0px",
        borderRadius:"5px",
        border:"1px solid black",
        fontSize:"16px",
        backgroundColor:'#FFD7B5',
    },
    errorIcon:{
        width:"15",
        height:"15",
        color:"red",
        padding:"0px 5px",
        margin:"0px"
    },
    errorContainer:{
        display:'flex',
        flexDirection:'row',
        width:'80%',
        alignItems:'center'
    }
});