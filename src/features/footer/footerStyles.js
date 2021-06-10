import {makeStyles} from "@material-ui/core";

export const useStylesFooter = makeStyles({
    footer:{
        height:'80px',
        backgroundColor: '#FCF7F4',
        padding:'0 30px 0 30px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    contacts:{
        width:'200px',
        fontSize:'16px',
        fontWeight:400
    },
    socialMedia:{
        width:'130px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    icon:{
        color:'#FFD7B5',
        fontSize: 30,
        '&:hover': {
            color: '#451B00',
            cursor:'pointer'
        },
    },
});