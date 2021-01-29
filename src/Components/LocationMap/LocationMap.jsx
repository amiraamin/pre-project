import React, {Component,Fragment} from 'react'
import MapImg from './../../../src/img/map2.jpg'
import styles from "./style.module.css";

class LocationMap extends Component {
state={
display:"none",
closeX:"flex"
}

showMap= ()=>{
    this.setState({
        display:"flex"

    })
    console.log('map here ');
    // this.styles.maxBox ="flex"

}
closeMap=()=>{
    this.setState({
        display:"none",

    })
    console.log(' close map  ');

}

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                    <div className="col-md-8">
                            <div className={`${styles.smallMap} mx-auto my-5 shadow p-3 mb-5 bg-white rounded`} onClick={this.showMap} >
                                <img className="mapImg img-fluid w-100" src={MapImg}>
                                   
                                </img>

                            </div>
                            </div>
                    <div className="col-md-4">
                                <div className="mapDes bg-bg-primary text-white h-100 mx-auto my-5 ">
                                    شرح الخريطه 
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati optio sapiente nesciunt deleniti impedit cumque esse at officia. Quibusdam quis dicta laudantium eligendi in consectetur qui adipisci reprehenderit recusandae libero.
                                    </p>
                                </div>
                            </div>
                           
                         

                            </div>
                       
                    </div>
                    <div className={`${styles.maxBox}  justify-content-between align-items-center`} style={{display:this.state.display}}>
                        <div className={`${styles.miniBox} position-relative`} style={{display:this.state.display}}>
                       <button className="btn btn-info" onClick={this.closeMap}  >
                           أغلق 
                       </button>

                        </div>

                    </div>


            
           </Fragment>
        );
    }
}


export default LocationMap;