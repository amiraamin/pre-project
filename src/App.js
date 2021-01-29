import './App.css';
import React, {Component} from 'react'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Products from './Components/Products/Products';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound'
import LocationMap from './Components/LocationMap/LocationMap'

import ProductDetails from './Components/ProductDetails/ProductDetails'

import img1 from "../src/img/madina.jpg";
import img2 from "../src/img/book1.jpg";
import img3 from "../src/img/img4.jpg";
import img4 from "../src/img/img3.jpg";
import {Route,Switch ,Redirect} from  'react-router-dom'
class App extends Component{
  state={
    books : 
    [
        {id:0,  name:"AL REYAD ", type: "hadith", author:"Ali" ,imgURL:img1},
        {id:1,  name:"Al sahaba  ", type: "seera", author:"Khaled",imgURL:img3},
        {id:2,  name:"Al rahiq ", type: "feqh", author:"mohamed",imgURL:img4},
        {id:3,  name:"Al tohfa ", type: "tajweed", author:"jazry",imgURL:img2},
        {id:4,  name:"Al daleel ", type: "quraan", author:"amr",imgURL:img1},
        {id:5,  name:"Al rahiq ", type: "feqh", author:"mohamed",imgURL:img4},
        {id:6,  name:"Al tohfa ", type: "tajweed", author:"jazry",imgURL:img2},
        {id:7,  name:"Al daleel ", type: "quraan", author:"amr",imgURL:img1}

        // عيزه أعدي عليهم وأبعتهم واحد واحد لصفحة البرودكت
        // products page => parent
        // product page =>  child
        // we will send from parent to child 
    ]
}
deleteProduct = (productId)=>
{
    console.log(productId);
     //أولا أعمل نسخه من الاوبجكتس عشان اشتغل عليها 
    let newProducts = this.state.books; //copy 1 خطوة الأولي 
     newProducts= newProducts.filter((u)=>u.id !== productId)  //رجع لي كل حاجه ماعدا الاوجكت الل عنده الid  ده الل انا بعته 
   // ( عملت تغيير في ال state)=>  ( يبقي لازم اهندل ال set state)
     this.state.books=newProducts;
     this.setState({books:newProducts}) //بتنده علي الرندر وتهندله
    }
    UbdateProductType =(product)=>{
        let newProducts = this.state.books; //copy 1 خطوة الأولي 
      let index = newProducts.indexOf(product);
      newProducts[index].type = "amira";
      this.setState({books:newProducts}) //بتنده علي الرندر وتهندله

    }
    UbdateProductAuthor= (product)=>{
        let newProducts = this.state.books; //copy 1 خطوة الأولي 
         let index = newProducts.indexOf(product);
         newProducts[index].author="Ahmed"
         this.setState({books:newProducts}) //بتنده علي الرندر وتهندله

    }


  render(){
    return(
    <React.Fragment>
       <Navbar/>
       <Switch>
       <Route path='/Home' component={Home}/>
       <Route path='/About' component={About}/>
       <Route path='/Contact' component={Contact}/>
       <Route path='/LocationMap' component={LocationMap}/>

       <Route path='/ProductDetails/:id' component={ProductDetails}/>

       <Route path='/Products' render = {(props)=><Products history={props.history}  productsData =  {this.state.books} deleteProduct={this.deleteProduct} UbdateProductType={this.UbdateProductType} UbdateProductAuthor={this.UbdateProductAuthor}   />
}/>
       <Redirect exact from='/' to = "/Home"/>
       <Route path ="*"  component={NotFound}/>
    
      
       </Switch>
     
         <Footer/>
    </React.Fragment>
     
    )

  }
}

export default App;
// history={this.history} location={this.location} match ={this.match} == {...props}
// roting parameter ==> '/ProductDetails/:id جايلك متغير من برا 
// جاي من ميثود خارجيه 