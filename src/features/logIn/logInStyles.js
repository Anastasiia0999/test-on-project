import {makeStyles} from "@material-ui/core";

export const useStylesLogin = makeStyles({
    beigeRect:{
        height:'60%',
        width:'32%',
        position:'absolute',
        marginTop:'4%',
        marginRight:'3%',
        zIndex:'-100',
        backgroundColor:'#FFD7B5',
        borderRadius:'5px',
    },
    greyRect:{
        height:'60%',
        width:'32%',
        position:'absolute',
        marginTop:'7%',
        marginLeft:'2%',
        zIndex:'-200',
        backgroundColor:'#EDEAEA',
        borderRadius:'5px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.5)',
    },
    formAuth:{
        width:'30%',
        height:'auto',
        margin:'6%',
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
        padding: '10px 0px',
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
        fontWeight:'300',
        '&:hover':{
            cursor:'pointer',
        }
    },
    inputContainer:{
        height:'20%',
        marginLeft:'10%',
        marginTop:'15px',
        fontSize:'18px',
        fontWeight:'400',
        display: 'flex',
        flexDirection:'column',
        alignItems:'flex-start',
    },
    fieldForm:{
        width:'85%',
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
        width:'85%',
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
        padding:0,
        paddingLeft:'5px',
        margin:0,
        fontSize:'12px',
        color:'red'
    },
    submitButton:{
        marginLeft:'72%',
        marginTop:'15px',
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
    icon:{
        zIndex:500,
        position:'absolute',
        width:'20px',
        height:'60px',
        marginTop: '1.7%',
        marginLeft: '20%',
        fontSize:'30px',
        textAlign: 'center',
        '&:hover':{
            cursor:'pointer'
        }
    }
});