import BannerImage from "../../assets/images/test.png";
import {makeStyles} from "@material-ui/core";

export const useStylesMainPage = makeStyles({
    mainPage:{
        display:"flex",
        flexDirection:"column",
        width:"100%"
    },
    banner:{
        width: '100%',
        height:'500px',
        backgroundImage: `url(${BannerImage})`,
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    bannerCardWrapper:{
        position:'absolute',
        height: '300px',
        width: '450px',
        margin: '150px 0 0 200px',
        //border: '1px solid black'
    },
    bannerCardSecondary:{
        width: '370px',
        height: '250px',
        backgroundColor: '#FFD7B5',
        borderRadius: '5px'
    },
    bannerCardThirdly:{
        position:'absolute',
        margin: '50px 0 0 40px',
        width: '320px',
        height: '190px',
        backgroundColor: '#D8D8D8',
        borderRadius: '5px'
    },
    mainCard:{
        position: "relative",
        margin: '-220px 0 0 20px',
        padding:'20px',
        width: '350px',
        height: '200px',
        border: '1px solid #451B00',
        borderRadius: '5px'
    },
    bannerCardText:{
        fontSize:'35px',
        fontWeight:'400'
    },
    aboutUs: {
        paddingTop:"20px"
    },
    title: {
        width:'300px',
        margin:"0 auto",
        paddingTop:'20px',
        textAlign: "center",
        borderBottom: "1px solid #451B00",
        transform:'translateY(-20px)'
    },
    cardsContainer:{
        margin:'30px 0 30px 0',
        display:'flex',
        flexFlow:'row wrap',
        alignItems:'center',
        justifyContent:'center'
    },
    infoWrapper:{
        display:"flex",
        alignItems:'center',
        margin:'20px',
        paddingLeft:'20px',
        width:'380px',
        height:'280px',
        fontSize:'23px',
        borderLeft:'1px solid #451B00'
    },
    infoWrapperReverse:{
        display:"flex",
        alignItems:'center',
        textAlign:"right",
        margin:'20px',
        paddingRight:'20px',
        width:'380px',
        height:'280px',
        fontSize:'23px',
        borderRight:'1px solid #451B00'
    },
    buttonUp:{
        zIndex:500,
        position:'absolute',
        width:'60px',
        height:'60px',
        backgroundColor:'#FFD7B5',
        borderRadius:'50%',
        fontSize:'30px',
        textAlign: 'center',
        marginLeft:'90%',
        marginTop:'130%'
    },
    iconUp:{
        color:'#FCF7F4',
        fontSize: 30,
        marginTop:'20%',
        '&:hover': {
            opacity:'0.7',
            color: '#451B00',
            cursor:'pointer'
        },
    },
    btnDark:{
        width:"150px",
        marginLeft:'48%',
        textTransform:'capitalize',
        fontWeight:'100',
        fontSize: '20px',
        backgroundColor: '#451B00',
        color: "white",
        '&:hover':{
            opacity: 0.8,
            backgroundColor: '#451B00',
            cursor:"pointer"
        },
        border:"none",
        borderRadius:"5px",
        height:"50px"
    }
});