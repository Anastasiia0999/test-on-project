import {makeStyles} from "@material-ui/core";

export const useStylesTestsList = makeStyles({
    testsListContainer:{
        width:"65%",
        height:"auto",
        margin:"70px 0px",
        display:"flex",
        flexDirection:"column",
        border:"1px solid black",
        borderRadius:"5px"
    },
/*   filteringSection:{
        width:"800px",
        display:"flex",
    },*/
    table:{
        width:"100%",
        display:"flex",
        flexDirection:"column",
    },
    tableRow:{
        width:"100%",
        height:"50px",
        padding:"10px 0px",
        borderBottom:"1px solid black",
        display:"flex",
        flexDirection:"row",
        alignItems:"center"
    },
    tableCol:{
        height:"25px",
        width:"150px"
    },
    tableCol1:{
        height:"25px",
        width:"50px !important",
        paddingLeft:"20px"
    },
    tableCol2:{
        height:"auto",
        width:"300px",
        padding:"15px 0px"
    },
    tableRowContent:{
        width:"100%",
        height:"35px",
        padding:"10px 0px",
        borderTop:"1px solid black",
        display:"flex",
        flexDirection:"row",
        alignItems:"center"
    },
    tableHeader:{
        height:"25px",
        padding:"10px 0px",
        width:"150px"
    },
    tableHeader1:{
        height:"25px",
        padding:"10px 0px",
        width:"50px"
    },
    selectInput:{
        width:"20%",
        height:"35px",
        lineHeight:"24px",
        padding:"5px",
        marginTop:"15px",
        marginLeft:"15px",
        borderRadius:"5px",
        border:"1px solid black",
        background:"#FFD7B5",
        fontSize:"16px",
        '&:hover':{
            cursor:"pointer"
        }
    },
    dateInput:{
        width:"20%",
        height:"25px",
        lineHeight:"24px",
        padding:"5px",
        marginTop:"15px",
        marginLeft:"15px",
        borderRadius:"5px",
        border:"1px solid black",
        background:"#FFD7B5",
        fontSize:"16px",
        '&:hover':{
            cursor:"pointer"
        }
    },
    testInput:{
        width:"25%",
        height:"25px",
        lineHeight:"24px",
        padding:"5px",
        marginTop:"15px",
        marginLeft:"10px",
        borderRadius:"5px",
        border:"1px solid black",
        background:"white",
        fontSize:"16px",
        paddingLeft:"10px",

    },
    selectOption:{
        background:"#FFD7B5",
    },
    icon:{
        position:"absolute",
        top:"187px",
        left:"425px",
        height:"25px",
        width:"25px",
    },
    buttonLight:{
        marginLeft:"465px",
        marginTop:"5px",
        width:"7%",
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
    info:{
        width:"auto",
        backgroundColor:"#fff0e4",
        borderRadius:"5px",
        margin:"0 auto",
        padding:"10px",
        marginTop:"15px",
        marginBottom:"15px",
    }
})