import React, {Component,Fragment} from 'react'
import styles from "./style.module.css";

class FadlSefa extends Component {

    render() {
        return (
            <Fragment>
              <div className={` ${styles.rotateCard} w-50   text-white d-flex justify-content-center align-items-center`}>
                 <h3> فــــضل الصفـــة   </h3>
              </div>
              <div className={` ${styles.rotateCard} w-50    d-flex justify-content-center align-items-center`}>
                 <h3> فــــ الصفـــةضل   </h3>
              </div>
            </Fragment>
        );
    }
}


export default FadlSefa;