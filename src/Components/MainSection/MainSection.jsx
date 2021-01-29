import React, {Component,Fragment} from 'react'
import styles from "./style.module.css";

class MainSection extends Component {


    render() {
        return (
            <Fragment>
            <div className={`  ${styles.allMain} text-white `}>
           <div className="container">
               <div className={`${styles.overlay}`}>


               <div className="row">
                   <div className="smallScreen mx-auto my-lg-4 text-center">
                       <h1>Main Section </h1>
                       <div className="bg-info text-white">
                         هنا شرح الدوائر 

                       </div>
                   </div>
               </div>

               <div className="row">
                    <div className="circles text-center m-auto">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing el?
                        </p>
                    </div>
               </div>

                   </div>
               </div>
               </div>
         
            </Fragment>
        );
    }
}


export default MainSection;