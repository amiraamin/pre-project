import React, {Component,Fragment} from 'react'
import {Link,Route} from 'react-router-dom'
import FadlSefa from '../FadlSefa/FadlSefa';
import HelpMe from '../HelpMe/HelpMe';

class ProductDetails extends Component {

    render() {
      console.log(this.props.match.params.id);
        return (
            <Fragment>
      <h1>users Details  </h1>
     <h2> Product number = {this.props.match.params.id}</h2> 
                   {/* Nested Comonent        */}
<div className="row">
    <div className="col-md-2">
     <ul>
         <li>
             <Link to="/ProductDetails/HelpMe"> اظهر المعينات</Link> 
         </li>
         <li> 
         <Link to="/ProductDetails/FadlSefa">اظهر الفضل</Link>
         </li>
     </ul>
    </div>
    <div className="col-md-10">
        <div className="containCard ">
    <Route path='/ProductDetails/FadlSefa' component={FadlSefa}/>
    <Route path='/ProductDetails/HelpMe' component={HelpMe}/>

        </div>
    </div>
</div>



            </Fragment>
        );
    }
}


export default ProductDetails;
// في البروبس عندي اوبجكت ماتش .. ده بيماتشينج مع العنوان الل فوق وعنده 
// att== id 
// اقدر لو مسكته اجيب الداتا صاحبة ال id ده 

//programatical navigation ==> navigation from js >> not from html 
