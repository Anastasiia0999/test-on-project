import './App.css';
import {Header} from "./features/index";
import {Footer} from "./features/index";
import {Container, makeStyles} from "@material-ui/core";
import {Routes} from "./shared/routes/routes";
import { BrowserRouter as Router } from 'react-router-dom';

const useStyles = makeStyles({
    appBody:{
        display:'flex',
        justifyContent:'center',
    },
})
function App() {
    const styles = useStyles();
  return (
          <div className="App">
              <Header />
              <div className={styles.modal} id="modal"> </div>
              <div className={styles.appBody}>
                  <Routes />
              </div>
              <Footer/>
          </div>
  );
}

export default App;
