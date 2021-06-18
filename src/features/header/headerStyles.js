import {makeStyles} from "@material-ui/core";

export const useStylesHeader = makeStyles({
    header:{
        background: '#FCF7F4',
        fontSize: '18px',
        boxShadow: '0px 2px 2px #888888'
    },
    headerMain:{
        padding: '5px 30px 5px 30px',
        height:'50px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    rightNav:{
        width:'auto',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    },
    link:{
        textDecoration: 'none',
        color:'#FFD7B5',
        fontWeight: '400',
        fontSize:'25px',
        '&:hover': {
            color: '#451B00',
            fontWeight: '460',
        },
    },
    linkInOut:{
        textDecoration: 'none',
        color:'#FFD7B5',
        fontWeight: '400',
        fontSize:'20px',
        '&:hover': {
            color: '#451B00',
            fontWeight: '460',
            cursor:'pointer'
        },
    },
    icon:{
        color:'#FFD7B5',
        fontSize: 28,
        '&:hover': {
            color: '#451B00',
            cursor:'pointer'
        },
        marginRight:'10px'
    },
    headerNav:{
        fontSize:'25px',
        height:'35px',
        background: '#FFD7B5',
        display:'flex',
        flexDirection: 'row',
        paddingLeft:'10px'
    },
    dropDown:{
        width:'150px',
        paddingTop:"5px",
        border:'none',
        fontSize: '20px',
        background:'#FFD7B5',
        color: '#451B00',
        '&:hover': {
            color: 'white',
            cursor:'pointer'
        },
        fontWeight:500
    },
    dropDownActive:{
        width:'150px',
        paddingTop:"5px",
        border:'none',
        fontSize: '20px',
        background:'#FFD7B5',
        color: '#451B00',
        '&:hover': {
            color: 'white',
            cursor:'pointer'
        },
        fontWeight:500
    },
    dropdownContent:{
        margin:"10px 0px",
        position:'relative',
        left:'20%',
        width:'90%',
        height:'80px',
        padding:'10px',
        background:'#FFD7B5',
        borderRadius:'5px',
        zIndex:'100'
    },
    ddLink:{
        height:'20px',
        fontSize: '16px',
        textDecoration: 'none',
        background:'#FFD7B5',
        color: '#451B00',
        '&:hover': {
            color: 'white',
            cursor:'pointer',
            textDecoration: 'underline'
        },
    }
});
